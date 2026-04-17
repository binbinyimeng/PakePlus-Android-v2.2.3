// 彬彬升级系统配置

// 赚钱升级系统
const moneyUpgradeSystem = {
    level: 1,
    maxLevel: 6,
    
    // 各等级的配置
    levels: {
        1: {
            sunProductionSpeed: 1.0, // 生产速度倍率
            sunAmount: 10, // 每次生产阳光数量
            cost: 0 // 初始等级不需要消耗
        },
        2: {
            sunProductionSpeed: 2.0, // 生产速度提高100%
            sunAmount: 10, // 阳光数量保持10
            cost: 20 // 升级到2级需要的梦境点数
        },
        3: {
            sunProductionSpeed: 2.0, // 生产速度保持不变
            sunAmount: 20, // 阳光数量提高到20
            cost: 50 
        },
        4: {
            sunProductionSpeed: 3.0, 
            sunAmount: 20, // 阳光数量提高到20
            cost: 50
        },
        5: {
            sunProductionSpeed: 3.0, 
            sunAmount: 50, // 阳光数量提高到50
            cost: 100
        },
        6: {
            sunProductionSpeed: 3.0, // 生产速度保持不变
            sunAmount: 100, // 阳光数量提高到100
            cost: 200 
        }
    },
    
    // 获取描述
    getDescription: function() {
        const info = this.getCurrentLevelInfo();
        if (this.level === 1) {
            return "当前等级1：生产速度100%，每次产生10阳光";
        } else if (this.level === 2) {
            return "当前等级2：生产速度200%，每次产生10阳光";
        } else if (this.level === 3) {
            return "当前等级3：生产速度200%，每次产生20阳光";
        } else if (this.level === 4) {
            return "当前等级4：生产速度300%，每次产生20阳光";
        } else if (this.level === 5) {
            return "当前等级5：生产速度300%，每次产生50阳光";
        } else if (this.level === 6) {
            return "当前等级6：生产速度300%，每次产生100阳光";
        }
        return "";
    },
    
    // 初始化
    init: function() {
        this.level = 1;
    },
    
    // 升级
    upgrade: function(dreamPoints) {
        if (this.level >= this.maxLevel) {
            return { success: false, message: "已达到最高等级" };
        }
        
        const nextLevel = this.level + 1;
        const cost = this.levels[nextLevel].cost;
        
        if (dreamPoints < cost) {
            return { success: false, message: "梦境点数不足" };
        }
        
        this.level = nextLevel;
        return { 
            success: true, 
            message: `升级到${nextLevel}级成功`,
            cost: cost
        };
    },
    
    // 获取当前等级信息
    getCurrentLevelInfo: function() {
        return this.levels[this.level];
    },
    
    // 获取下一级信息
    getNextLevelInfo: function() {
        if (this.level >= this.maxLevel) return null;
        return this.levels[this.level + 1];
    }
};

// 彬彬升级系统（卡牌限制等级）
const cardLimitSystem = {
    level: 1,
    maxLevel: 30, 
    
    // 计算升级费用（每级费用递增）
    getUpgradeCost: function(currentLevel) {
        // 基础费用 + 当前等级 * 10
        return 30 + currentLevel * 20;
    },
    
    // 初始化
    init: function() {
        this.level = 1;
    },
    
    // 升级
    upgrade: function(dreamPoints) {
        if (this.level >= this.maxLevel) {
            return { success: false, message: "已达到最高等级" };
        }
        
        const cost = this.getUpgradeCost(this.level);
        
        if (dreamPoints < cost) {
            return { success: false, message: "梦境点数不足" };
        }
        
        this.level++;
        return { 
            success: true, 
            message: `升级到${this.level}级成功`,
            cost: cost
        };
    },
    
    // 获取当前限制等级
    getCurrentLimit: function() {
        return this.level;
    },
    
    // 获取描述
    getDescription: function() {
        return `当前卡牌限制等级：${this.level}（每株植物最多${this.level}张卡片）`;
    }
};

