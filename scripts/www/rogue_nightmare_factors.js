// 噩梦因子系统配置

// 噩梦因子类型枚举
const nightmareFactorTypes = {
    THREAT_VALUE_ADD: "threat_value_add",           // 威胁值增加
    THREAT_VALUE_PERCENT: "threat_value_percent",   // 威胁值百分比增加
    SPAWN_INTERVAL_ADD: "spawn_interval_add",       // 生成间隔增加
    SPAWN_INTERVAL_PERCENT: "spawn_interval_percent", // 生成间隔百分比增加
    WAVE_INTERVAL_ADD: "wave_interval_add",         // 波次间隔增加
    WAVE_INTERVAL_PERCENT: "wave_interval_percent", // 波次间隔百分比增加
    DREAM_POINTS_ADD: "dream_points_add",           // 梦境点数增加
    ZOMBIE_HEALTH_PERCENT: "zombie_health_percent", // 僵尸生命值百分比变化
    ZOMBIE_ATTACK_PERCENT: "zombie_attack_percent", // 僵尸攻击力百分比变化
    ZOMBIE_SPEED_PERCENT: "zombie_speed_percent"   // 僵尸速度百分比变化
};

// 噩梦因子稀有度权重配置
const nightmareRarityWeights = {
    // 基础权重
    base: {
        common: 60,
        rare: 40,
        epic: 20,
        legendary: 10
    },
    // 关卡调整系数（随着关卡推进，高稀有度权重增加）
    levelAdjustment: {
        common: -3,    // 每关普通权重减少2点
        rare: -2,     // 每关稀有权重增加0.5点
        epic: 1,       // 每关史诗权重增加1点
        legendary: 2 // 每关传说权重增加0.5点
    },
    // 最小权重（防止权重降为负数）
    minWeights: {
        common: 1,
        rare: 1,
        epic: 1,
        legendary: 1
    },
    // 最大权重
    maxWeights: {
        common: 600,
        rare: 450,
        epic: 400,
        legendary: 200
    }
};

