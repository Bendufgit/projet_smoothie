module.exports = {
    database: process.env.MONGO_URL || 'mongodb://localhost:27017/CleanFood',
    secret: 'mysecret',
}