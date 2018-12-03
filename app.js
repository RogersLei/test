const koa = require( "koa" )

const app = new koa()

const env = app.env

app.use ( async ( ctx, next ) => {
    console.log( ctx )
} )

app.listen( 8888, () => {
    console.log( "server listen on 8888" )
} )

console.log( env )