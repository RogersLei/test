const BaseApi = require( "./baseApi" )

class PageApi extends BaseApi {
    helloworld() {
        console.log( "welcome to index" )
    }
}

const pageApi = new PageApi();

module.exports = [ {
    method: "get",
    route: "/index",
    func: pageApi.helloworld
} ]