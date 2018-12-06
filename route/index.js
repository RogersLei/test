const Router = require( "koa-better-router" )
const router = Router().loadMethods()

const apis = require( "../apis" )

apis.forEach( ( {
    method,
    route,
    func
} ) => {
    router.addRoute( method, route, func );
} )

module.exports = router