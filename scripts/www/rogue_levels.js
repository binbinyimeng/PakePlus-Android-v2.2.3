// 肉鸽模式关卡配置 - 自动生成机制
// ========== 僵尸生成间隔和波次间隔基础配置 ==========
const intervalConfig = {
    // 普通波次的基础值
    normal: {
        baseSpawnInterval: 4000,      // 基础僵尸生成间隔（毫秒）
        baseWaveInterval: 10000        // 基础波次间隔（毫秒）
    },
    // 快速波次的基础值
    fast: {
        baseSpawnInterval: 1400,        // 基础僵尸生成间隔（毫秒）
        baseWaveInterval: 12000          // 基础波次间隔（毫秒）
    },
    minInterval: 60,                  // 最小间隔（毫秒）
    levelFactor: 40,                  // 关卡数影响因子（每关减少多少毫秒）
    timeFactor: 4                     // 时间影响因子（每秒减少多少毫秒）
};
// ========== 动态难度调节系统 ==========
window.difficultyAdjustmentSystem = {
    // 当前累积的难度调节点数（本关卡内触发加速时增加）
    currentDifficultyPoints: 0,
    // 下一关将要应用的难度调节点数（上一关累积的）
    nextLevelDifficultyPoints: 0,
    // 每点难度对波次间隔的减少（毫秒）
    waveIntervalReductionPerPoint: 5,
    // 每点难度对威胁值的增加
    threatValueAdditionPerPoint: 10,
    
    // 增加难度点数（玩家触发加速生成僵尸时调用）
    addDifficultyPoints: function(points = 1) {
        this.currentDifficultyPoints += points;
        console.log(
            `🔴 难度调节: 触发加速生成！当前关卡难度点数 +${points}, ` +
            `总计: ${this.currentDifficultyPoints}, ` +
            `(下一关将减少 ${this.currentDifficultyPoints * this.waveIntervalReductionPerPoint}ms 间隔, ` +
            `增加 ${this.currentDifficultyPoints * this.threatValueAdditionPerPoint} 威胁值)`
        );
    },
    
    // 获取当前关卡应用的难度调节（下一关使用）
    getDifficultyAdjustment: function() {
        return {
            waveIntervalReduction: this.nextLevelDifficultyPoints * this.waveIntervalReductionPerPoint,
            threatValueAddition: this.nextLevelDifficultyPoints * this.threatValueAdditionPerPoint,
            difficultyPoints: this.nextLevelDifficultyPoints
        };
    },
    
    // 关卡结束时：将当前难度点数移到下一关，清除当前点数
    onLevelComplete: function() {
        this.nextLevelDifficultyPoints = this.currentDifficultyPoints;
        this.currentDifficultyPoints = 0;
        console.log(
            `🔵 关卡完成: 本关卡累积难度点数 ${this.nextLevelDifficultyPoints}, ` +
            `已保存到下一关应用！`
        );
    },
    
    // 游戏失败/重新开始时：清除所有难度点数
    resetDifficulty: function() {
        const oldCurrent = this.currentDifficultyPoints;
        const oldNext = this.nextLevelDifficultyPoints;
        this.currentDifficultyPoints = 0;
        this.nextLevelDifficultyPoints = 0;
        console.log(
            `🟢 难度重置: 游戏失败/重新开始！清除难度点数 ` +
            `(当前: ${oldCurrent}, 下一关: ${oldNext})`
        );
    },
    
    // 进入新关卡时：重置当前点数，保留下一关点数作为当前应用
    onEnterLevel: function() {
        console.log(
            `🟡 进入关卡: 应用难度点数 ${this.nextLevelDifficultyPoints}, ` +
            `波次间隔 -${this.nextLevelDifficultyPoints * this.waveIntervalReductionPerPoint}ms, ` +
            `威胁值 +${this.nextLevelDifficultyPoints * this.threatValueAdditionPerPoint}`
        );
    },
    
    // 应用难度调节到波次配置
    applyToWave: function(waveConfig) {
        const adjustment = this.getDifficultyAdjustment();
        if (adjustment.difficultyPoints === 0) return waveConfig;
        
        // 修改威胁值
        const originalThreat = waveConfig.threatValue;
        waveConfig.threatValue = Math.max(1, originalThreat + adjustment.threatValueAddition);
        
        console.log(
            `🎯 难度调节应用: 原威胁值 ${originalThreat.toFixed(2)}, ` +
            `调整后 ${waveConfig.threatValue.toFixed(2)}, ` +
            `难度点数: ${adjustment.difficultyPoints}`
        );
        
        return waveConfig;
    },
    
    // 应用难度调节到间隔计算
    applyToIntervals: function(spawnInterval, waveInterval) {
        const adjustment = this.getDifficultyAdjustment();
        if (adjustment.difficultyPoints === 0) {
            return { spawnInterval, waveInterval };
        }
        
        const adjustedSpawnInterval = Math.max(50, spawnInterval - adjustment.waveIntervalReduction);
        const adjustedWaveInterval = Math.max(50, waveInterval - adjustment.waveIntervalReduction);
        
        console.log(
            `⏱️ 难度调节应用: 原生成间隔 ${spawnInterval}ms → ${adjustedSpawnInterval}ms, ` +
            `原波次间隔 ${waveInterval}ms → ${adjustedWaveInterval}ms, ` +
            `减少 ${adjustment.waveIntervalReduction}ms, ` +
            `难度点数: ${adjustment.difficultyPoints}`
        );
        
        return {
            spawnInterval: adjustedSpawnInterval,
            waveInterval: adjustedWaveInterval
        };
    }
};