// 噩梦因子
const nightmareFactors = [
    // ========== 普通 (Common) ==========
    { id: 1, name: "急迫感", description: "下一关所有波次的僵尸生成间隔缩短150ms", cost: 30, effects: [{ type: nightmareFactorTypes.SPAWN_INTERVAL_ADD, value: -150, description: "生成间隔-150ms" }], icon: "⏩", rarity: "common" },
    { id: 2, name: "坚韧皮肤", description: "下一关所有僵尸的生命值增加30%", cost: 25, effects: [{ type: nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT, value: 30, description: "僵尸生命值+30%" }], icon: "🛡️", rarity: "common" },
    { id: 3, name: "利爪", description: "下一关所有僵尸的攻击力增加40%", cost: 30, effects: [{ type: nightmareFactorTypes.ZOMBIE_ATTACK_PERCENT, value: 40, description: "僵尸攻击力+40%" }], icon: "🐾", rarity: "common" },
    { id: 4, name: "疾步", description: "下一关所有僵尸的移动速度增加35%", cost: 25, effects: [{ type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: 35, description: "僵尸速度+35%" }], icon: "👟", rarity: "common" },
    { id: 5, name: "噩梦加深", description: "下一关所有波次的威胁值增加100点", cost: 35, effects: [{ type: nightmareFactorTypes.THREAT_VALUE_ADD, value: 100, description: "威胁值+100" }], icon: "😈", rarity: "common" },
    { id: 6, name: "灾厄成疾", description: "下一关所有波次的僵尸生成间隔缩短250ms", cost: 45, effects: [{ type: nightmareFactorTypes.SPAWN_INTERVAL_ADD, value: -250, description: "生成间隔-250ms" }], icon: "⚡", rarity: "common" },
    { id: 7, name: "坚韧", description: "下一关所有僵尸的生命值增加50%", cost: 35, effects: [{ type: nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT, value: 50, description: "僵尸生命值+50%" }], icon: "💪", rarity: "common" },
    { id: 8, name: "凶暴", description: "下一关所有僵尸的攻击力增加80%", cost: 40, effects: [{ type: nightmareFactorTypes.ZOMBIE_ATTACK_PERCENT, value: 80, description: "僵尸攻击力+80%" }], icon: "⚔️", rarity: "common" },
    { id: 9, name: "疾风", description: "下一关所有僵尸的移动速度增加60%", cost: 35, effects: [{ type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: 60, description: "僵尸速度+60%" }], icon: "🏃", rarity: "common" },
    // 新增普通混合因子（负面偏强）
    { id: 33, name: "轻装上阵", description: "僵尸速度+80%，但生成间隔+25%", cost: 40, effects: [{ type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: 80, description: "僵尸速度+80%" }, { type: nightmareFactorTypes.SPAWN_INTERVAL_PERCENT, value: 25, description: "生成间隔+25%" }], icon: "🎒", rarity: "common" },
    { id: 34, name: "虚弱诅咒", description: "僵尸攻击力+70%，但生命值-15%", cost: 40, effects: [{ type: nightmareFactorTypes.ZOMBIE_ATTACK_PERCENT, value: 70, description: "僵尸攻击力+70%" }, { type: nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT, value: -15, description: "僵尸生命值-15%" }], icon: "🔮", rarity: "common" },
    { id: 35, name: "急促呼吸", description: "生成间隔-30%，但僵尸速度-15%", cost: 45, effects: [{ type: nightmareFactorTypes.SPAWN_INTERVAL_PERCENT, value: -30, description: "生成间隔-30%" }, { type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: -15, description: "僵尸速度-15%" }], icon: "🌬️", rarity: "common" },
    { id: 36, name: "嗜血", description: "僵尸攻击力+60%、速度+25%，但波次间隔+10%", cost: 50, effects: [{ type: nightmareFactorTypes.ZOMBIE_ATTACK_PERCENT, value: 60, description: "僵尸攻击力+60%" }, { type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: 25, description: "僵尸速度+25%" }, { type: nightmareFactorTypes.WAVE_INTERVAL_PERCENT, value: 10, description: "波次间隔+10%" }], icon: "🩸", rarity: "common" },
    { id: 37, name: "狂暴冲动", description: "僵尸攻击力+65%、速度+35%，但生命值-20%", cost: 45, effects: [{ type: nightmareFactorTypes.ZOMBIE_ATTACK_PERCENT, value: 65, description: "僵尸攻击力+65%" }, { type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: 35, description: "僵尸速度+35%" }, { type: nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT, value: -20, description: "僵尸生命值-20%" }], icon: "🤬", rarity: "common" },
    // === 新增普通因子 ===
    { id: 42, name: "重击", description: "下一关所有僵尸的攻击力增加90%", cost: 45, effects: [{ type: nightmareFactorTypes.ZOMBIE_ATTACK_PERCENT, value: 90, description: "僵尸攻击力+90%" }], icon: "🔨", rarity: "common" },
    { id: 43, name: "厚皮", description: "下一关所有僵尸的生命值增加70%", cost: 40, effects: [{ type: nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT, value: 70, description: "僵尸生命值+70%" }], icon: "🐗", rarity: "common" },
    { id: 44, name: "疾驰", description: "下一关所有僵尸的移动速度增加80%", cost: 40, effects: [{ type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: 80, description: "僵尸速度+80%" }], icon: "🏇", rarity: "common" },
    { id: 45, name: "血性狂暴", description: "僵尸攻击力+50%、速度+40%，但生命值-15%", cost: 45, effects: [{ type: nightmareFactorTypes.ZOMBIE_ATTACK_PERCENT, value: 50, description: "僵尸攻击力+50%" }, { type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: 40, description: "僵尸速度+40%" }, { type: nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT, value: -15, description: "僵尸生命值-15%" }], icon: "🤯", rarity: "common" },
    { id: 46, name: "脆弱骨架", description: "僵尸速度+100%，但生命值-25%", cost: 50, effects: [{ type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: 100, description: "僵尸速度+100%" }, { type: nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT, value: -25, description: "僵尸生命值-25%" }], icon: "🦴", rarity: "common" },
    { id: 47, name: "缓慢剧毒", description: "僵尸攻击力+80%，但速度-20%", cost: 40, effects: [{ type: nightmareFactorTypes.ZOMBIE_ATTACK_PERCENT, value: 80, description: "僵尸攻击力+80%" }, { type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: -20, description: "僵尸速度-20%" }], icon: "🐍", rarity: "common" },
    { id: 48, name: "混乱意志", description: "生成间隔-20%、波次间隔-15%，但威胁值+30%", cost: 50, effects: [{ type: nightmareFactorTypes.SPAWN_INTERVAL_PERCENT, value: -20, description: "生成间隔-20%" }, { type: nightmareFactorTypes.WAVE_INTERVAL_PERCENT, value: -15, description: "波次间隔-15%" }, { type: nightmareFactorTypes.THREAT_VALUE_PERCENT, value: 30, description: "威胁值+30%" }], icon: "🌀", rarity: "common" },

    // ========== 稀有 (Rare) ==========
    { id: 10, name: "恐惧蔓延", description: "下一关所有波次的威胁值增加80%", cost: 60, effects: [{ type: nightmareFactorTypes.THREAT_VALUE_PERCENT, value: 80, description: "威胁值+80%" }], icon: "🌪️", rarity: "rare" },
    { id: 11, name: "时间扭曲", description: "下一关所有波次的僵尸生成间隔缩短35%", cost: 65, effects: [{ type: nightmareFactorTypes.SPAWN_INTERVAL_PERCENT, value: -35, description: "生成间隔-35%" }], icon: "⏳", rarity: "rare" },
    { id: 12, name: "死神之镰", description: "下一关所有僵尸的攻击力增加150%", cost: 70, effects: [{ type: nightmareFactorTypes.ZOMBIE_ATTACK_PERCENT, value: 150, description: "僵尸攻击力+150%" }], icon: "☠️", rarity: "rare" },
    { id: 13, name: "钢铁之躯", description: "下一关所有僵尸的生命值增加120%", cost: 80, effects: [{ type: nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT, value: 120, description: "僵尸生命值+120%" }], icon: "🛡️", rarity: "rare" },
    { id: 14, name: "幻影步", description: "下一关所有僵尸的移动速度增加180%", cost: 85, effects: [{ type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: 180, description: "僵尸速度+180%" }], icon: "👻", rarity: "rare" },
    // 新增稀有混合因子（负面偏强）
    { id: 38, name: "死亡舞步", description: "僵尸速度+120%，但攻击力-30%", cost: 70, effects: [{ type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: 120, description: "僵尸速度+120%" }, { type: nightmareFactorTypes.ZOMBIE_ATTACK_PERCENT, value: -30, description: "僵尸攻击力-30%" }], icon: "💃", rarity: "rare" },
    { id: 39, name: "铁砧之躯", description: "僵尸生命值+150%，但速度-40%", cost: 75, effects: [{ type: nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT, value: 150, description: "僵尸生命值+150%" }, { type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: -40, description: "僵尸速度-40%" }], icon: "⚓", rarity: "rare" },
    { id: 40, name: "混乱节奏", description: "生成间隔-40%、波次间隔-25%，但威胁值-30%", cost: 80, effects: [{ type: nightmareFactorTypes.SPAWN_INTERVAL_PERCENT, value: -40, description: "生成间隔-40%" }, { type: nightmareFactorTypes.WAVE_INTERVAL_PERCENT, value: -25, description: "波次间隔-25%" }, { type: nightmareFactorTypes.THREAT_VALUE_PERCENT, value: -30, description: "威胁值-30%" }], icon: "🎵", rarity: "rare" },
    { id: 41, name: "血祭", description: "僵尸攻击力+100%、速度+50%，但生命值-25%", cost: 80, effects: [{ type: nightmareFactorTypes.ZOMBIE_ATTACK_PERCENT, value: 100, description: "僵尸攻击力+100%" }, { type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: 50, description: "僵尸速度+50%" }, { type: nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT, value: -25, description: "僵尸生命值-25%" }], icon: "🩸", rarity: "rare" },
    // === 新增稀有因子 ===
    { id: 49, name: "毁灭之刃", description: "下一关所有僵尸的攻击力增加180%", cost: 85, effects: [{ type: nightmareFactorTypes.ZOMBIE_ATTACK_PERCENT, value: 180, description: "僵尸攻击力+180%" }], icon: "🗡️", rarity: "rare" },
    { id: 50, name: "巨人之躯", description: "下一关所有僵尸的生命值增加160%", cost: 85, effects: [{ type: nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT, value: 160, description: "僵尸生命值+160%" }], icon: "🗿", rarity: "rare" },
    { id: 51, name: "闪电反射", description: "下一关所有僵尸的移动速度增加220%", cost: 90, effects: [{ type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: 220, description: "僵尸速度+220%" }], icon: "⚡", rarity: "rare" },
    { id: 52, name: "诅咒狂热", description: "僵尸攻击力+120%、速度+60%，但生命值-30%", cost: 100, effects: [{ type: nightmareFactorTypes.ZOMBIE_ATTACK_PERCENT, value: 120, description: "僵尸攻击力+120%" }, { type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: 60, description: "僵尸速度+60%" }, { type: nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT, value: -30, description: "僵尸生命值-30%" }], icon: "😈", rarity: "rare" },
    { id: 53, name: "钢铁意志", description: "僵尸生命值+130%，但速度-35%", cost: 80, effects: [{ type: nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT, value: 130, description: "僵尸生命值+130%" }, { type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: -35, description: "僵尸速度-35%" }], icon: "⛓️", rarity: "rare" },
    { id: 54, name: "时空紊乱", description: "生成间隔-45%、波次间隔-30%，但威胁值-40%", cost: 95, effects: [{ type: nightmareFactorTypes.SPAWN_INTERVAL_PERCENT, value: -45, description: "生成间隔-45%" }, { type: nightmareFactorTypes.WAVE_INTERVAL_PERCENT, value: -30, description: "波次间隔-30%" }, { type: nightmareFactorTypes.THREAT_VALUE_PERCENT, value: -40, description: "威胁值-40%" }], icon: "⌛", rarity: "rare" },

    // ========== 史诗 (Epic) ==========
    { id: 15, name: "波次加速", description: "下一关所有波次的波次间隔缩短8秒", cost: 60, effects: [{ type: nightmareFactorTypes.WAVE_INTERVAL_ADD, value: -8000, description: "波次间隔-8000ms" }], icon: "🚀", rarity: "epic" },
    { id: 16, name: "厄运钟摆", description: "僵尸速度+120%，生命值-25%", cost: 80, effects: [{ type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: 120, description: "僵尸速度+120%" }, { type: nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT, value: -25, description: "僵尸生命值-25%" }], icon: "⏲️", rarity: "epic" },
    { id: 17, name: "代价契约", description: "僵尸攻击力+130%，但僵尸生命值-30%", cost: 85, effects: [{ type: nightmareFactorTypes.ZOMBIE_ATTACK_PERCENT, value: 130, description: "僵尸攻击力+130%" }, { type: nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT, value: -30, description: "僵尸生命值-30%" }], icon: "📜", rarity: "epic" },
    { id: 18, name: "腐化祝福", description: "僵尸生命值+110%，但移动速度-25%", cost: 85, effects: [{ type: nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT, value: 110, description: "僵尸生命值+110%" }, { type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: -25, description: "僵尸速度-25%" }], icon: "🕯️", rarity: "epic" },
    { id: 19, name: "不稳定突变", description: "僵尸攻击力+100%、速度+50%，但生命值-35%", cost: 100, effects: [{ type: nightmareFactorTypes.ZOMBIE_ATTACK_PERCENT, value: 100, description: "僵尸攻击力+100%" }, { type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: 50, description: "僵尸速度+50%" }, { type: nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT, value: -35, description: "僵尸生命值-35%" }], icon: "🧬", rarity: "epic" },
    { id: 20, name: "急行军", description: "僵尸速度+100%，生成间隔缩短400ms", cost: 140, effects: [{ type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: 100, description: "僵尸速度+100%" }, { type: nightmareFactorTypes.SPAWN_INTERVAL_ADD, value: -400, description: "生成间隔-400ms" }], icon: "🏁", rarity: "epic" },
    { id: 21, name: "地狱三头犬", description: "僵尸生命值+60%、攻击力+80%、速度+80%", cost: 110, effects: [{ type: nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT, value: 60, description: "僵尸生命值+60%" }, { type: nightmareFactorTypes.ZOMBIE_ATTACK_PERCENT, value: 80, description: "僵尸攻击力+80%" }, { type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: 80, description: "僵尸速度+80%" }], icon: "🐺", rarity: "epic" },
    { id: 22, name: "易爆体质", description: "僵尸速度+150%，生命值-35%", cost: 100, effects: [{ type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: 150, description: "僵尸速度+150%" }, { type: nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT, value: -35, description: "僵尸生命值-35%" }], icon: "💥", rarity: "epic" },

    // ========== 传说 (Legendary) ==========
    { id: 25, name: "不死诅咒", description: "僵尸生命值+250%，攻击力-40%", cost: 150, effects: [{ type: nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT, value: 250, description: "僵尸生命值+250%" }, { type: nightmareFactorTypes.ZOMBIE_ATTACK_PERCENT, value: -40, description: "僵尸攻击力-40%" }], icon: "💀", rarity: "legendary" },
    { id: 26, name: "狂妄挑战", description: "僵尸攻击力+200%、速度+80%，但生命值-50%", cost: 160, effects: [{ type: nightmareFactorTypes.ZOMBIE_ATTACK_PERCENT, value: 200, description: "僵尸攻击力+200%" }, { type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: 80, description: "僵尸速度+80%" }, { type: nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT, value: -50, description: "僵尸生命值-50%" }], icon: "🎭", rarity: "legendary" },
    { id: 27, name: "暗影步", description: "僵尸速度+200%，生命值-50%", cost: 100, effects: [{ type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: 300, description: "僵尸速度+300%" }, { type: nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT, value: -50, description: "僵尸生命值-50%" }], icon: "🌑", rarity: "legendary" },
    { id: 28, name: "虚空之力", description: "僵尸攻击力+350%，速度-40%", cost: 220, effects: [{ type: nightmareFactorTypes.ZOMBIE_ATTACK_PERCENT, value: 350, description: "僵尸攻击力+350%" }, { type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: -40, description: "僵尸速度-40%" }], icon: "🌌", rarity: "legendary" },
    { id: 29, name: "不死军团", description: "僵尸生命值+800%、攻击力-60%、速度-60%", cost: 240, effects: [{ type: nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT, value: 800, description: "僵尸生命值+800%" }, { type: nightmareFactorTypes.ZOMBIE_ATTACK_PERCENT, value: -60, description: "僵尸攻击力-60%" }, { type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: -60, description: "僵尸速度-60%" }], icon: "👑", rarity: "legendary" },
    { id: 30, name: "血肉长城", description: "僵尸生命值+500%", cost: 200, effects: [{ type: nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT, value: 500, description: "僵尸生命值+500%" }], icon: "🧟", rarity: "legendary" },
    { id: 31, name: "时停行者", description: "僵尸移动速度+300%", cost: 150, effects: [{ type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: 300, description: "僵尸速度+300%" }], icon: "⏱️", rarity: "legendary" },
    { id: 32, name: "末日审判", description: "僵尸生命值+200%、攻击力+200%、速度+200%", cost: 300, effects: [{ type: nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT, value: 200, description: "僵尸生命值+200%" }, { type: nightmareFactorTypes.ZOMBIE_ATTACK_PERCENT, value: 200, description: "僵尸攻击力+200%" }, { type: nightmareFactorTypes.ZOMBIE_SPEED_PERCENT, value: 200, description: "僵尸速度+200%" }], icon: "💀", rarity: "legendary" }
];

