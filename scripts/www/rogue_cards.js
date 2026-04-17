// 肉鸽模式卡片系统配置

// 梦境点数系统
const dreamPointsSystem = {
    basePointsPerLevel: 50, // 每关基础梦境点数
};

// 卡片稀有度系统
const cardRarity = {
    common: { name: "普通", weight: 60, color: "#808080" },
    rare: { name: "稀有", weight: 30, color: "#0070DD" },
    epic: { name: "史诗", weight: 10, color: "#A335EE" },
    legendary: { name: "传说", weight: 5, color: "#FF8000" }
};

// 卡片效果类型定义
const cardEffectTypes = {
    ATTACK_SPEED_PERCENT: "attackSpeedPercent",      // 攻击速度百分比
    ATTACK_DAMAGE_PERCENT: "attackDamagePercent",    // 攻击伤害百分比
    HEALTH_PERCENT: "healthPercent",                 // 生命值百分比
    COST_PERCENT: "costPercent",                     // 价格百分比
    RANGE_PERCENT: "rangePercent",                   // 攻击范围百分比
    X_RANGE_VALUE: "xRangeValue",                    // X轴攻击范围变化数值
    Y_RANGE_VALUE: "yRangeValue",                    // Y轴攻击范围变化数值
    HEALTH_REGEN: "healthRegen",                     // 生命回复数值
    MAX_CHASES: "maxChases",                         // 最大追击次数
    CHASE_TRIGGER_CHANCE: "chaseTriggerChance",       // 追击触发概率
    CHASE_DAMAGE_RATIO: "chaseDamageRatio",            // 追击伤害倍率
    LOCK_COUNT: "lockCount",                         // 锁定数量
    TEMPERATURE_BONUS: "temperatureBonus"            // 温度附加
};

// ==================== 卡片卡池配置 ====================