// ========== 计算僵尸生成间隔和波次间隔的新机制 ==========
/**
 * 计算动态间隔
 * @param {boolean} isFastWave - 是否是快速波次
 * @param {number} levelNumber - 当前关卡数（例如：101表示第1关）
 * @param {number} levelTime - 当前关卡已进行的时间（秒）
 * @returns {Object} 包含 spawnInterval 和 waveInterval 的对象
 */
function calculateDynamicIntervals(isFastWave, levelNumber, levelTime) {
    console.log('========== 间隔计算过程 ==========');
    console.log(`输入参数: isFastWave=${isFastWave}, levelNumber=${levelNumber}, levelTime=${levelTime}s`);
    
    // 获取基础配置
    const baseConfig = isFastWave ? intervalConfig.fast : intervalConfig.normal;
    const waveType = isFastWave ? '快速波次' : '普通波次';
    console.log(`波次类型: ${waveType}`);
    console.log(`基础配置: 基础生成间隔=${baseConfig.baseSpawnInterval}ms, 基础波次间隔=${baseConfig.baseWaveInterval}ms`);
    
    // 计算关卡数影响（减去关卡数 × 关卡因子）
    const actualLevel = levelNumber - 100; // 101→1, 102→2, ...
    const levelReduction = actualLevel * intervalConfig.levelFactor;
    console.log(`关卡影响: 实际关卡数=${actualLevel}, 关卡因子=${intervalConfig.levelFactor}ms/关, 关卡减少量=${levelReduction}ms`);
    
    // 计算时间影响（减去时间 × 时间因子）
    const timeReduction = levelTime * intervalConfig.timeFactor;
    console.log(`时间影响: 关卡时间=${levelTime}s, 时间因子=${intervalConfig.timeFactor}ms/s, 时间减少量=${timeReduction}ms`);
    
    // 计算总减少量
    const totalReduction = levelReduction + timeReduction;
    console.log(`总减少量: ${totalReduction}ms`);
    
    // 计算最终间隔（应用最小限制前）
    let spawnIntervalBeforeMin = baseConfig.baseSpawnInterval - totalReduction;
    let waveIntervalBeforeMin = baseConfig.baseWaveInterval - totalReduction;
    console.log(`应用最小限制前: 生成间隔=${spawnIntervalBeforeMin}ms, 波次间隔=${waveIntervalBeforeMin}ms`);
    
    // 确保间隔不低于最小值
    let spawnInterval = Math.max(spawnIntervalBeforeMin, intervalConfig.minInterval);
    let waveInterval = Math.max(waveIntervalBeforeMin, intervalConfig.minInterval);
    console.log(`最小间隔限制: ${intervalConfig.minInterval}ms`);
    
    if (spawnInterval !== spawnIntervalBeforeMin) {
        console.log(`生成间隔已被限制到最小值: ${spawnInterval}ms`);
    }
    if (waveInterval !== waveIntervalBeforeMin) {
        console.log(`波次间隔已被限制到最小值: ${waveInterval}ms`);
    }
    
    const baseResult = {
        spawnInterval: Math.floor(spawnInterval),
        waveInterval: Math.floor(waveInterval)
    };
    
    // 应用难度调节
    let finalResult = baseResult;
    if (window.difficultyAdjustmentSystem) {
        finalResult = window.difficultyAdjustmentSystem.applyToIntervals(
            baseResult.spawnInterval,
            baseResult.waveInterval
        );
    }
    
    console.log(`最终结果: 生成间隔=${finalResult.spawnInterval}ms, 波次间隔=${finalResult.waveInterval}ms`);
    
    return finalResult;
}