const nightmareGlobalData = {
    // 威胁值变化
    threatValueAdd: 0,           // 威胁值增加数值
    threatValuePercent: 0,       // 威胁值增加百分比
    
    // 僵尸生成间隔变化
    spawnIntervalAdd: 0,         // 生成间隔增加数值
    spawnIntervalPercent: 0,     // 生成间隔增加百分比
    
    // 波次间隔变化
    waveIntervalAdd: 0,          // 波次间隔增加数值
    waveIntervalPercent: 0,      // 波次间隔增加百分比
    
    // 僵尸属性变化
    zombieHealthPercent: 0,        // 僵尸生命值百分比变化
    zombieAttackPercent: 0,        // 僵尸攻击力百分比变化
    zombieSpeedPercent: 0,         // 僵尸速度百分比变化
    
    // 当前选择的噩梦因子
    selectedFactors: [],
    
    // 重置全局数据
    reset: function() {
        this.threatValueAdd = 0;
        this.threatValuePercent = 0;
        this.spawnIntervalAdd = 0;
        this.spawnIntervalPercent = 0;
        this.waveIntervalAdd = 0;
        this.waveIntervalPercent = 0;
        this.zombieHealthPercent = 0;
        this.zombieAttackPercent = 0;
        this.zombieSpeedPercent = 0;
        this.selectedFactors = [];
    },
    
    // 应用噩梦因子效果
    applyFactor: function(factor) {
        factor.effects.forEach(effect => {
            switch(effect.type) {
                case nightmareFactorTypes.THREAT_VALUE_ADD:
                    this.threatValueAdd += effect.value;
                    break;
                case nightmareFactorTypes.THREAT_VALUE_PERCENT:
                    this.threatValuePercent += effect.value;
                    break;
                case nightmareFactorTypes.SPAWN_INTERVAL_ADD:
                    this.spawnIntervalAdd += effect.value;
                    break;
                case nightmareFactorTypes.SPAWN_INTERVAL_PERCENT:
                    this.spawnIntervalPercent += effect.value;
                    break;
                case nightmareFactorTypes.WAVE_INTERVAL_ADD:
                    this.waveIntervalAdd += effect.value;
                    break;
                case nightmareFactorTypes.WAVE_INTERVAL_PERCENT:
                    this.waveIntervalPercent += effect.value;
                    break;
                case nightmareFactorTypes.ZOMBIE_HEALTH_PERCENT:
                    this.zombieHealthPercent += effect.value;
                    break;
                case nightmareFactorTypes.ZOMBIE_ATTACK_PERCENT:
                    this.zombieAttackPercent += effect.value;
                    break;
                case nightmareFactorTypes.ZOMBIE_SPEED_PERCENT:
                    this.zombieSpeedPercent += effect.value;
                    break;
            }
        });
        
        this.selectedFactors.push(factor);
    },
    
    // 计算应用噩梦因子后的威胁值
    calculateThreatValue: function(baseThreatValue) {
        let result = baseThreatValue;
        result += this.threatValueAdd;
        result = result * (1 + this.threatValuePercent / 100);
        return Math.max(1, Math.round(result));
    },
    
    // 计算应用噩梦因子后的生成间隔
    calculateSpawnInterval: function(baseSpawnInterval) {
        let result = baseSpawnInterval;
        result += this.spawnIntervalAdd;
        result = result * (1 + this.spawnIntervalPercent / 100);
        return Math.max(100, Math.round(result));
    },
    
    // 计算应用噩梦因子后的波次间隔
    calculateWaveInterval: function(baseWaveInterval) {
        let result = baseWaveInterval;
        result += this.waveIntervalAdd;
        result = result * (1 + this.waveIntervalPercent / 100);
        return Math.max(500, Math.round(result));
    },
    
    // 计算应用噩梦因子和关卡属性后的僵尸生命值
    calculateZombieHealth: function(baseHealth, levelHealthPercent = 0) {
        let result = baseHealth;
        // 先应用关卡属性，再应用噩梦因子（两个系统叠加）
        result = result * (1 + levelHealthPercent / 100);
        result = result * (1 + this.zombieHealthPercent / 100);
        return Math.max(1, Math.round(result));
    },
    
    // 计算应用噩梦因子和关卡属性后的僵尸攻击力
    calculateZombieAttack: function(baseAttack, levelAttackPercent = 0) {
        let result = baseAttack;
        // 先应用关卡属性，再应用噩梦因子（两个系统叠加）
        result = result * (1 + levelAttackPercent / 100);
        result = result * (1 + this.zombieAttackPercent / 100);
        return Math.max(1, Math.round(result));
    },
    
    // 计算应用噩梦因子和关卡属性后的僵尸速度
    calculateZombieSpeed: function(baseSpeed, levelSpeedPercent = 0) {
        let result = baseSpeed;
        // 先应用关卡属性，再应用噩梦因子（两个系统叠加）
        result = result * (1 + levelSpeedPercent / 100);
        result = result * (1 + this.zombieSpeedPercent / 100);
        return Math.max(0.1, result);
    },
    
    // 获取当前噩梦因子效果描述
    getEffectsDescription: function() {
        const effects = [];
        
        if (this.threatValueAdd !== 0) {
            effects.push(`威胁值${this.threatValueAdd > 0 ? '+' : ''}${this.threatValueAdd}`);
        }
        if (this.threatValuePercent !== 0) {
            effects.push(`威胁值${this.threatValuePercent > 0 ? '+' : ''}${this.threatValuePercent}%`);
        }
        if (this.spawnIntervalAdd !== 0) {
            effects.push(`生成间隔${this.spawnIntervalAdd > 0 ? '+' : ''}${this.spawnIntervalAdd}ms`);
        }
        if (this.spawnIntervalPercent !== 0) {
            effects.push(`生成间隔${this.spawnIntervalPercent > 0 ? '+' : ''}${this.spawnIntervalPercent}%`);
        }
        if (this.waveIntervalAdd !== 0) {
            effects.push(`波次间隔${this.waveIntervalAdd > 0 ? '+' : ''}${this.waveIntervalAdd}ms`);
        }
        if (this.waveIntervalPercent !== 0) {
            effects.push(`波次间隔${this.waveIntervalPercent > 0 ? '+' : ''}${this.waveIntervalPercent}%`);
        }
        if (this.zombieHealthPercent !== 0) {
            effects.push(`僵尸生命值${this.zombieHealthPercent > 0 ? '+' : ''}${this.zombieHealthPercent}%`);
        }
        if (this.zombieAttackPercent !== 0) {
            effects.push(`僵尸攻击力${this.zombieAttackPercent > 0 ? '+' : ''}${this.zombieAttackPercent}%`);
        }
        if (this.zombieSpeedPercent !== 0) {
            effects.push(`僵尸速度${this.zombieSpeedPercent > 0 ? '+' : ''}${this.zombieSpeedPercent}%`);
        }
        
        return effects.length > 0 ? effects.join(', ') : "无噩梦因子效果";
    },
    
    // 获取僵尸属性增幅/削减的简洁描述（用于UI显示）
    getZombieEffectsDisplay: function(levelHealthPercent = 0, levelAttackPercent = 0, levelSpeedPercent = 0) {
        const display = [];
        
        const totalHealthPercent = this.zombieHealthPercent + levelHealthPercent;
        const totalAttackPercent = this.zombieAttackPercent + levelAttackPercent;
        const totalSpeedPercent = this.zombieSpeedPercent + levelSpeedPercent;
        
        if (totalHealthPercent !== 0 || levelHealthPercent !== 0) {
            let text = `生命: ${totalHealthPercent > 0 ? '+' : ''}${totalHealthPercent}%`;
            if (levelHealthPercent !== 0 && this.zombieHealthPercent !== 0) {
                text += ` (关卡${levelHealthPercent}%+噩梦${this.zombieHealthPercent > 0 ? '+' : ''}${this.zombieHealthPercent}%)`;
            } else if (levelHealthPercent !== 0) {
                text += ` (关卡)`;
            } else if (this.zombieHealthPercent !== 0) {
                text += ` (噩梦)`;
            }
            display.push(text);
        }
        if (totalAttackPercent !== 0 || levelAttackPercent !== 0) {
            let text = `攻击: ${totalAttackPercent > 0 ? '+' : ''}${totalAttackPercent}%`;
            if (levelAttackPercent !== 0 && this.zombieAttackPercent !== 0) {
                text += ` (关卡${levelAttackPercent}%+噩梦${this.zombieAttackPercent > 0 ? '+' : ''}${this.zombieAttackPercent}%)`;
            } else if (levelAttackPercent !== 0) {
                text += ` (关卡)`;
            } else if (this.zombieAttackPercent !== 0) {
                text += ` (噩梦)`;
            }
            display.push(text);
        }
        if (totalSpeedPercent !== 0 || levelSpeedPercent !== 0) {
            let text = `速度: ${totalSpeedPercent > 0 ? '+' : ''}${totalSpeedPercent}%`;
            if (levelSpeedPercent !== 0 && this.zombieSpeedPercent !== 0) {
                text += ` (关卡${levelSpeedPercent}%+噩梦${this.zombieSpeedPercent > 0 ? '+' : ''}${this.zombieSpeedPercent}%)`;
            } else if (levelSpeedPercent !== 0) {
                text += ` (关卡)`;
            } else if (this.zombieSpeedPercent !== 0) {
                text += ` (噩梦)`;
            }
            display.push(text);
        }
        
        return display.length > 0 ? display.join(' | ') : "";
    }
};