// 辅助函数：快速创建效果对象
const E = (type, value, desc) => ({ type, value, description: desc });
const cardPool = [
    // ========== 攻击速度类 ==========
    // common
    { id: 1, name: "昂贵攻速", description: "攻击速度提高100%，植物价格提高60%", rarity: cardRarity.common, cost: 10,
      effects: [E(cardEffectTypes.ATTACK_SPEED_PERCENT, 100, "攻击速度提高100%"),
                E(cardEffectTypes.COST_PERCENT, 60, "价格提高60%")], icon: "⚡" },
    { id: 4, name: "廉价攻速", description: "攻击速度提高20%，植物价格降低20%", rarity: cardRarity.common, cost: 10,
      effects: [E(cardEffectTypes.ATTACK_SPEED_PERCENT, 20, "攻击速度提高20%"),
                E(cardEffectTypes.COST_PERCENT, -20, "价格降低20%")], icon: "⚡" },

    { id: 3, name: "轻灵之爪", description: "攻击速度提高60%", rarity: cardRarity.rare, cost: 30,
      effects: [E(cardEffectTypes.ATTACK_SPEED_PERCENT, 60, "攻击速度提高60%")], icon: "🐾" },
    
    { id: 5, name: "急速射击", description: "攻击速度提高150%，攻击伤害降低60%", rarity: cardRarity.epic, cost: 50,
      effects: [E(cardEffectTypes.ATTACK_SPEED_PERCENT, 150, "攻击速度提高150%"),
                E(cardEffectTypes.ATTACK_DAMAGE_PERCENT, -60, "攻击伤害降低60%")], icon: "🏹" },
    { id: 6, name: "献祭之速", description: "生命值降低40%，攻击速度提高200%，攻击伤害降低40%", rarity: cardRarity.epic, cost: 50,
      effects: [ E(cardEffectTypes.ATTACK_SPEED_PERCENT, 200, "攻击速度提高200%"),
                E(cardEffectTypes.HEALTH_PERCENT, -40, "生命值降低40%"),
                E(cardEffectTypes.ATTACK_DAMAGE_PERCENT, -40, "攻击伤害降低40%")], icon: "🔥" },  


    { id: 8, name: "余烬", description: "生命值降低20%，攻击速度提高40%，攻击伤害提高40%", rarity: cardRarity.common, cost: 30,
      effects: [E(cardEffectTypes.HEALTH_PERCENT, -20, "生命值降低20%"),
                E(cardEffectTypes.ATTACK_SPEED_PERCENT, 40, "攻击速度提高40%"),
                E(cardEffectTypes.ATTACK_DAMAGE_PERCENT, 40, "攻击伤害提高40%")], icon: "✨" },
    { id: 14, name: "血祭", description: "生命值降低70%，攻击伤害提高100%，攻击速度提高100%", rarity: cardRarity.epic, cost: 70,
      effects: [E(cardEffectTypes.HEALTH_PERCENT, -70, "生命值降低70%"),
                E(cardEffectTypes.ATTACK_DAMAGE_PERCENT, 100, "攻击伤害提高100%"),
                E(cardEffectTypes.ATTACK_SPEED_PERCENT, 100, "攻击速度提高100%")], icon: "🩸" },

    // ========== 攻击伤害类 ==========

    { id: 100, name: "昂贵力量", description: "攻击伤害提高100%，植物价格提高60%", rarity: cardRarity.common, cost: 10,
      effects: [E(cardEffectTypes.ATTACK_DAMAGE_PERCENT, 100, "攻击伤害提高100%"),
                E(cardEffectTypes.COST_PERCENT, 60, "价格提高60%")], icon: "💪" },
    { id: 9, name: "廉价力量", description: "攻击伤害提高20%，植物价格降低20%", rarity: cardRarity.common, cost: 10,
      effects: [E(cardEffectTypes.ATTACK_DAMAGE_PERCENT, 20, "攻击伤害提高20%"),
                E(cardEffectTypes.COST_PERCENT, -20, "价格降低20%")], icon: "💪" },

    { id: 7, name: "重剑", description: "攻击伤害提高100%，攻击速度降低30%", rarity: cardRarity.rare, cost: 30,
      effects: [E(cardEffectTypes.ATTACK_DAMAGE_PERCENT, 100, "攻击伤害提高100%"),
                E(cardEffectTypes.ATTACK_SPEED_PERCENT, -30, "攻击速度降低30%")], icon: "🔨" },
                
    
    // rare
    { id: 10, name: "血刃", description: "生命值降低20%，攻击伤害提高80%，攻击速度提高20%", rarity: cardRarity.rare, cost: 40,
      effects: [E(cardEffectTypes.HEALTH_PERCENT, -20, "生命值降低20%"),
                E(cardEffectTypes.ATTACK_DAMAGE_PERCENT, 80, "攻击伤害提高80%"),
                E(cardEffectTypes.ATTACK_SPEED_PERCENT, 20, "攻击速度提高20%")], icon: "🔪" },
    { id: 11, name: "嗜血", description: "生命值降低20%，攻击伤害提高80%，每秒回复3点生命值", rarity: cardRarity.rare, cost: 40,
      effects: [E(cardEffectTypes.HEALTH_PERCENT, -20, "生命值降低20%"),
                E(cardEffectTypes.ATTACK_DAMAGE_PERCENT, 80, "攻击伤害提高80%"),
                E(cardEffectTypes.HEALTH_REGEN, 3, "每秒回复3点生命值")], icon: "🩸" },
    // epic
    { id: 12, name: "致命一击", description: "攻击伤害提高120%，最大追击次数减少2次", rarity: cardRarity.epic, cost: 50,
      effects: [E(cardEffectTypes.ATTACK_DAMAGE_PERCENT, 120, "攻击伤害提高120%"),
                E(cardEffectTypes.LOCK_COUNT, -2, "最大追击次数减少2次")], icon: "⚔️" },

    { id: 13, name: "超凡一击", description: "攻击伤害提高300%，但价格提高100%，攻击速度降低60%", rarity: cardRarity.epic, cost: 80,
      effects: [E(cardEffectTypes.ATTACK_DAMAGE_PERCENT, 300, "攻击伤害提高300%"),
                E(cardEffectTypes.COST_PERCENT, 100, "价格提高100%"),
                E(cardEffectTypes.ATTACK_SPEED_PERCENT, -60, "攻击速度降低60%")], icon: "⚔️" },


    // ========== 生命值类 ==========
    // common
    { id: 15, name: "生命强化", description: "生命值提高120%，攻击速度降低20%", rarity: cardRarity.common, cost: 20,
      effects: [E(cardEffectTypes.HEALTH_PERCENT, 120, "生命值提高120%"),
                E(cardEffectTypes.ATTACK_SPEED_PERCENT, -20, "攻击速度降低20%")], icon: "❤️" },
    { id: 16, name: "生命激发", description: "生命值提高80%", rarity: cardRarity.common, cost: 20,
      effects: [E(cardEffectTypes.HEALTH_PERCENT, 80, "生命值提高80%")], icon: "❤️" },
    { id: 17, name: "生命回复", description: "每秒回复5点生命值", rarity: cardRarity.common, cost: 20,
      effects: [E(cardEffectTypes.HEALTH_REGEN, 5, "每秒回复5点生命值")], icon: "💚" },
    // rare
    { id: 18, name: "廉价生命", description: "生命值提高30%，植物价格降低20%", rarity: cardRarity.common, cost: 10,
      effects: [E(cardEffectTypes.HEALTH_PERCENT, 30, "生命值提高30%"),
                E(cardEffectTypes.COST_PERCENT, -20, "价格降低20%")], icon: "💊" },
    { id: 19, name: "活力绽放", description: "生命值提高60%，每秒回复1点生命值", rarity: cardRarity.common, cost: 15,
      effects: [E(cardEffectTypes.HEALTH_PERCENT, 60, "生命值提高60%"),
                E(cardEffectTypes.HEALTH_REGEN, 1, "每秒回复1点生命值")], icon: "🌸" },

    // epic
    { id: 21, name: "铁壁", description: "生命值提高200%，但攻击伤害降低40%", rarity: cardRarity.epic, cost: 50,
      effects: [E(cardEffectTypes.HEALTH_PERCENT, 200, "生命值提高200%"),
                E(cardEffectTypes.ATTACK_DAMAGE_PERCENT, -40, "攻击伤害降低40%")], icon: "🛡️" },

    // ========== 传说类 ==========
    { id: 22, name: "蔡鑫源的计算", description: "攻击速度提高100%，植物价格降低50%，攻击伤害降低100%", rarity: cardRarity.legendary, cost: 50,
      effects: [E(cardEffectTypes.ATTACK_SPEED_PERCENT, 100, "攻击速度提高100%"),
                E(cardEffectTypes.COST_PERCENT, -50, "价格降低50%"),
                E(cardEffectTypes.ATTACK_DAMAGE_PERCENT, -100, "攻击伤害降低100%")], icon: "🤠" },
    { id: 23, name: "蓄力", description: "攻击伤害提高400%，攻击速度降低150%", rarity: cardRarity.legendary, cost: 30,
      effects: [E(cardEffectTypes.ATTACK_DAMAGE_PERCENT, 400, "攻击伤害提高400%"),
                E(cardEffectTypes.ATTACK_SPEED_PERCENT, -150, "攻击速度降低150%")], icon: "💪" },
    { id: 24, name: "燃心", description: "每秒损失15点生命值，攻击速度提高700%", rarity: cardRarity.legendary, cost: 60,
      effects: [E(cardEffectTypes.ATTACK_SPEED_PERCENT, 700, "攻击速度提高700%"),E(cardEffectTypes.HEALTH_REGEN, -15, "每秒损失15点生命值")], icon: "❤️‍🔥" },
    { id: 25, name: "极限强化", description: "攻击伤害提高150%，攻击速度提高50%，但价格翻倍", rarity: cardRarity.legendary, cost: 100,
      effects: [E(cardEffectTypes.ATTACK_DAMAGE_PERCENT, 150, "攻击伤害提高150%"),
                E(cardEffectTypes.ATTACK_SPEED_PERCENT, 50, "攻击速度提高50%"),
                E(cardEffectTypes.COST_PERCENT, 100, "价格提高100%")], icon: "🔥" },

    { id: 26, name: "全方位打击", description: "X轴和Y轴攻击范围各增加1格", rarity: cardRarity.legendary, cost: 150,
      effects: [E(cardEffectTypes.X_RANGE_VALUE, 1, "X轴攻击范围增加1格"),
                E(cardEffectTypes.Y_RANGE_VALUE, 1, "Y轴攻击范围增加1格")], icon: "➕" },

    { id: 27, name: "远程专精", description: "X轴攻击范围增加3格，但攻击速度降低40%", rarity: cardRarity.legendary, cost: 120,
      effects: [E(cardEffectTypes.X_RANGE_VALUE, 3, "X轴攻击范围增加3格"),
                E(cardEffectTypes.ATTACK_SPEED_PERCENT, -40, "攻击速度降低40%")], icon: "🎯" },

    { id: 28, name: "狂战士契约", description: "生命值降低20%，攻击伤害提高150%，但攻击速度提高50%，X轴攻击范围减少1格", rarity: cardRarity.legendary, cost: 70,
      effects: [E(cardEffectTypes.ATTACK_DAMAGE_PERCENT, 150, "攻击伤害提高150%"),
                E(cardEffectTypes.ATTACK_SPEED_PERCENT, 50, "攻击速度提高50%"),
                E(cardEffectTypes.HEALTH_PERCENT, -20, "生命值降低20%")], icon: "🗡️" },
    { id: 29, name: "不死诅咒", description: "生命值降低80%，每秒回复10点生命值，攻击伤害提高150%", rarity: cardRarity.legendary, cost: 50,
      effects: [E(cardEffectTypes.HEALTH_PERCENT, -80, "生命值降低80%"),
                E(cardEffectTypes.HEALTH_REGEN, 10, "每秒回复10点生命值"),
                E(cardEffectTypes.ATTACK_DAMAGE_PERCENT, 150, "攻击伤害提高150%")], icon: "🧛" },
    { id: 30, name: "玻璃大炮", description: "生命值降低999%，攻击伤害提高500%，攻击范围X轴增加2格", rarity: cardRarity.legendary, cost: 100,
      effects: [E(cardEffectTypes.ATTACK_DAMAGE_PERCENT, 500, "攻击伤害提高500%"),E(cardEffectTypes.HEALTH_PERCENT, -999, "生命值降低999%"),
                E(cardEffectTypes.X_RANGE_VALUE, 2, "X轴攻击范围增加2格")], icon: "🔫" },
    { id: 31, name: "戴晓秀的祭天", description: "生命值提高1000%，攻击伤害提高300%，攻击速度提高300%，每秒损失300点生命值，X轴攻击范围增加1格，Y轴攻击范围增加1格", rarity: cardRarity.legendary, cost: 100,
      effects: [E(cardEffectTypes.HEALTH_PERCENT, 1000, "生命值提高1000%"),
                E(cardEffectTypes.ATTACK_DAMAGE_PERCENT, 300, "攻击伤害提高300%"),
                E(cardEffectTypes.ATTACK_SPEED_PERCENT, 300, "攻击速度提高300%"),
                E(cardEffectTypes.HEALTH_REGEN, -300, "每秒损失300点生命值"),
                E(cardEffectTypes.X_RANGE_VALUE, 1, "X轴攻击范围增加1格"),
                E(cardEffectTypes.Y_RANGE_VALUE, 1, "Y轴攻击范围增加1格")], icon: "🤷🏿‍♀️" },

    // ========== 其他类（经济、追击、范围、温度、混合等） ==========
    // common
    { id: 33, name: "追击", description: "最大追击次数增加1次,追击触发概率提高20%（起始触发概率10%，伤害20%）", rarity: cardRarity.common, cost: 10,
      effects: [E(cardEffectTypes.MAX_CHASES, 1, "最大追击次数增加1次"),
                E(cardEffectTypes.CHASE_TRIGGER_CHANCE, 20, "追击触发概率提高20%")], icon: "🥜" },

    { id: 36, name: "小雨", description: "多重数量增加1，Y轴攻击范围增加1格", rarity: cardRarity.epic, cost: 80,
      effects: [E(cardEffectTypes.LOCK_COUNT, 1, "多重数量增加1"),
                E(cardEffectTypes.Y_RANGE_VALUE, 1, "Y轴攻击范围增加1格")], icon: "🌧️" }, 

    { id: 36, name: "大雨", description: "多重数量增加2，植物价格提高60%", rarity: cardRarity.epic, cost: 80,
      effects: [E(cardEffectTypes.LOCK_COUNT, 2, "多重数量增加2"),
                E(cardEffectTypes.COST_PERCENT, 60, "价格提高60%")], icon: "🌧️" },
        

    // rare
    { id: 39, name: "极寒领域", description: "冰霜附加增加15点，攻击速度降低30%", rarity: cardRarity.rare, cost: 30,
      effects: [E(cardEffectTypes.TEMPERATURE_BONUS, 15, "冰霜附加增加15点"),
                E(cardEffectTypes.ATTACK_SPEED_PERCENT, -30, "攻击速度降低30%")], icon: "🌨️" },
    // epic
    { id: 40, name: "合理调整", description: "价格降低70%，生命值降低20%", rarity: cardRarity.epic, cost: 30,
      effects: [E(cardEffectTypes.COST_PERCENT, -70, "价格降低70%"),
                E(cardEffectTypes.HEALTH_PERCENT, -20, "生命值降低20%")], icon: "💰" },
    { id: 41, name: "经济优化", description: "价格降低50%", rarity: cardRarity.epic, cost: 20,
      effects: [E(cardEffectTypes.COST_PERCENT, -50, "价格降低50%")], icon: "💰" },
    { id: 42, name: "诅咒", description: "每秒损失3点生命值，攻击力提高80%，攻击速度提高80%", rarity: cardRarity.epic, cost: 50,
      effects: [E(cardEffectTypes.HEALTH_REGEN, -3, "每秒损失3点生命值"),
                E(cardEffectTypes.ATTACK_DAMAGE_PERCENT, 80, "攻击伤害提高80%"),
                E(cardEffectTypes.ATTACK_SPEED_PERCENT, 80, "攻击速度提高80%")], icon: "💀" },
    { id: 43, name: "完美平衡", description: "攻击速度、攻击伤害、生命值提升40%", rarity: cardRarity.epic, cost: 40,
      effects: [E(cardEffectTypes.ATTACK_SPEED_PERCENT, 40, "攻击速度提高40%"),
                E(cardEffectTypes.ATTACK_DAMAGE_PERCENT, 40, "攻击伤害提高40%"),
                E(cardEffectTypes.HEALTH_PERCENT, 40, "生命值提高40%")], icon: "⭐" },

    { id: 44, name: "精准射击", description: "X轴攻击范围增加1格", rarity: cardRarity.common, cost: 20,
      effects: [E(cardEffectTypes.X_RANGE_VALUE, 1, "X轴攻击范围增加1格")], icon: "🎯" },

    { id: 45, name: "X轴延伸", description: "X轴攻击范围增加2格，但Y轴攻击范围减少1格", rarity: cardRarity.epic, cost: 100,
      effects: [E(cardEffectTypes.X_RANGE_VALUE, 2, "X轴攻击范围增加2格"),
                E(cardEffectTypes.Y_RANGE_VALUE, -1, "Y轴攻击范围减少1格")], icon: "➡️" },
    { id: 46, name: "Y轴扩展", description: "Y轴攻击范围增加1格，但X轴攻击范围减少1格，攻击速度提高40%", rarity: cardRarity.epic, cost: 100,
      effects: [E(cardEffectTypes.Y_RANGE_VALUE, 1, "Y轴攻击范围增加1格"),
                E(cardEffectTypes.X_RANGE_VALUE, -1, "X轴攻击范围减少1格"),
                E(cardEffectTypes.ATTACK_SPEED_PERCENT, 40, "攻击速度提高40%")], icon: "⬇️" },

    { id: 47, name: "熔岩", description: "火焰附加增加4点，生命值提高60%", rarity: cardRarity.epic, cost: 50,
      effects: [E(cardEffectTypes.TEMPERATURE_BONUS, 4, "火焰附加增加4点"),
                E(cardEffectTypes.HEALTH_PERCENT, 60, "生命值提高60%")], icon: "🌋" },
    
    // ========== 新增温度主题卡牌 ==========
    { id: 37, name: "火焰附加", description: "火焰附加增加2点", rarity: cardRarity.common, cost: 20,
      effects: [E(cardEffectTypes.TEMPERATURE_BONUS, 2, "火焰附加增加2点")], icon: "🔥" },
    { id: 38, name: "冰霜附加", description: "冰霜附加增加3点", rarity: cardRarity.common, cost: 20,
      effects: [E(cardEffectTypes.TEMPERATURE_BONUS, -3, "冰霜附加增加3点")], icon: "❄️" },

    { id: 63, name: "极热爆发", description: "火焰附加增加8点，但生命值降低20%，攻击速度降低20%", rarity: cardRarity.rare, cost: 50,
      effects: [E(cardEffectTypes.TEMPERATURE_BONUS, 8, "火焰附加增加8点"),
                E(cardEffectTypes.HEALTH_PERCENT, -20, "生命值降低20%"),
                E(cardEffectTypes.ATTACK_SPEED_PERCENT, -20, "攻击速度降低20%")], icon: "🌡️" },

    { id: 64, name: "寒冰护体", description: "冰霜附加增加10点，生命值提高40%", rarity: cardRarity.rare, cost: 80,
      effects: [E(cardEffectTypes.TEMPERATURE_BONUS, -10, "冰霜附加增加10点"),
                E(cardEffectTypes.HEALTH_PERCENT, 40, "生命值提高40%")], icon: "❄️" },

    { id: 65, name: "炽热呼吸", description: "火焰附加增加3点，追击触发概率提高20%", rarity: cardRarity.epic, cost: 60,
      effects: [E(cardEffectTypes.TEMPERATURE_BONUS, 3, "火焰附加增加3点"),
                E(cardEffectTypes.CHASE_TRIGGER_CHANCE, 20, "追击触发概率提高20%")], icon: "🎵" },


,
    { id: 68, name: "绝对零度", description: "冰霜附加增加100点，但攻击速度降低100%", rarity: cardRarity.legendary, cost: 80,
      effects: [E(cardEffectTypes.TEMPERATURE_BONUS, -100, "冰霜附加增加100点"),
                E(cardEffectTypes.ATTACK_SPEED_PERCENT, -100, "攻击速度降低100%")], icon: "❄️" },

    { id: 69, name: "浴火", description: "火焰附加增加5点，生命回复每秒+2", rarity: cardRarity.epic, cost: 60,
      effects: [E(cardEffectTypes.TEMPERATURE_BONUS, 5, "火焰附加增加5点"), 
                  E(cardEffectTypes.HEALTH_REGEN, 2, "生命回复每秒+2")], icon: "🔄" },
    
    { id: 33, name: "追击", description: "最大追击次数增加2次,追击触发概率提高20%", rarity: cardRarity.common, cost: 10,
      effects: [E(cardEffectTypes.MAX_CHASES, 2, "最大追击次数增加2次"),
                E(cardEffectTypes.CHASE_TRIGGER_CHANCE, 20, "追击触发概率提高20%")], icon: "🥜" },

    { id: 53, name: "连锁追击", description: "最大追击次数增加4次，追击触发概率提高20%,攻击伤害降低30%", rarity: cardRarity.rare, cost: 50,
      effects: [E(cardEffectTypes.MAX_CHASES, 4, "最大追击次数增加4次"),
                E(cardEffectTypes.CHASE_TRIGGER_CHANCE, 20, "追击触发概率提高20%"),
                E(cardEffectTypes.ATTACK_DAMAGE_PERCENT, -30, "攻击伤害降低30%")], icon: "🔗" },
        
    { id: 54, name: "致命追击", description: "追击伤害倍率提高50%，攻击速度降低30%", rarity: cardRarity.rare, cost: 40,
      effects: [E(cardEffectTypes.CHASE_DAMAGE_RATIO, 50, "追击伤害倍率提高50%"),
                E(cardEffectTypes.ATTACK_SPEED_PERCENT, -30, "攻击速度降低30%")], icon: "💀" },
        
    { id: 55, name: "精准追击", description: "追击触发概率提高50%，攻击伤害降低30%", rarity: cardRarity.rare, cost: 50,
      effects: [E(cardEffectTypes.CHASE_TRIGGER_CHANCE, 50, "追击触发概率提高50%"),
                E(cardEffectTypes.ATTACK_DAMAGE_PERCENT, -30, "攻击伤害降低30%")], icon: "🎯" },
        
    { id: 56, name: "追击大师", description: "最大追击次数增加3次，追击触发概率提高30%，追击伤害倍率提高30%", rarity: cardRarity.epic, cost: 50,
      effects: [E(cardEffectTypes.MAX_CHASES, 3, "最大追击次数增加3次"),
                E(cardEffectTypes.CHASE_TRIGGER_CHANCE, 30, "追击触发概率提高30%"),
                E(cardEffectTypes.CHASE_DAMAGE_RATIO, 30, "追击伤害倍率提高30%")], icon: "👑" },
                
    { id: 57, name: "追追追追追击", description: "最大追击次数增加10次", rarity: cardRarity.legendary, cost: 80,
      effects: [E(cardEffectTypes.MAX_CHASES, 10, "最大追击次数增加10次")], icon: "🔗" },
];