const zombieThreatValues = {
    "normal": 1,
    "normalEnhanced": 1.2,
    "big": 2.5,
    "bigEnhanced": 3,
    "shieldZombie": 1.8,
    "shieldZombieEnhanced": 2,
    "archer": 4,
    "bigSpider": 3,
    "strongZombie": 40,
    "strongArcher": 50,
    "assassin": 4,
    "thug": 20,
    "dog": 2,
    "police": 60,
    "lizard": 300
};

// ========== 僵尸威胁值范围配置 ==========
// 决定了只有当前波次的最终威胁值在该范围内才能刷新该僵尸
// min: 最小威胁值（包含），max: 最大威胁值（包含），不设置表示无限制
const zombieThreatRange = {
    "normal": { min: 0, max: 500 },         
    "normalEnhanced": { min: 0, max: 500 },  
    "big": { min: 200, max: 1000 },            
    "bigEnhanced": { min: 200, max: 5000 },    
    "shieldZombie": { min: 0, max: null },    
    "shieldZombieEnhanced": { min: 0, max: null },
    "archer": { min: 500, max: 200000 },       
    "bigSpider": { min: 200, max: null },       
    "strongZombie": { min: 1000, max: null },  
    "strongArcher": { min: 1000, max: null },  
    "assassin": { min: 1000, max: null },       
    "thug": { min: 300, max: null },            
    "dog": { min: 1000, max: null },             
    "police": { min: 2000, max: null },        
    "lizard": { min: 5000, max: null },
    "holeZombie": { min: 3000, max: null }        
};



// 僵尸权重配置（值越大，出现概率越高）
const zombieWeights = {
    "normal": 10, // 普通僵尸出现概率最高
    "normalEnhanced": 10, // 增强普通僵尸
    "big": 10, // 大僵尸
    "bigEnhanced": 10, // 增强大僵尸
    "shieldZombie": 10, // 盾兵僵尸
    "shieldZombieEnhanced": 10, // 增强盾兵僵尸
    "archer": 10, // 弓箭僵尸
    "bigSpider": 8, // 大蜘蛛
    "strongZombie": 8, // 强壮僵尸（稀有）
    "strongArcher": 8, // 强壮弓箭僵尸（非常稀有）
    "assassin": 5, // 刺客僵尸
    "thug": 8, // 暴徒僵尸
    "dog": 1, // 狗僵尸
    "police": 6, // 警察僵尸
    "lizard": 2, // 妙龙僵尸
    "holeZombie": 3 // 洞僵尸
};

const zombiePool = [
    "normal", "normalEnhanced", "big", "bigEnhanced", "shieldZombie", "shieldZombieEnhanced", "assassin",
    "archer", "bigSpider", "strongZombie", "strongArcher", "thug", "dog", "police", "lizard", "holeZombie"
];

