const log4js = require( "log4js" );
const options = {
    appenders: {
        out: {
            type: "stdout",
            layout: {
                type: "pattern",
                pattern: "%[[%x{reqid}] [%d{ISO8601_WITH_TZ_OFFSET}] [%p] [%x{user}]%] %m%n",
                tokens: {
                    reqid( logEvent ) {
                        return logEvent.context.reqid || ""
                    },
                    user( logEvent ) {
                        return logEvent.context.user || ""
                    }
                }
            }
        }
    },
    categories: {
        default: {
            appenders: [ "out" ],
            level: "info"
        }
    }
}
log4js.configure( options );

var logger = log4js.getLogger( "out" );

module.exports = logger;