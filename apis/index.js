const APIS = [ "./pageApi", "./restApi" ]

let res = []
APIS.forEach( ( item ) => {
    Array.prototype.push.apply( res, require( item ) );
} )

module.exports = res