const rogueLevels = [
    // 第1关
    {
        id: 101,
        name: "肉鸽模式 - 第1关",
        description: "初始挑战，适应肉鸽节奏",
        waves: [{ waveNumber: 1, isFirst: true, isLast: true, threatValue: 2, isFastWave: true, excludedZombieTypes: ["archer", "strongArcher", "strongZombie", "bigSpider", "big", "bigEnhanced", "assassin"] }]
    },
    // 第2关
    {
        id: 102,
        name: "肉鸽模式 - 第2关",
        description: "基础挑战，无特殊加成",
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 2, isFastWave: false, excludedZombieTypes: ["archer", "strongArcher", "big", "bigEnhanced", "bigSpider", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 7, isFastWave: false, excludedZombieTypes: ["strongArcher", "big", "bigEnhanced", "bigSpider", "assassin"] },
            { waveNumber: 3, isFirst: false, isLast: true, threatValue: 30, isFastWave: true, excludedZombieTypes: ["big", "bigEnhanced", "bigSpider", "assassin"] }
        ]
    },
    // 第3关
    {
        id: 103,
        name: "肉鸽模式 - 第3关 · 轻风",
        description: "⚡ 僵尸速度提升20%",
        zombieSpeedPercent: 20,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 5, isFastWave: false, excludedZombieTypes: ["strongArcher", "big", "bigEnhanced", "bigSpider", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 13, isFastWave: true, excludedZombieTypes: ["strongArcher", "big", "bigEnhanced", "bigSpider", "assassin"] },
            { waveNumber: 3, isFirst: false, isLast: true, threatValue: 60, isFastWave: true, excludedZombieTypes: ["big", "bigEnhanced", "bigSpider", "assassin"] }
        ]
    },
    // 第4关
    {
        id: 104,
        name: "肉鸽模式 - 第4关 · 坚韧",
        description: "🛡️ 僵尸生命值提升30%",
        zombieHealthPercent: 30,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 30, isFastWave: false, excludedZombieTypes: ["strongArcher", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 107, isFastWave: true, excludedZombieTypes: ["assassin"] },
            { waveNumber: 3, isFirst: false, isLast: true, threatValue: 500, isFastWave: true, excludedZombieTypes: ["assassin"] }
        ]
    },
    // 第5关
    {
        id: 105,
        name: "肉鸽模式 - 第5关 · 锋芒",
        description: "⚔️ 僵尸攻击力提升50%",
        zombieAttackPercent: 50,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 30, isFastWave: false, excludedZombieTypes: ["normal", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 150, isFastWave: true, excludedZombieTypes: ["normal", "assassin"] },
            { waveNumber: 3, isFirst: false, isLast: true, threatValue: 1000, isFastWave: true, excludedZombieTypes: ["normal", "assassin"] }
        ]
    },
    // 第6关
    {
        id: 106,
        name: "肉鸽模式 - 第6关 · 疾风",
        description: "⚡🛡️ 速度+50%，生命+40%",
        zombieSpeedPercent: 50,
        zombieHealthPercent: 40,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 30, isFastWave: false, excludedZombieTypes: ["normal", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 200, isFastWave: true, excludedZombieTypes: ["normal"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 333, isFastWave: false, excludedZombieTypes: ["normal"] },
            { waveNumber: 4, isFirst: false, isLast: true, threatValue: 2000, isFastWave: true, excludedZombieTypes: ["normal"] }
        ]
    },
    // 第7关
    {
        id: 107,
        name: "肉鸽模式 - 第7关 · 凶猛",
        description: "⚔️⚡ 攻击+80%，速度+40%",
        zombieAttackPercent: 80,
        zombieSpeedPercent: 40,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 130, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 667, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 1200, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced"] },
            { waveNumber: 4, isFirst: false, isLast: true, threatValue: 3500, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced"] }
        ]
    },
    // 第8关
    {
        id: 108,
        name: "肉鸽模式 - 第8关 · 壁垒",
        description: "🛡️⚔️ 生命+100%，攻击+40%",
        zombieHealthPercent: 100,
        zombieAttackPercent: 40,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 170, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 733, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 1200, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced"] },
            { waveNumber: 4, isFirst: false, isLast: false, threatValue: 1733, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced"] },
            { waveNumber: 5, isFirst: false, isLast: true, threatValue: 4700, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced"] }
        ]
    },
    // 第9关
    {
        id: 109,
        name: "肉鸽模式 - 第9关 · 狂暴",
        description: "⚔️⚡ 攻击+100%，速度+50%",
        zombieAttackPercent: 100,
        zombieSpeedPercent: 50,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 200, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 867, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 1400, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced"] },
            { waveNumber: 4, isFirst: false, isLast: false, threatValue: 2000, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced"] },
            { waveNumber: 5, isFirst: false, isLast: true, threatValue: 5300, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced"] }
        ]
    },
    // 第10关
    {
        id: 110,
        name: "肉鸽模式 - 第10关 · 均衡试炼",
        description: "⚔️🛡️⚡ 全属性+50%",
        zombieHealthPercent: 100,
        zombieAttackPercent: 100,
        zombieSpeedPercent: 100,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 230, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 1000, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 1600, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced"] },
            { waveNumber: 4, isFirst: false, isLast: false, threatValue: 2267, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced"] },
            { waveNumber: 5, isFirst: false, isLast: false, threatValue: 3000, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced"] },
            { waveNumber: 6, isFirst: false, isLast: true, threatValue: 10000, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced"] }
        ]
    },
    // 第11关
    {
        id: 111,
        name: "肉鸽模式 - 第11关 · 钢铁之躯",
        description: "🛡️🛡️ 生命+100%，其他无加成",
        zombieHealthPercent: 100,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 270, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 1133, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 1800, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 4, isFirst: false, isLast: false, threatValue: 2533, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 5, isFirst: false, isLast: false, threatValue: 3333, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 6, isFirst: false, isLast: true, threatValue: 12000, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] }
        ]
    },
    // 第12关
    {
        id: 112,
        name: "肉鸽模式 - 第12关 · 闪电战",
        description: "⚡⚡ 速度+200%，其他无加成",
        zombieSpeedPercent: 200,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 300, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 1267, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 2000, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 4, isFirst: false, isLast: false, threatValue: 2800, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 5, isFirst: false, isLast: true, threatValue: 15000, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] }
        ]
    },
    // 第13关
    {
        id: 113,
        name: "肉鸽模式 - 第13关 · 致命一击",
        description: "⚔️⚔️ 攻击+500%，其他无加成",
        zombieAttackPercent: 500,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 330, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 1333, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 2067, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 4, isFirst: false, isLast: false, threatValue: 2867, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 5, isFirst: false, isLast: false, threatValue: 3733, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 6, isFirst: false, isLast: false, threatValue: 4667, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 7, isFirst: false, isLast: true, threatValue: 20000, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] }
        ]
    },
    // 第14关
    {
        id: 114,
        name: "肉鸽模式 - 第14关 · 不破之盾",
        description: "🛡️⚡ 生命+300%，速度+100%",
        zombieHealthPercent: 300,
        zombieSpeedPercent: 100,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 370, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 1467, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 2267, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 4, isFirst: false, isLast: false, threatValue: 3133, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 5, isFirst: false, isLast: false, threatValue: 4067, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 6, isFirst: false, isLast: false, threatValue: 5067, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 7, isFirst: false, isLast: true, threatValue: 25000, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] }
        ]
    },
    // 第15关
    {
        id: 115,
        name: "肉鸽模式 - 第15关 · 地狱",
        description: "⚔️🛡️⚡ 全属性+300%",
        zombieHealthPercent: 300,
        zombieAttackPercent: 300,
        zombieSpeedPercent: 100,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 400, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 1600, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 2467, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 4, isFirst: false, isLast: false, threatValue: 3400, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 5, isFirst: false, isLast: false, threatValue: 4400, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 6, isFirst: false, isLast: false, threatValue: 5467, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 7, isFirst: false, isLast: true, threatValue: 25000, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] }
        ]
    },
    // 第16关
    {
        id: 116,
        name: "肉鸽模式 - 第16关 · 死镰",
        description: "⚔️⚡ 攻击+400%，速度+120%",
        zombieAttackPercent: 400,
        zombieSpeedPercent: 120,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 430, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 1733, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 2667, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 4, isFirst: false, isLast: false, threatValue: 3667, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 5, isFirst: false, isLast: false, threatValue: 4733, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 6, isFirst: false, isLast: true, threatValue: 25000, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] }
        ]
    },
    // 第17关
    {
        id: 117,
        name: "肉鸽模式 - 第17关 · 不朽堡垒",
        description: "🛡️⚔️ 生命+500%，攻击+200%",
        zombieHealthPercent: 500,
        zombieAttackPercent: 200,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 470, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 1867, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 2867, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 4, isFirst: false, isLast: false, threatValue: 3933, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 5, isFirst: false, isLast: false, threatValue: 5067, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 6, isFirst: false, isLast: true, threatValue: 25000, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] }
        ]
    },
    // 第18关
    {
        id: 118,
        name: "肉鸽模式 - 第18关 · 试炼",
        description: "⚡⚡⚡ 速度+100%，生命+500%，攻击+200%，无其他加成",
        zombieSpeedPercent: 100,
        zombieHealthPercent: 500,
        zombieAttackPercent: 200,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 500, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 3667, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 3, isFirst: false, isLast: true, threatValue: 25000, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] }
        ]
    },
    // 第19关
    {
        id: 119,
        name: "肉鸽模式 - 第19关 · 另一个世界",
        description: "⚔️⚔️⚔️ 生命+500% 攻击+1000%，其他无加成",
        zombieHealthPercent: 500,
        zombieAttackPercent: 1000,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 530, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 3333, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 6000, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 4, isFirst: false, isLast: true, threatValue: 30000, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] }
        ]
    },
    // 第20关（最终关）
    {
        id: 120,
        name: "肉鸽模式 - 终焉 · 南柯一梦",
        description: "⚔️🛡️⚡ 全属性+3000%，生存还是毁灭",
        zombieHealthPercent: 3000,
        zombieAttackPercent: 3000,
        zombieSpeedPercent: 200,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 570, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 2267, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 3467, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 4, isFirst: false, isLast: false, threatValue: 4733, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 5, isFirst: false, isLast: false, threatValue: 6067, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 6, isFirst: false, isLast: false, threatValue: 7467, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 7, isFirst: false, isLast: false, threatValue: 20000, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 8, isFirst: false, isLast: true, threatValue: 50000, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] }
        ]
    }
];

