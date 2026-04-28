// 关卡信息配置
const levels = [
    {
        id: 1,
        name: "第一关",
        waves: [
            {
                waveNumber: 1,
                isFirst: true,
                isLast: false,
                spawnInterval: 5000, // 原来的4倍的1/2
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 4 } // 调整数量
                ]
            },
            {
                waveNumber: 2,
                isFirst: false,
                isLast: false,
                spawnInterval: 4000, // 原来的4倍的1/2
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 4 },
                    { type: "normalEnhanced", count: 2 }
                ]
            },
            {
                waveNumber: 3,
                isFirst: false,
                isLast: false,
                spawnInterval: 2500,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 3 }
                ]
            },
            {
                waveNumber: 4,
                isFirst: false,
                isLast: false,
                spawnInterval: 2000,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 1 }
                ]
            },
            {
                waveNumber: 8,
                isFirst: false,
                isLast: false,
                spawnInterval: 1000,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 2 }
                ]
            },
            {
                waveNumber: 13,
                isFirst: false,
                isLast: false,
                spawnInterval: 500,
                waveInterval: 10000,
                zombies: [
                    { type: "normal", count: 3 },
                    { type: "normalEnhanced", count: 2 }
                ]
            },
            {
                waveNumber: 18,
                isFirst: false,
                isLast: true,
                spawnInterval: 250,
                waveInterval: 0,
                zombies: [
                    { type: "normal", count: 4 },
                    { type: "normalEnhanced", count: 3 }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "第二关",
        waves: [
            {
                waveNumber: 1,
                isFirst: true,
                isLast: false,
                spawnInterval: 5000, // 原来的4倍的1/2
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 4 } // 调整数量
                ]
            },
            {
                waveNumber: 2,
                isFirst: false,
                isLast: false,
                spawnInterval: 4000, // 原来的4倍的1/2
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 4 },
                    { type: "normalEnhanced", count: 2 }
                ]
            },
            {
                waveNumber: 3,
                isFirst: false,
                isLast: false,
                spawnInterval: 1800, // 原来的2倍的1/2
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 }
                ]
            },
            {
                waveNumber: 4,
                isFirst: false,
                isLast: false,
                spawnInterval: 1500, // 原来的2倍的1/2
                waveInterval: 5000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 }
                ]
            },
            {
                waveNumber: 5,
                isFirst: false,
                isLast: false,
                spawnInterval: 1200, // 原来的2倍的1/2
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 }
                ]
            },
            {
                waveNumber: 6,
                isFirst: false,
                isLast: false,
                spawnInterval: 1000,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 1 },
                    { type: "big", count: 1 }
                ]
            },
            {
                waveNumber: 7,
                isFirst: false,
                isLast: false,
                spawnInterval: 900,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 }
                ]
            },
            {
                waveNumber: 18,
                isFirst: false,
                isLast: true,
                spawnInterval: 200,
                waveInterval: 0,
                zombies: [
                    { type: "normal", count: 3 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "strongZombie", count: 1 }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "第三关",
        waves: [
            {
                waveNumber: 1,
                isFirst: true,
                isLast: false,
                spawnInterval: 5000, // 原来的4倍的1/2
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 4 } // 调整数量
                ]
            },
            {
                waveNumber: 2,
                isFirst: false,
                isLast: false,
                spawnInterval: 4000, // 原来的4倍的1/2
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 4 },
                    { type: "normalEnhanced", count: 2 }
                ]
            },
            {
                waveNumber: 3,
                isFirst: false,
                isLast: false,
                spawnInterval: 1800, // 原来的2倍的1/2
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "shieldZombie", count: 1 }
                ]
            },
            {
                waveNumber: 4,
                isFirst: false,
                isLast: false,
                spawnInterval: 1500, // 原来的2倍的1/2
                waveInterval: 5000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "shieldZombie", count: 1 }
                ]
            },
            {
                waveNumber: 5,
                isFirst: false,
                isLast: false,
                spawnInterval: 1200, // 原来的2倍的1/2
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 }
                ]
            },
            {
                waveNumber: 6,
                isFirst: false,
                isLast: false,
                spawnInterval: 1000,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 1 },
                    { type: "big", count: 1 },
                    { type: "shieldZombie", count: 1 }
                ]
            },
            {
                waveNumber: 7,
                isFirst: false,
                isLast: false,
                spawnInterval: 900,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 }
                ]
            },
            {
                waveNumber: 8,
                isFirst: false,
                isLast: false,
                spawnInterval: 800,
                waveInterval: 5000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "shieldZombie", count: 1 }
                ]
            },
            {
                waveNumber: 9,
                isFirst: false,
                isLast: false,
                spawnInterval: 700,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 }
                ]
            },
            {
                waveNumber: 10,
                isFirst: false,
                isLast: false,
                spawnInterval: 600,
                waveInterval: 5000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 }
                ]
            },
            {
                waveNumber: 11,
                isFirst: false,
                isLast: false,
                spawnInterval: 550,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 1 },
                    { type: "big", count: 1 },
                    { type: "shieldZombie", count: 1 }
                ]
            },
            {
                waveNumber: 12,
                isFirst: false,
                isLast: false,
                spawnInterval: 500,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 }
                ]
            },
            {
                waveNumber: 13,
                isFirst: false,
                isLast: false,
                spawnInterval: 450,
                waveInterval: 5000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 }
                ]
            },
            {
                waveNumber: 14,
                isFirst: false,
                isLast: false,
                spawnInterval: 400,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 1 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 }
                ]
            },
            {
                waveNumber: 15,
                isFirst: false,
                isLast: false,
                spawnInterval: 350,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 1 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 }
                ]
            },
            {
                waveNumber: 16,
                isFirst: false,
                isLast: false,
                spawnInterval: 300,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 }
                ]
            },
            {
                waveNumber: 17,
                isFirst: false,
                isLast: false,
                spawnInterval: 250,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 }
                ]
            },
            {
                waveNumber: 18,
                isFirst: false,
                isLast: true,
                spawnInterval: 200,
                waveInterval: 0,
                zombies: [
                    { type: "normal", count: 3 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "strongZombie", count: 1 }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "第四关",
        waves: [
            {
                waveNumber: 1,
                isFirst: true,
                isLast: false,
                spawnInterval: 5000, // 原来的4倍的1/2
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 4 } // 调整数量
                ]
            },
            {
                waveNumber: 2,
                isFirst: false,
                isLast: false,
                spawnInterval: 4000, // 原来的4倍的1/2
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 4 },
                    { type: "normalEnhanced", count: 2 }
                ]
            },
            {
                waveNumber: 3,
                isFirst: false,
                isLast: false,
                spawnInterval: 1800, // 原来的2倍的1/2
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "archer", count: 1 }
                ]
            },
            {
                waveNumber: 4,
                isFirst: false,
                isLast: false,
                spawnInterval: 1500, // 原来的2倍的1/2
                waveInterval: 5000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "archer", count: 1 }
                ]
            },
            {
                waveNumber: 5,
                isFirst: false,
                isLast: false,
                spawnInterval: 1200, // 原来的2倍的1/2
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "archer", count: 1 }
                ]
            },
            {
                waveNumber: 6,
                isFirst: false,
                isLast: false,
                spawnInterval: 1000,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 1 },
                    { type: "big", count: 1 },
                    { type: "archer", count: 1 }
                ]
            },
            {
                waveNumber: 7,
                isFirst: false,
                isLast: false,
                spawnInterval: 900,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "archer", count: 1 }
                ]
            },
            {
                waveNumber: 8,
                isFirst: false,
                isLast: false,
                spawnInterval: 800,
                waveInterval: 5000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "archer", count: 1 }
                ]
            },
            {
                waveNumber: 9,
                isFirst: false,
                isLast: false,
                spawnInterval: 700,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "archer", count: 1 }
                ]
            },
            {
                waveNumber: 10,
                isFirst: false,
                isLast: false,
                spawnInterval: 600,
                waveInterval: 5000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "archer", count: 1 }
                ]
            },
            {
                waveNumber: 11,
                isFirst: false,
                isLast: false,
                spawnInterval: 550,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 1 },
                    { type: "big", count: 1 },
                    { type: "archer", count: 1 }
                ]
            },
            {
                waveNumber: 12,
                isFirst: false,
                isLast: false,
                spawnInterval: 500,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "archer", count: 1 }
                ]
            },
            {
                waveNumber: 13,
                isFirst: false,
                isLast: false,
                spawnInterval: 450,
                waveInterval: 5000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "archer", count: 1 }
                ]
            },
            {
                waveNumber: 14,
                isFirst: false,
                isLast: false,
                spawnInterval: 400,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 1 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "archer", count: 1 }
                ]
            },
            {
                waveNumber: 15,
                isFirst: false,
                isLast: false,
                spawnInterval: 350,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 1 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "archer", count: 1 }
                ]
            },
            {
                waveNumber: 16,
                isFirst: false,
                isLast: false,
                spawnInterval: 300,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "archer", count: 2 }
                ]
            },
            {
                waveNumber: 17,
                isFirst: false,
                isLast: false,
                spawnInterval: 250,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 2 }
                ]
            },
            {
                waveNumber: 18,
                isFirst: false,
                isLast: true,
                spawnInterval: 200,
                waveInterval: 0,
                zombies: [
                    { type: "normal", count: 3 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 2 },
                    { type: "strongZombie", count: 1 }
                ]
            }
        ]
    },
    {
        id: 5,
        name: "第五关",
        waves: [
            {
                waveNumber: 1,
                isFirst: true,
                isLast: false,
                spawnInterval: 5000, // 原来的4倍的1/2
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 4 } // 调整数量
                ]
            },
            {
                waveNumber: 2,
                isFirst: false,
                isLast: false,
                spawnInterval: 4000, // 原来的4倍的1/2
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 4 },
                    { type: "normalEnhanced", count: 2 }
                ]
            },
            {
                waveNumber: 3,
                isFirst: false,
                isLast: false,
                spawnInterval: 1800, // 原来的2倍的1/2
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "archer", count: 1 }
                ]
            },
            {
                waveNumber: 4,
                isFirst: false,
                isLast: false,
                spawnInterval: 1500, // 原来的2倍的1/2
                waveInterval: 5000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 }
                ]
            },
            {
                waveNumber: 5,
                isFirst: false,
                isLast: false,
                spawnInterval: 1200, // 原来的2倍的1/2
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "strongArcher", count: 1 }
                ]
            },
            {
                waveNumber: 6,
                isFirst: false,
                isLast: false,
                spawnInterval: 1000,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 1 },
                    { type: "big", count: 1 },
                    { type: "archer", count: 1 }
                ]
            },
            {
                waveNumber: 7,
                isFirst: false,
                isLast: false,
                spawnInterval: 900,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "strongArcher", count: 1 }
                ]
            },
            {
                waveNumber: 8,
                isFirst: false,
                isLast: false,
                spawnInterval: 800,
                waveInterval: 5000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 }
                ]
            },
            {
                waveNumber: 9,
                isFirst: false,
                isLast: false,
                spawnInterval: 700,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "strongArcher", count: 1 }
                ]
            },
            {
                waveNumber: 10,
                isFirst: false,
                isLast: false,
                spawnInterval: 600,
                waveInterval: 5000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 }
                ]
            },
            {
                waveNumber: 11,
                isFirst: false,
                isLast: false,
                spawnInterval: 550,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 1 },
                    { type: "big", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 }
                ]
            },
            {
                waveNumber: 12,
                isFirst: false,
                isLast: false,
                spawnInterval: 500,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "strongArcher", count: 1 }
                ]
            },
            {
                waveNumber: 13,
                isFirst: false,
                isLast: false,
                spawnInterval: 450,
                waveInterval: 5000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 }
                ]
            },
            {
                waveNumber: 14,
                isFirst: false,
                isLast: false,
                spawnInterval: 400,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 1 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 }
                ]
            },
            {
                waveNumber: 15,
                isFirst: false,
                isLast: false,
                spawnInterval: 350,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 1 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 }
                ]
            },
            {
                waveNumber: 16,
                isFirst: false,
                isLast: false,
                spawnInterval: 300,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 }
                ]
            },
            {
                waveNumber: 17,
                isFirst: false,
                isLast: false,
                spawnInterval: 250,
                waveInterval: 5000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 }
                ]
            },
            {
                waveNumber: 18,
                isFirst: false,
                isLast: true,
                spawnInterval: 200,
                waveInterval: 0,
                zombies: [
                    { type: "normal", count: 3 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "strongZombie", count: 1 }
                ]
            }
        ]
    },
    {
        id: 6,
        name: "第六关",
        waves: [
            {
                waveNumber: 1,
                isFirst: true,
                isLast: false,
                spawnInterval: 5000, // 原来的4倍的1/2
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 4 } // 调整数量
                ]
            },
            {
                waveNumber: 2,
                isFirst: false,
                isLast: false,
                spawnInterval: 4000, // 原来的4倍的1/2
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 4 },
                    { type: "normalEnhanced", count: 2 }
                ]
            },
            {
                waveNumber: 3,
                isFirst: false,
                isLast: false,
                spawnInterval: 1800, // 原来的2倍的1/2
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "smallSpider", count: 2 }
                ]
            },
            {
                waveNumber: 4,
                isFirst: false,
                isLast: false,
                spawnInterval: 1500, // 原来的2倍的1/2
                waveInterval: 4000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "smallSpider", count: 2 }
                ]
            },
            {
                waveNumber: 5,
                isFirst: false,
                isLast: false,
                spawnInterval: 1200, // 原来的2倍的1/2
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "smallSpider", count: 3 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 6,
                isFirst: false,
                isLast: false,
                spawnInterval: 1000, // 原来的2倍的1/2
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "smallSpider", count: 3 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 7,
                isFirst: false,
                isLast: false,
                spawnInterval: 900,
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "smallSpider", count: 2 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 8,
                isFirst: false,
                isLast: false,
                spawnInterval: 800,
                waveInterval: 4000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "smallSpider", count: 2 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 9,
                isFirst: false,
                isLast: false,
                spawnInterval: 700,
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "smallSpider", count: 3 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 10,
                isFirst: false,
                isLast: false,
                spawnInterval: 600,
                waveInterval: 4000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "smallSpider", count: 3 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 11,
                isFirst: false,
                isLast: false,
                spawnInterval: 550,
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 1 },
                    { type: "big", count: 1 },
                    { type: "smallSpider", count: 2 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 12,
                isFirst: false,
                isLast: false,
                spawnInterval: 500,
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "smallSpider", count: 3 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 13,
                isFirst: false,
                isLast: false,
                spawnInterval: 450,
                waveInterval: 4000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "smallSpider", count: 3 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 14,
                isFirst: false,
                isLast: false,
                spawnInterval: 400,
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 1 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "smallSpider", count: 3 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 15,
                isFirst: false,
                isLast: false,
                spawnInterval: 350,
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 1 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "smallSpider", count: 3 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 16,
                isFirst: false,
                isLast: false,
                spawnInterval: 300,
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "smallSpider", count: 4 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 17,
                isFirst: false,
                isLast: false,
                spawnInterval: 250,
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "smallSpider", count: 4 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 18,
                isFirst: false,
                isLast: false,
                spawnInterval: 220,
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 4 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 19,
                isFirst: false,
                isLast: false,
                spawnInterval: 200,
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 4 },
                    { type: "bigSpider", count: 2 }
                ]
            },
            {
                waveNumber: 20,
                isFirst: false,
                isLast: false,
                spawnInterval: 180,
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 5 },
                    { type: "bigSpider", count: 2 }
                ]
            },
            {
                waveNumber: 21,
                isFirst: false,
                isLast: true,
                spawnInterval: 150,
                waveInterval: 0,
                zombies: [
                    { type: "normal", count: 3 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 5 },
                    { type: "bigSpider", count: 2 },
                    { type: "strongZombie", count: 1 }
                ]
            }
        ]
    },
    {
        id: 7,
        name: "第七关",
        waves: [
            {
                waveNumber: 1,
                isFirst: true,
                isLast: false,
                spawnInterval: 4000, // 原来的4倍的1/2
                waveInterval: 3000,
                zombies: [
                    { type: "normal", count: 4 }, // 调整数量
                    { type: "normalEnhanced", count: 2 }
                ]
            },
            {
                waveNumber: 2,
                isFirst: false,
                isLast: false,
                spawnInterval: 3600, // 原来的4倍的1/2
                waveInterval: 3000,
                zombies: [
                    { type: "normal", count: 4 },
                    { type: "big", count: 2 },
                    { type: "shieldZombie", count: 2 }
                ]
            },
            {
                waveNumber: 3,
                isFirst: false,
                isLast: false,
                spawnInterval: 1500, // 原来的2倍的1/2
                waveInterval: 3000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 }
                ]
            },
            {
                waveNumber: 4,
                isFirst: false,
                isLast: false,
                spawnInterval: 1200, // 原来的2倍的1/2
                waveInterval: 3000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "smallSpider", count: 2 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 5,
                isFirst: false,
                isLast: false,
                spawnInterval: 1000, // 原来的2倍的1/2
                waveInterval: 3000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 3 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 6,
                isFirst: false,
                isLast: false,
                spawnInterval: 800, // 原来的2倍的1/2
                waveInterval: 3000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 3 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 7,
                isFirst: false,
                isLast: false,
                spawnInterval: 700,
                waveInterval: 3000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "smallSpider", count: 2 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 8,
                isFirst: false,
                isLast: false,
                spawnInterval: 600,
                waveInterval: 3000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "smallSpider", count: 2 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 9,
                isFirst: false,
                isLast: false,
                spawnInterval: 550,
                waveInterval: 3000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 3 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 10,
                isFirst: false,
                isLast: false,
                spawnInterval: 500,
                waveInterval: 3000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 3 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 11,
                isFirst: false,
                isLast: false,
                spawnInterval: 450,
                waveInterval: 3000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 1 },
                    { type: "big", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "smallSpider", count: 2 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 12,
                isFirst: false,
                isLast: false,
                spawnInterval: 400,
                waveInterval: 3000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 3 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 13,
                isFirst: false,
                isLast: false,
                spawnInterval: 350,
                waveInterval: 3000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 3 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 14,
                isFirst: false,
                isLast: false,
                spawnInterval: 320,
                waveInterval: 3000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 1 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 3 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 15,
                isFirst: false,
                isLast: false,
                spawnInterval: 300,
                waveInterval: 3000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 1 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 3 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 16,
                isFirst: false,
                isLast: false,
                spawnInterval: 280,
                waveInterval: 3000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 4 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 17,
                isFirst: false,
                isLast: false,
                spawnInterval: 250,
                waveInterval: 3000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 4 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 18,
                isFirst: false,
                isLast: false,
                spawnInterval: 220,
                waveInterval: 3000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 4 },
                    { type: "bigSpider", count: 1 }
                ]
            },
            {
                waveNumber: 19,
                isFirst: false,
                isLast: false,
                spawnInterval: 200,
                waveInterval: 3000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 4 },
                    { type: "bigSpider", count: 2 }
                ]
            },
            {
                waveNumber: 20,
                isFirst: false,
                isLast: false,
                spawnInterval: 180,
                waveInterval: 3000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 5 },
                    { type: "bigSpider", count: 2 }
                ]
            },
            {
                waveNumber: 21,
                isFirst: false,
                isLast: true,
                spawnInterval: 150,
                waveInterval: 0,
                zombies: [
                    { type: "normal", count: 3 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 5 },
                    { type: "bigSpider", count: 2 },
                    { type: "strongZombie", count: 2 }
                ]
            }
        ]
    },
    {
        id: 8,
        name: "第八关",
        waves: [
            {
                waveNumber: 1,
                isFirst: true,
                isLast: false,
                spawnInterval: 3600, // 原来的4倍的1/2
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 4 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "shieldZombie", count: 2 }
                ]
            },
            {
                waveNumber: 2,
                isFirst: false,
                isLast: false,
                spawnInterval: 3000, // 原来的4倍的1/2
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 4 },
                    { type: "big", count: 2 },
                    { type: "shieldZombie", count: 2 },
                    { type: "archer", count: 2 }
                ]
            },
            {
                waveNumber: 3,
                isFirst: false,
                isLast: false,
                spawnInterval: 1200, // 原来的2倍的1/2
                waveInterval: 4000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "archer", count: 1 }
                ]
            },
            {
                waveNumber: 4,
                isFirst: false,
                isLast: false,
                spawnInterval: 1000, // 原来的2倍的1/2
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 3 },
                    { type: "bigSpider", count: 1 },
                    { type: "strongZombie", count: 1 }
                ]
            },
            {
                waveNumber: 5,
                isFirst: false,
                isLast: false,
                spawnInterval: 800, // 原来的2倍的1/2
                waveInterval: 4000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 3 },
                    { type: "bigSpider", count: 1 },
                    { type: "strongZombie", count: 1 }
                ]
            },
            {
                waveNumber: 6,
                isFirst: false,
                isLast: false,
                spawnInterval: 600, // 原来的2倍的1/2
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 3 },
                    { type: "bigSpider", count: 1 },
                    { type: "strongZombie", count: 1 }
                ]
            },
            {
                waveNumber: 7,
                isFirst: false,
                isLast: false,
                spawnInterval: 500,
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 3 },
                    { type: "bigSpider", count: 1 },
                    { type: "strongZombie", count: 1 }
                ]
            },
            {
                waveNumber: 8,
                isFirst: false,
                isLast: false,
                spawnInterval: 450,
                waveInterval: 4000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 3 },
                    { type: "bigSpider", count: 1 },
                    { type: "strongZombie", count: 1 }
                ]
            },
            {
                waveNumber: 9,
                isFirst: false,
                isLast: false,
                spawnInterval: 400,
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 4 },
                    { type: "bigSpider", count: 1 },
                    { type: "strongZombie", count: 1 }
                ]
            },
            {
                waveNumber: 10,
                isFirst: false,
                isLast: false,
                spawnInterval: 350,
                waveInterval: 4000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 4 },
                    { type: "bigSpider", count: 1 },
                    { type: "strongZombie", count: 1 }
                ]
            },
            {
                waveNumber: 11,
                isFirst: false,
                isLast: false,
                spawnInterval: 320,
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 1 },
                    { type: "big", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 3 },
                    { type: "bigSpider", count: 1 },
                    { type: "strongZombie", count: 1 }
                ]
            },
            {
                waveNumber: 12,
                isFirst: false,
                isLast: false,
                spawnInterval: 300,
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 4 },
                    { type: "bigSpider", count: 1 },
                    { type: "strongZombie", count: 1 }
                ]
            },
            {
                waveNumber: 13,
                isFirst: false,
                isLast: false,
                spawnInterval: 280,
                waveInterval: 4000,
                zombies: [
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 4 },
                    { type: "bigSpider", count: 1 },
                    { type: "strongZombie", count: 1 }
                ]
            },
            {
                waveNumber: 14,
                isFirst: false,
                isLast: false,
                spawnInterval: 250,
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 1 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 4 },
                    { type: "bigSpider", count: 1 },
                    { type: "strongZombie", count: 1 }
                ]
            },
            {
                waveNumber: 15,
                isFirst: false,
                isLast: false,
                spawnInterval: 220,
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 1 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 4 },
                    { type: "bigSpider", count: 1 },
                    { type: "strongZombie", count: 1 }
                ]
            },
            {
                waveNumber: 16,
                isFirst: false,
                isLast: false,
                spawnInterval: 200,
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 5 },
                    { type: "bigSpider", count: 1 },
                    { type: "strongZombie", count: 1 }
                ]
            },
            {
                waveNumber: 17,
                isFirst: false,
                isLast: false,
                spawnInterval: 180,
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 5 },
                    { type: "bigSpider", count: 1 },
                    { type: "strongZombie", count: 1 }
                ]
            },
            {
                waveNumber: 18,
                isFirst: false,
                isLast: false,
                spawnInterval: 160,
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 5 },
                    { type: "bigSpider", count: 1 },
                    { type: "strongZombie", count: 2 }
                ]
            },
            {
                waveNumber: 19,
                isFirst: false,
                isLast: false,
                spawnInterval: 140,
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 5 },
                    { type: "bigSpider", count: 2 },
                    { type: "strongZombie", count: 2 }
                ]
            },
            {
                waveNumber: 20,
                isFirst: false,
                isLast: false,
                spawnInterval: 120,
                waveInterval: 4000,
                zombies: [
                    { type: "normal", count: 2 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 1 },
                    { type: "smallSpider", count: 5 },
                    { type: "bigSpider", count: 2 },
                    { type: "strongZombie", count: 2 }
                ]
            },
            {
                waveNumber: 21,
                isFirst: false,
                isLast: true,
                spawnInterval: 100,
                waveInterval: 0,
                zombies: [
                    { type: "normal", count: 3 },
                    { type: "normalEnhanced", count: 2 },
                    { type: "big", count: 1 },
                    { type: "bigEnhanced", count: 1 },
                    { type: "shieldZombie", count: 1 },
                    { type: "shieldZombieEnhanced", count: 1 },
                    { type: "archer", count: 1 },
                    { type: "strongArcher", count: 2 },
                    { type: "smallSpider", count: 6 },
                    { type: "bigSpider", count: 2 },
                    { type: "strongZombie", count: 3 }
                ]
            }
        ]
    }
];

// 导出关卡数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = levels;
} else {
    window.levels = levels;
}
