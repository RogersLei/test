const koa = require( "koa" ),
    logger = require( "./logger" )

const app = new koa()

app.use ( async ( ctx, next ) => {
} )

app.listen( 8888, () => {
    logger.info( "server listen on 8888" )
} )