// ==================== 植物属性增强系统 ====================
const plantEnhancementSystem = {
    plantEnhancements: {},
    
    initPlantEnhancements: function() {
        this.plantEnhancements = {};
    },
    
    addEnhancementToPlant: function(plantType, card) {
        if (!this.plantEnhancements[plantType]) {
            this.plantEnhancements[plantType] = {
                attackSpeedPercent: 0, attackDamagePercent: 0, healthPercent: 0,
                costPercent: 0, rangePercent: 0, xRangeValue: 0, yRangeValue: 0,
                healthRegen: 0, maxChases: 0, chaseTriggerChance: 0, chaseDamageRatio: 0,
                lockCount: 0, temperatureBonus: 0, appliedCards: []
            };
        }
        
        card.effects.forEach(effect => {
            switch(effect.type) {
                case cardEffectTypes.ATTACK_SPEED_PERCENT: this.plantEnhancements[plantType].attackSpeedPercent += effect.value; break;
                case cardEffectTypes.ATTACK_DAMAGE_PERCENT: this.plantEnhancements[plantType].attackDamagePercent += effect.value; break;
                case cardEffectTypes.HEALTH_PERCENT: this.plantEnhancements[plantType].healthPercent += effect.value; break;
                case cardEffectTypes.COST_PERCENT: this.plantEnhancements[plantType].costPercent += effect.value; break;
                case cardEffectTypes.RANGE_PERCENT: this.plantEnhancements[plantType].rangePercent += effect.value; break;
                case cardEffectTypes.X_RANGE_VALUE: this.plantEnhancements[plantType].xRangeValue += effect.value; break;
                case cardEffectTypes.Y_RANGE_VALUE: this.plantEnhancements[plantType].yRangeValue += effect.value; break;
                case cardEffectTypes.HEALTH_REGEN: this.plantEnhancements[plantType].healthRegen += effect.value; break;
                case cardEffectTypes.MAX_CHASES: this.plantEnhancements[plantType].maxChases += effect.value; break;
                case cardEffectTypes.CHASE_TRIGGER_CHANCE: this.plantEnhancements[plantType].chaseTriggerChance += effect.value; break;
                case cardEffectTypes.CHASE_DAMAGE_RATIO: this.plantEnhancements[plantType].chaseDamageRatio += effect.value; break;
                case cardEffectTypes.LOCK_COUNT: this.plantEnhancements[plantType].lockCount += effect.value; break;
                case cardEffectTypes.TEMPERATURE_BONUS: this.plantEnhancements[plantType].temperatureBonus += effect.value; break;
            }
        });
        
        this.plantEnhancements[plantType].appliedCards.push(card.id);
        console.log(`为植物 ${plantType} 应用了卡片 ${card.name}`);
        console.log(`当前增强: 攻速${this.plantEnhancements[plantType].attackSpeedPercent}%, 攻击${this.plantEnhancements[plantType].attackDamagePercent}%, 生命${this.plantEnhancements[plantType].healthPercent}%, 生命回复${this.plantEnhancements[plantType].healthRegen}, 最大追击次数${this.plantEnhancements[plantType].maxChases}, 追击触发概率${this.plantEnhancements[plantType].chaseTriggerChance}%, 追击伤害倍率${this.plantEnhancements[plantType].chaseDamageRatio}%, 锁定数量${this.plantEnhancements[plantType].lockCount}, 温度附加${this.plantEnhancements[plantType].temperatureBonus}`);
    },
    
    getPlantEnhancements: function(plantType) {
        return this.plantEnhancements[plantType] || {
            attackSpeedPercent: 0, attackDamagePercent: 0, healthPercent: 0,
            costPercent: 0, rangePercent: 0, xRangeValue: 0, yRangeValue: 0,
            healthRegen: 0, maxChases: 0, chaseTriggerChance: 0, chaseDamageRatio: 0,
            lockCount: 0, temperatureBonus: 0, appliedCards: []
        };
    }
};

