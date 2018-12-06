const BaseApi = require( "./baseApi" )

class RestApi extends BaseApi {
    rest() {
        console.log( "rest" )
    }
}

const restApi = new RestApi();
module.exports = [ {
    method: "get",
    route: "/rest",
    func: restApi.rest
} ]