// 根据关卡计算当前的稀有度权重
function calculateNightmareRarityWeights(currentLevel) {
    // 肉鸽模式关卡是 101-120，转换为 1-20 的进度
    const rogueLevel = Math.max(1, currentLevel - 100);
    
    const weights = {};
    const rarities = ['common', 'rare', 'epic', 'legendary'];
    
    rarities.forEach(rarity => {
        // 基础权重 + 关卡调整 × 关卡进度
        let weight = nightmareRarityWeights.base[rarity] + 
                     nightmareRarityWeights.levelAdjustment[rarity] * (rogueLevel - 1);
        
        // 限制在最小和最大权重之间
        weight = Math.max(nightmareRarityWeights.minWeights[rarity], 
                         Math.min(nightmareRarityWeights.maxWeights[rarity], weight));
        
        weights[rarity] = weight;
    });
    
    return weights;
}

// 根据稀有度权重随机选择一个稀有度
function selectRandomRarity(weights) {
    const totalWeight = Object.values(weights).reduce((sum, w) => sum + w, 0);
    let random = Math.random() * totalWeight;
    
    for (const [rarity, weight] of Object.entries(weights)) {
        random -= weight;
        if (random <= 0) {
            return rarity;
        }
    }
    
    return 'common'; // 默认返回普通
}