// 植物购买系统
const plantShopSystem = {
    // 已解锁的植物名称列表
    unlockedPlants: [],
    
    // 当前可购买的植物
    availablePlant: null,
    
    // 初始化
    init: function() {
        this.unlockedPlants = [];
        this.availablePlant = null;
    },
    
    // 检查植物是否解锁
    isPlantUnlocked: function(plantName) {
        return this.unlockedPlants.includes(plantName);
    },
    
    // 解锁植物
    unlockPlant: function(plantName) {
        if (!this.isPlantUnlocked(plantName)) {
            this.unlockedPlants.push(plantName);
        }
    },
    
    // 随机选择可购买的植物（等级>4且showInPlantBar不为false）
    refreshAvailablePlant: function(plantsData) {
        // 尝试从传入的参数或 config.plants 获取植物
        let plants = [];
        if (plantsData) {
            plants = plantsData;
        } else if (typeof config !== 'undefined' && config.plants) {
            plants = config.plants;
        } else if (typeof plantTypes !== 'undefined') {
            // 如果 config 还没有定义，直接从 plantTypes 获取
            plants = Object.values(plantTypes);
        }
        
        if (plants.length === 0) {
            this.availablePlant = null;
            return;
        }
        
        // 筛选符合条件的植物：等级>4，showInPlantBar不为false，且尚未解锁
        const eligiblePlants = plants.filter(plant => {
            const plantLevel = plant.level || 0;
            return plantLevel > 4 && 
                   plant.showInPlantBar !== false && 
                   !this.isPlantUnlocked(plant.name);
        });
        
        if (eligiblePlants.length === 0) {
            this.availablePlant = null;
            return;
        }
        
        // 随机选择一个植物
        const randomIndex = Math.floor(Math.random() * eligiblePlants.length);
        const selectedPlant = eligiblePlants[randomIndex];
        
        // 计算价格（统一为20点梦境点数）
        const cost = 20;
        
        this.availablePlant = {
            plant: selectedPlant,
            cost: cost
        };
    },
    
    // 购买植物
    buyPlant: function(dreamPoints) {
        if (!this.availablePlant) {
            return { success: false, message: "没有可购买的植物" };
        }
        
        if (dreamPoints < this.availablePlant.cost) {
            return { success: false, message: "梦境点数不足" };
        }
        
        const plantName = this.availablePlant.plant.name;
        const cost = this.availablePlant.cost;
        
        // 解锁植物
        this.unlockPlant(plantName);
        
        // 清空当前可用植物
        this.availablePlant = null;
        
        return { 
            success: true, 
            message: `成功解锁植物：${plantName}`,
            cost: cost,
            plantName: plantName
        };
    },
    
    // 获取可用植物
    getAvailablePlant: function() {
        return this.availablePlant;
    },
    
    // 初始化自动解锁的植物（等级<=4）
    initAutoUnlockedPlants: function(plantsData) {
        console.log("initAutoUnlockedPlants 被调用");
        console.log("传入的 plantsData:", plantsData);
        
        // 尝试从传入的参数或 config.plants 获取植物
        let plants = [];
        if (plantsData) {
            plants = plantsData;
            console.log("使用传入的 plantsData，植物数量:", plants.length);
        } else if (typeof config !== 'undefined' && config.plants) {
            plants = config.plants;
            console.log("使用 config.plants，植物数量:", plants.length);
        } else if (typeof plantTypes !== 'undefined') {
            // 如果 config 还没有定义，直接从 plantTypes 获取
            plants = Object.values(plantTypes);
            console.log("使用 plantTypes，植物数量:", plants.length);
        }
        
        console.log("所有植物列表:", plants.map(p => ({ name: p.name, level: p.level || 0, showInPlantBar: p.showInPlantBar })));
        
        // 自动解锁等级<=4且showInPlantBar不为false的植物
        plants.forEach(plant => {
            const plantLevel = plant.level || 0;
            const shouldUnlock = plantLevel <= 4 && plant.showInPlantBar !== false;
            
            console.log(`检查植物 ${plant.name}: 等级=${plantLevel}, showInPlantBar=${plant.showInPlantBar}, 应该解锁=${shouldUnlock}`);
            
            if (shouldUnlock) {
                this.unlockPlant(plant.name);
                console.log(`已解锁植物: ${plant.name}`);
            }
        });
        
        console.log("最终自动解锁的植物列表:", this.unlockedPlants);
    }
};

// 全局彬彬升级系统
const binbinUpgradeSystem = {
    moneyUpgrade: moneyUpgradeSystem,
    cardLimit: cardLimitSystem,
    plantShop: plantShopSystem,
    
    // 初始化整个系统
    init: function(plantsData) {
        this.moneyUpgrade.init();
        this.cardLimit.init();
        this.plantShop.init();
        this.plantShop.initAutoUnlockedPlants(plantsData);
    },
    
    // 重置系统（进入新肉鸽模式时）
    reset: function(plantsData) {
        this.init(plantsData);
    }
};

window.binbinUpgradeSystem = binbinUpgradeSystem;
window.moneyUpgradeSystem = moneyUpgradeSystem;
window.cardLimitSystem = cardLimitSystem;
window.plantShopSystem = plantShopSystem;