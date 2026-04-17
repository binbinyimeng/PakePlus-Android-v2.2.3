// 肉鸽模式关卡配置 - 自动生成机制

// ========== 僵尸生成间隔和波次间隔基础配置 ==========
const intervalConfig = {
    // 普通波次的基础值
    normal: {
        baseSpawnInterval: 2500,      // 基础僵尸生成间隔（毫秒）
        baseWaveInterval: 8000        // 基础波次间隔（毫秒）
    },
    // 快速波次的基础值
    fast: {
        baseSpawnInterval: 800,        // 基础僵尸生成间隔（毫秒）
        baseWaveInterval: 12000          // 基础波次间隔（毫秒）
    },
    minInterval: 100,                  // 最小间隔（毫秒）
    levelFactor: 30,                  // 关卡数影响因子（每关减少多少毫秒）
    timeFactor: 2                     // 时间影响因子（每秒减少多少毫秒）
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
    
    const result = {
        spawnInterval: Math.floor(spawnInterval),
        waveInterval: Math.floor(waveInterval)
    };
    
    console.log(`最终结果: 生成间隔=${result.spawnInterval}ms, 波次间隔=${result.waveInterval}ms`);
    console.log('================================');
    
    return result;
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
    "dog": 2
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
    "dog": 1 // 狗僵尸
};

const zombiePool = [
    "normal", "normalEnhanced", "big", "bigEnhanced", "shieldZombie", "shieldZombieEnhanced", "assassin",
    "archer", "bigSpider", "strongZombie", "strongArcher", "thug", "dog"
];

