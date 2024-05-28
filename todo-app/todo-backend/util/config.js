const REDIS_URL = process.env.NODE_ENV === 'test'
  ? process.env.TEST_REDIS_URL
  : process.env.REDIS_URL

const MONGO_URL = process.env.NODE_ENV === 'test'
  ? process.env.TEST_MONGO_URL
  : process.env.MONGO_URL

module.exports = {
  MONGO_URL,
  REDIS_URL
}