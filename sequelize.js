const Sequelize = require('sequelize');

const sequelize = new Sequelize('blog_db','amh','amh123',{
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.sync({ force: true })
            .then(() => {
                console.log(`Database connected `)
            });