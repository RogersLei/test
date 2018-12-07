const koa = require( "koa" ),
  logger = require( "./logger" ),
  router = require( "./route" )

const app = new koa()

app.use ( async ( ctx, next ) => {
  console.log ( ctx.request.path )
} )


app.use( router.middleware() );

app.listen( 8888, () => {
  logger.info( "server listen on 8888" )
} )

// 设置定时任务