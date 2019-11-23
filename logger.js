//A very basic logger in javascript

//Minified
var logger = function(o,e){return function(n){var t={};return o.forEach(o=>{t[o.toLowerCase()]=function(e){console.log(`[${(new Date).toLocaleString()}] [${o.toUpperCase()}] [${n}] ${e}`)},e.includes(o.toUpperCase())||(t[o.toLowerCase()]=function(o){})}),t}}

//Expanded
function logger(ll, ell) {
    return function (source) {
        var re = {}
        ll.forEach(r => {
            re[r.toLowerCase()] = function (m) { console.log(`[${new Date().toLocaleString()}] [${r.toUpperCase()}] [${source}] ${m}`) }
            if (!ell.includes(r.toUpperCase())) re[r.toLowerCase()] = function (m) { }
        })
        return re
    }
}

//Usage
var x = logger(
  ["DEBUG","INFO","WARNING","ERROR"],  // Set your different log levels
  ["INFO","WARNING","ERROR"]           // Set what log levels to display
)

var y = x("app")                       // Set the "source" of your messages
y.info("Running on port 443")          // Log to the INFO channel
y.error("someone broke it :<")         // Log to the ERROR channel