/**
 * 根据威胁值生成僵尸组合（完全随机刷新机制）
 * @param {Object} wave - 波次配置对象
 * @param {number} levelNumber - 当前关卡数（例如：101表示第1关）
 * @param {number} levelTime - 当前关卡已进行的时间（秒）
 * @returns {Array<{type: string, count: number}>} 僵尸类型及数量列表
 */
function generateZombiesFromThreat(wave, levelNumber = 101, levelTime = 0) {
    const zombies = [];
    
    console.log('========== 难度调节应用 - 波次生成 ==========');
    console.log(`波次 ${wave.waveNumber}, 原始威胁值: ${wave.threatValue.toFixed(2)}`);
    
    // 创建波次副本以避免修改原始配置
    const adjustedWave = Object.assign({}, wave);
    adjustedWave.threatValue = wave.threatValue;
    
    // 应用难度调节到威胁值
    if (window.difficultyAdjustmentSystem) {
        window.difficultyAdjustmentSystem.applyToWave(adjustedWave);
    }
    
    let targetFinalThreat = adjustedWave.threatValue;

    // 确定生成间隔：每次都重新计算，不使用wave对象中保存的值
    // 这样可以避免间隔累积递减
    let spawnInterval, waveInterval;
    // 强制使用动态间隔计算机制，确保每次都基于基础值重新计算
    const dynamicIntervals = calculateDynamicIntervals(wave.isFastWave, levelNumber, levelTime);
    spawnInterval = dynamicIntervals.spawnInterval;
    waveInterval = dynamicIntervals.waveInterval;

    // 应用噩梦因子（如果存在）
    if (typeof nightmareGlobalData !== 'undefined') {
        targetFinalThreat = nightmareGlobalData.calculateThreatValue(targetFinalThreat);
        spawnInterval = nightmareGlobalData.calculateSpawnInterval(spawnInterval);
        waveInterval = nightmareGlobalData.calculateWaveInterval(waveInterval);
    }

    // 将计算后的间隔值赋给wave对象供后续使用
    // 但每次函数开始时会重新计算，不会累积递减
    wave.spawnInterval = spawnInterval;
    wave.waveInterval = waveInterval;

    // 计算目标僵尸威胁值总和（公式：最终威胁值 = (威胁总和 * 1000) / 生成间隔）
    const targetZombieThreatSum = (targetFinalThreat * spawnInterval) / 1000;
    const maxThreatSum = targetZombieThreatSum * 1.1;
    const minThreatSum = targetZombieThreatSum * 0.9;

    // 构建可用僵尸池（过滤排除类型 + 威胁值过高的类型 + 威胁值范围限制）
    let availableZombies = [...zombiePool];
    if (wave.excludedZombieTypes && Array.isArray(wave.excludedZombieTypes)) {
        availableZombies = availableZombies.filter(type => !wave.excludedZombieTypes.includes(type));
    }

    console.log('========== 僵尸威胁值检查 ==========');
    console.log(`当前波次最终威胁值: ${targetFinalThreat.toFixed(2)}`);

    const filteredZombies = availableZombies.filter(type => {
        const threat = zombieThreatValues[type];
        const ok = threat <= targetZombieThreatSum * 2;
        if (!ok) {
            console.log(`  [${type}] 僵尸威胁值 ${threat} 过高（超过目标的2倍），排除`);
        }
        return ok;
    });

    // 新增：威胁值范围检查
    console.log('========== 僵尸威胁值范围检查 ==========');
    const rangeFilteredZombies = filteredZombies.filter(type => {
        const range = zombieThreatRange[type];
        if (!range) {
            return true; // 没有范围配置则不限制
        }
        
        let inRange = true;
        let reason = '';
        
        // 检查最小值
        if (range.min !== undefined && range.min !== null && targetFinalThreat < range.min) {
            inRange = false;
            reason = `当前威胁值 ${targetFinalThreat.toFixed(2)} < 最小值 ${range.min}`;
        }
        // 检查最大值
        if (range.max !== undefined && range.max !== null && targetFinalThreat > range.max) {
            inRange = false;
            reason = `当前威胁值 ${targetFinalThreat.toFixed(2)} > 最大值 ${range.max}`;
        }
        
        if (!inRange) {
            console.log(`  [${type}] 威胁值范围不符合要求（${reason}），排除`);
        }
        
        return inRange;
    });

    let finalZombiePool = rangeFilteredZombies.length > 0 ? rangeFilteredZombies : filteredZombies;
    // 极端情况：如果仍然为空，则使用威胁值最小的僵尸
    if (finalZombiePool.length === 0) {
        finalZombiePool = [availableZombies.reduce((a, b) => 
            zombieThreatValues[a] < zombieThreatValues[b] ? a : b
        )];
    }

    // ---------- 核心修改：权重随机刷新僵尸，限制最多4种 ----------
    const MAX_ZOMBIE_TYPES = 4;  // 每波最多使用4种僵尸
    
    console.log('========== 僵尸种类限制检查 ==========');
    console.log(`每波最多使用 ${MAX_ZOMBIE_TYPES} 种僵尸`);
    
    const zombieCounts = {};
    let currentThreatSum = 0;
    const maxAttempts = 2000;
    let attempts = 0;

    // 权重随机选择函数
    function weightedRandomZombie(zombiePool) {
        // 如果没有配置权重，则使用原有随机逻辑
        if (!zombieWeights) {
            const randomIndex = Math.floor(Math.random() * zombiePool.length);
            return zombiePool[randomIndex];
        }

        // 计算总权重
        let totalWeight = 0;
        for (const zombieType of zombiePool) {
            totalWeight += zombieWeights[zombieType] || 1; // 默认权重为1
        }

        // 随机选择一个权重位置
        let randomWeight = Math.random() * totalWeight;

        // 找到对应的僵尸类型
        for (const zombieType of zombiePool) {
            const weight = zombieWeights[zombieType] || 1;
            if (randomWeight < weight) {
                return zombieType;
            }
            randomWeight -= weight;
        }

        // 回退到原有随机逻辑
        const randomIndex = Math.floor(Math.random() * zombiePool.length);
        return zombiePool[randomIndex];
    }

    // 第一阶段：随机添加僵尸，直到威胁值总和进入 [minThreatSum, maxThreatSum] 区间
    while (currentThreatSum < minThreatSum && attempts < maxAttempts) {
        attempts++;
        
        // 确定当前可用的僵尸池
        let currentPool = finalZombiePool;
        const usedTypes = Object.keys(zombieCounts);
        
        // 如果已经使用了4种僵尸，则只能从这4种中选择
        if (usedTypes.length >= MAX_ZOMBIE_TYPES) {
            currentPool = usedTypes;
        }
        
        const zombieType = weightedRandomZombie(currentPool);
        const threat = zombieThreatValues[zombieType];

        // 如果添加该僵尸会超过最大允许威胁值，则尝试其他类型（避免溢出）
        if (currentThreatSum + threat > maxThreatSum) {
            continue;
        }

        // 记录新添加的僵尸种类
        const isNewType = !zombieCounts[zombieType];
        if (isNewType) {
            const currentUsedTypes = Object.keys(zombieCounts).length + 1;
            console.log(`  添加新僵尸种类 [${zombieType}]，当前已使用 ${currentUsedTypes}/${MAX_ZOMBIE_TYPES} 种`);
        }
        
        zombieCounts[zombieType] = (zombieCounts[zombieType] || 0) + 1;
        currentThreatSum += threat;
    }

    // 第二阶段：若因尝试次数限制或无法添加导致未达到下限，则强制用威胁值最小的僵尸补足
    if (currentThreatSum < minThreatSum) {
        const usedTypes = Object.keys(zombieCounts);
        let minThreatType;
        
        // 如果已经使用了僵尸，则从已使用的类型中选择威胁值最小的
        if (usedTypes.length > 0) {
            minThreatType = usedTypes.reduce((a, b) => 
                zombieThreatValues[a] < zombieThreatValues[b] ? a : b
            );
        } else {
            // 如果还没有使用任何僵尸，则从最终池中选择威胁值最小的
            minThreatType = finalZombiePool.reduce((a, b) => 
                zombieThreatValues[a] < zombieThreatValues[b] ? a : b
            );
        }
        
        const minThreat = zombieThreatValues[minThreatType];

        while (currentThreatSum < minThreatSum && currentThreatSum + minThreat <= maxThreatSum) {
            zombieCounts[minThreatType] = (zombieCounts[minThreatType] || 0) + 1;
            currentThreatSum += minThreat;
        }
    }

    // 转换为数组格式
    for (const type in zombieCounts) {
        if (zombieCounts[type] > 0) {
            zombies.push({ type, count: zombieCounts[type] });
        }
    }

    // 计算实际最终威胁值并输出日志
    const actualFinalThreat = (currentThreatSum * 1000) / spawnInterval;
    // 设置波次的威胁值属性，供日志显示
    wave.calculatedThreat = wave.threatValue;
    wave.finalThreat = actualFinalThreat;
    console.log(
        `波次 ${wave.waveNumber}: 目标最终威胁值=${targetFinalThreat.toFixed(2)}, ` +
        `实际最终威胁值=${actualFinalThreat.toFixed(2)}, ` +
        `僵尸威胁值总和=${currentThreatSum.toFixed(2)}, ` +
        `生成间隔=${spawnInterval}ms, 波次间隔=${waveInterval}ms, ` +
        `关卡=${levelNumber}, 时间=${levelTime}s`
    );
    console.log(`生成的僵尸（完全随机）: ${JSON.stringify(zombies)}`);

    return zombies;
}

// 导出全局变量
window.rogueLevels = rogueLevels;
window.generateZombiesFromThreat = generateZombiesFromThreat;
window.calculateDynamicIntervals = calculateDynamicIntervals;
window.intervalConfig = intervalConfig;