const rogueLevels = [
    // ===== 第1关 =====
    {
        id: 101,
        name: "肉鸽模式 - 第1关",
        description: "初始挑战，适应肉鸽节奏",
        waves: [
            {
                waveNumber: 0.2,
                isFirst: true,
                isLast: true,
                threatValue: 3,
                isFastWave: true,
                excludedZombieTypes: ["archer", "strongArcher", "strongZombie", "bigSpider", "big", "bigEnhanced", "assassin"]
            }
        ]
    },

    // ===== 第2关 =====
    {
        id: 102,
        name: "肉鸽模式 - 第2关",
        description: "基础挑战，无特殊加成",
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 2, isFastWave: false, excludedZombieTypes: ["archer", "strongArcher", "big", "bigEnhanced", "bigSpider", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 6, isFastWave: false, excludedZombieTypes: ["strongArcher", "big", "bigEnhanced", "bigSpider", "assassin"] },
            { waveNumber: 3, isFirst: false, isLast: true, threatValue: 9, isFastWave: true, excludedZombieTypes: ["big", "bigEnhanced", "bigSpider", "assassin"] }
        ]
    },

    // ===== 第3关 =====
    {
        id: 103,
        name: "肉鸽模式 - 第3关 · 轻风",
        description: "⚡ 僵尸速度提升20%",
        zombieSpeedPercent: 20,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 2, isFastWave: false, excludedZombieTypes: ["strongArcher", "big", "bigEnhanced", "bigSpider", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 4, isFastWave: true, excludedZombieTypes: ["strongArcher", "big", "bigEnhanced", "bigSpider", "assassin"] },
            { waveNumber: 3, isFirst: false, isLast: true, threatValue: 20, isFastWave: true, excludedZombieTypes: ["big", "bigEnhanced", "bigSpider", "assassin"] }
        ]
    },

    // ===== 第4关 =====
    {
        id: 104,
        name: "肉鸽模式 - 第4关 · 坚韧",
        description: "🛡️ 僵尸生命值提升30%",
        zombieHealthPercent: 30,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 2, isFastWave: false, excludedZombieTypes: ["strongArcher", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 8, isFastWave: true, excludedZombieTypes: ["assassin"] },
            { waveNumber: 5, isFirst: false, isLast: true, threatValue: 54, isFastWave: true, excludedZombieTypes: ["assassin"] }
        ]
    },

    // ===== 第5关 =====
    {
        id: 105,
        name: "肉鸽模式 - 第5关 · 锋芒",
        description: "⚔️ 僵尸攻击力提升50%",
        zombieAttackPercent: 50,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 2, isFastWave: false, excludedZombieTypes: ["normal", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 9, isFastWave: true, excludedZombieTypes: ["normal", "assassin"] },
            { waveNumber: 3, isFirst: false, isLast: true, threatValue: 100.8, isFastWave: true, excludedZombieTypes: ["normal", "assassin"] }
        ]
    },

    // ===== 第6关 =====
    {
        id: 106,
        name: "肉鸽模式 - 第6关 · 疾风",
        description: "⚡🛡️ 速度+50%，生命+40%",
        zombieSpeedPercent: 50,
        zombieHealthPercent: 40,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 4, isFastWave: false, excludedZombieTypes: ["normal", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 8, isFastWave: true, excludedZombieTypes: ["normal"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 96, isFastWave: false, excludedZombieTypes: ["normal"] },
            { waveNumber: 4, isFirst: false, isLast: true, threatValue: 122.4, isFastWave: true, excludedZombieTypes: ["normal"] }
        ]
    },

    // ===== 第7关 =====
    {
        id: 107,
        name: "肉鸽模式 - 第7关 · 凶猛",
        description: "⚔️⚡ 攻击+80%，速度+40%",
        zombieAttackPercent: 80,
        zombieSpeedPercent: 40,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 64, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 102.8, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 109.2, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced"] },
            { waveNumber: 4, isFirst: false, isLast: true, threatValue: 154.8, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced"] }
        ]
    },

    // ===== 第8关 =====
    {
        id: 108,
        name: "肉鸽模式 - 第8关 · 壁垒",
        description: "🛡️⚔️ 生命+100%，攻击+40%",
        zombieHealthPercent: 100,
        zombieAttackPercent: 40,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 102.8, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 115.6, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 128.4, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced"] },
            { waveNumber: 4, isFirst: false, isLast: false, threatValue: 147.6, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced"] },
            { waveNumber: 5, isFirst: false, isLast: true, threatValue: 284.4, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced"] }
        ]
    },

    // ===== 第9关 =====
    {
        id: 109,
        name: "肉鸽模式 - 第9关 · 狂暴",
        description: "⚔️⚡ 攻击+100%，速度+50%",
        zombieAttackPercent: 100,
        zombieSpeedPercent: 50,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 115.6, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 141.2, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 166.8, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced"] },
            { waveNumber: 4, isFirst: false, isLast: false, threatValue: 205.2, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced"] },
            { waveNumber: 5, isFirst: false, isLast: true, threatValue: 478.8, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced"] }
        ]
    },

    // ===== 第10关 =====
    {
        id: 110,
        name: "肉鸽模式 - 第10关 · 均衡试炼",
        description: "⚔️🛡️⚡ 全属性+50%",
        zombieHealthPercent: 100,
        zombieAttackPercent: 100,
        zombieSpeedPercent: 100,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 141.2, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 192.4, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 243.6, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced"] },
            { waveNumber: 4, isFirst: false, isLast: false, threatValue: 320.4, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced"] },
            { waveNumber: 5, isFirst: false, isLast: false, threatValue: 435.6, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced"] },
            { waveNumber: 6, isFirst: false, isLast: true, threatValue: 656.4, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced"] }
        ]
    },

    // ===== 第11关 =====
    {
        id: 111,
        name: "肉鸽模式 - 第11关 · 钢铁之躯",
        description: "🛡️🛡️ 生命+100%，其他无加成",
        zombieHealthPercent: 100,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 192.4, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 294.8, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 397.2, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 4, isFirst: false, isLast: false, threatValue: 550.8, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 5, isFirst: false, isLast: false, threatValue: 505.08, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 6, isFirst: false, isLast: true, threatValue: 573.28, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] }
        ]
    },

    // ===== 第12关 =====
    {
        id: 112,
        name: "肉鸽模式 - 第12关 · 闪电战",
        description: "⚡⚡ 速度+250%，其他无加成",
        zombieSpeedPercent: 250,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 294.8, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 499.6, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 510.44, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 4, isFirst: false, isLast: false, threatValue: 521.16, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 5, isFirst: false, isLast: true, threatValue: 629.84, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] }
        ]
    },

    // ===== 第13关 =====
    {
        id: 113,
        name: "肉鸽模式 - 第13关 · 致命一击",
        description: "⚔️⚔️ 攻击+500%，其他无加成",
        zombieAttackPercent: 500,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 499.6, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 540.92, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 504.09, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 4, isFirst: false, isLast: false, threatValue: 504.88, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 5, isFirst: false, isLast: false, threatValue: 505.86, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 6, isFirst: false, isLast: false, threatValue: 507.04, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 7, isFirst: false, isLast: true, threatValue: 513.47, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] }
        ]
    },

    // ===== 第14关 =====
    {
        id: 114,
        name: "肉鸽模式 - 第14关 · 不破之盾",
        description: "🛡️⚡ 生命+300%，速度+100%",
        zombieHealthPercent: 300,
        zombieSpeedPercent: 100,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 540.92, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 504.09, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 504.88, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 4, isFirst: false, isLast: false, threatValue: 505.86, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 5, isFirst: false, isLast: false, threatValue: 507.04, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 6, isFirst: false, isLast: false, threatValue: 508.62, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 7, isFirst: false, isLast: true, threatValue: 517.02, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] }
        ]
    },

    // ===== 第15关 =====
    {
        id: 115,
        name: "肉鸽模式 - 第15关 · 均衡地狱",
        description: "⚔️🛡️⚡ 全属性+300%",
        zombieHealthPercent: 300,
        zombieAttackPercent: 300,
        zombieSpeedPercent: 300,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 504.09, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 505.49, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 506.69, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 4, isFirst: false, isLast: false, threatValue: 508.29, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 5, isFirst: false, isLast: false, threatValue: 510.49, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 6, isFirst: false, isLast: false, threatValue: 513.39, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 7, isFirst: false, isLast: true, threatValue: 529.49, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] }
        ]
    },

    // ===== 第16关 =====
    {
        id: 116,
        name: "肉鸽模式 - 第16关 · 死神之镰",
        description: "⚔️⚡ 攻击+400%，速度+120%",
        zombieAttackPercent: 400,
        zombieSpeedPercent: 120,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 505.49, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 508.05, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 510.14, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 4, isFirst: false, isLast: false, threatValue: 533.48, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 5, isFirst: false, isLast: false, threatValue: 543.02, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 6, isFirst: false, isLast: true, threatValue: 555.34, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] }
        ]
    },

    // ===== 第17关 =====
    {
        id: 117,
        name: "肉鸽模式 - 第17关 · 不朽堡垒",
        description: "🛡️⚔️ 生命+500%，攻击+200%",
        zombieHealthPercent: 500,
        zombieAttackPercent: 200,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 508.05, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 513.67, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 518.82, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 4, isFirst: false, isLast: false, threatValue: 525.44, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 5, isFirst: false, isLast: false, threatValue: 533.94, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 6, isFirst: false, isLast: true, threatValue: 627.40, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] }
        ]
    },

    // ===== 第18关 =====
    {
        id: 118,
        name: "肉鸽模式 - 第18关 · 纯粹速度",
        description: "⚡⚡⚡ 速度+500%，无其他加成",
        zombieSpeedPercent: 500,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 513.67, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 527.44, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 3, isFirst: false, isLast: true, threatValue: 791.97, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] }
        ]
    },

    // ===== 第19关 =====
    {
        id: 119,
        name: "肉鸽模式 - 第19关 · 终极狂暴",
        description: "⚔️⚔️⚔️ 攻击+1000%，其他无加成",
        zombieAttackPercent: 1000,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 527.44, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 559.79, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 593.77, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 4, isFirst: false, isLast: true, threatValue: 1127.79, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] }
        ]
    },

    // ===== 第20关（最终关） =====
    {
        id: 120,
        name: "肉鸽模式 - 终焉 · 诸神黄昏",
        description: "⚔️🛡️⚡ 全属性+1000%，生存还是毁灭",
        zombieHealthPercent: 1000,
        zombieAttackPercent: 1000,
        zombieSpeedPercent: 500,
        waves: [
            { waveNumber: 1, isFirst: true, isLast: false, threatValue: 559.79, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie", "assassin"] },
            { waveNumber: 2, isFirst: false, isLast: false, threatValue: 624.53, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 3, isFirst: false, isLast: false, threatValue: 698.95, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 4, isFirst: false, isLast: false, threatValue: 789.46, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 5, isFirst: false, isLast: false, threatValue: 900.69, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 6, isFirst: false, isLast: false, threatValue: 1010.73, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 7, isFirst: false, isLast: false, threatValue: 1123.29, isFastWave: false, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] },
            { waveNumber: 8, isFirst: false, isLast: true, threatValue: 1536.10, isFastWave: true, excludedZombieTypes: ["normal", "normalEnhanced", "shieldZombie"] }
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
    let targetFinalThreat = wave.threatValue;

    // 确定生成间隔（保留预定义间隔逻辑）
    let spawnInterval, waveInterval;
    if (wave.spawnInterval !== undefined && wave.waveInterval !== undefined) {
        spawnInterval = wave.spawnInterval;
        waveInterval = wave.waveInterval;
    } else {
        // 使用新的动态间隔计算机制
        const dynamicIntervals = calculateDynamicIntervals(wave.isFastWave, levelNumber, levelTime);
        spawnInterval = dynamicIntervals.spawnInterval;
        waveInterval = dynamicIntervals.waveInterval;

        // 应用噩梦因子（如果存在）
        if (typeof nightmareGlobalData !== 'undefined') {
            targetFinalThreat = nightmareGlobalData.calculateThreatValue(targetFinalThreat);
            spawnInterval = nightmareGlobalData.calculateSpawnInterval(spawnInterval);
            waveInterval = nightmareGlobalData.calculateWaveInterval(waveInterval);
        }
    }

    wave.spawnInterval = spawnInterval;
    wave.waveInterval = waveInterval;

    // 计算目标僵尸威胁值总和（公式：最终威胁值 = (威胁总和 * 1000) / 生成间隔）
    const targetZombieThreatSum = (targetFinalThreat * spawnInterval) / 1000;
    const maxThreatSum = targetZombieThreatSum * 1.1;
    const minThreatSum = targetZombieThreatSum * 0.9;

    // 构建可用僵尸池（过滤排除类型 + 威胁值过高的类型）
    let availableZombies = [...zombiePool];
    if (wave.excludedZombieTypes && Array.isArray(wave.excludedZombieTypes)) {
        availableZombies = availableZombies.filter(type => !wave.excludedZombieTypes.includes(type));
    }

    const filteredZombies = availableZombies.filter(type => {
        const threat = zombieThreatValues[type];
        return threat <= targetZombieThreatSum * 2;
    });

    let finalZombiePool = filteredZombies.length > 0 ? filteredZombies : availableZombies;
    // 极端情况：如果仍然为空，则使用威胁值最小的僵尸
    if (finalZombiePool.length === 0) {
        finalZombiePool = [availableZombies.reduce((a, b) => 
            zombieThreatValues[a] < zombieThreatValues[b] ? a : b
        )];
    }

    // ---------- 核心修改：权重随机刷新僵尸 ----------
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
        const zombieType = weightedRandomZombie(finalZombiePool);
        const threat = zombieThreatValues[zombieType];

        // 如果添加该僵尸会超过最大允许威胁值，则尝试其他类型（避免溢出）
        if (currentThreatSum + threat > maxThreatSum) {
            continue;
        }

        zombieCounts[zombieType] = (zombieCounts[zombieType] || 0) + 1;
        currentThreatSum += threat;
    }

    // 第二阶段：若因尝试次数限制或无法添加导致未达到下限，则强制用威胁值最小的僵尸补足
    if (currentThreatSum < minThreatSum) {
        const minThreatType = finalZombiePool.reduce((a, b) => 
            zombieThreatValues[a] < zombieThreatValues[b] ? a : b
        );
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