// 根据稀有度获取该稀有度的所有噩梦因子
function getNightmareFactorsByRarity(rarity) {
    return nightmareFactors.filter(factor => factor.rarity === rarity);
}

// 随机选择噩梦因子（带稀有度权重机制）
function getRandomNightmareFactors(count = 3, currentLevel = 101) {
    const weights = calculateNightmareRarityWeights(currentLevel);
    const selectedFactors = [];
    const usedIds = new Set();
    
    // 计算当前权重分布用于调试
    const totalWeight = Object.values(weights).reduce((sum, w) => sum + w, 0);
    const weightPercent = {};
    for (const [rarity, weight] of Object.entries(weights)) {
        weightPercent[rarity] = Math.round((weight / totalWeight) * 100);
    }
    console.log(`第${currentLevel - 100}关噩梦因子权重分布:`, weightPercent);
    
    // 尝试选择足够的因子
    let attempts = 0;
    while (selectedFactors.length < count && attempts < count * 10) {
        attempts++;
        
        // 选择稀有度
        const selectedRarity = selectRandomRarity(weights);
        
        // 获取该稀有度的可用因子
        const availableFactors = getNightmareFactorsByRarity(selectedRarity)
            .filter(f => !usedIds.has(f.id));
        
        if (availableFactors.length > 0) {
            // 随机选择一个
            const randomIndex = Math.floor(Math.random() * availableFactors.length);
            const selectedFactor = availableFactors[randomIndex];
            
            selectedFactors.push(selectedFactor);
            usedIds.add(selectedFactor.id);
        } else {
            // 如果该稀有度没有可用因子，尝试其他稀有度
            const allAvailableFactors = nightmareFactors.filter(f => !usedIds.has(f.id));
            if (allAvailableFactors.length > 0) {
                const randomIndex = Math.floor(Math.random() * allAvailableFactors.length);
                const selectedFactor = allAvailableFactors[randomIndex];
                selectedFactors.push(selectedFactor);
                usedIds.add(selectedFactor.id);
            } else {
                break; // 没有更多因子了
            }
        }
    }
    
    // 记录选择的因子稀有度
    const rarityCount = { common: 0, rare: 0, epic: 0, legendary: 0 };
    selectedFactors.forEach(f => rarityCount[f.rarity]++);
    console.log('选择的噩梦因子稀有度:', rarityCount);
    
    return selectedFactors;
}

window.nightmareFactors = nightmareFactors;
window.nightmareGlobalData = nightmareGlobalData;
window.getRandomNightmareFactors = getRandomNightmareFactors;
window.nightmareRarityWeights = nightmareRarityWeights;
window.calculateNightmareRarityWeights = calculateNightmareRarityWeights;