module.exports = {
    apps : [ {
        name: "API",
        script: "app.js",
        output: "./logs/out.log",
        error: "./logs/error.log",
        log_date_format: "YYYY-MM-DD",
        // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
        env: {
            NODE_ENV: "development"
        },
        env_production: {
            NODE_ENV: "production"
        }
    } ]
};
