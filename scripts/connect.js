import Redis from "ioredis"

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  username: process.env.REDIS_USER,
  password: process.env.REDIS_PASS,
  db: process.env.REDIS_BASE,
});

const redis2 = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  username: process.env.REDIS_USER,
  password: process.env.REDIS_PASS,
  db: process.env.REDIS_BASE,
});

redis.on("connect", () => {
  console.log("redise baglandim")
})

redis2.on("connect", () => {
  console.log("redis2e baglandim")
})

export default { redis, redis2 }