// ==================== 卡片商店系统 ====================
const cardShopSystem = {
    currentDreamPoints: 0,
    availableCards: [],
purchasedCards: [],
    
    initShop: function(dreamPoints) {
        this.currentDreamPoints = dreamPoints;
        this.refreshCards();
    },
    
    refreshCards: function() {
        this.availableCards = [];
        const weightedCardPool = [];
        cardPool.forEach(card => {
            for (let i = 0; i < card.rarity.weight; i++) weightedCardPool.push(card);
        });
        
        const selectedCards = [];
        const tempPool = [...weightedCardPool];
        while (selectedCards.length < 3 && tempPool.length > 0) {
            const randomIndex = Math.floor(Math.random() * tempPool.length);
            const selectedCard = tempPool.splice(randomIndex, 1)[0];
            if (!selectedCards.some(card => card.id === selectedCard.id)) {
                selectedCards.push(selectedCard);
            }
        }
        this.availableCards = selectedCards;
        console.log("刷新卡片商店:", this.availableCards.map(card => card.name));
    },
    
    buyCard: function(cardId) {
        const card = this.availableCards.find(c => c.id === cardId);
        if (!card) { console.log("卡片不存在"); return false; }
        if (this.currentDreamPoints < card.cost) { console.log("梦境点数不足"); return false; }
        
        this.currentDreamPoints -= card.cost;
        console.log(`购买卡片 ${card.name}，消耗 ${card.cost} 梦境点数，剩余 ${this.currentDreamPoints}`);
        this.availableCards = this.availableCards.filter(c => c.id !== cardId);
        return card;
    },
    
    getRemainingPoints: function() { return this.currentDreamPoints; }
};

// ==================== 导出系统 ====================
window.rogueCards = {
    cardPool, dreamPointsSystem, plantEnhancementSystem,
    cardShopSystem, cardRarity, cardEffectTypes
};