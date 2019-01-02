const deps = [ "monitor.js", "report.js" ]

let API = []

deps.forEach( item => {
  Array.prototype.push.apply( API, require( item ) );
} )

console.log( deps )

module.exports = API