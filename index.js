function init() {
Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/e/2PACX-1vRiBnxiSIY6Tit9vO10d6mlVp8hmrOF06lmZjpSQvx-BLTzZ3468fpAHRA4zlQhpcuOH43v5rEfKmWF/pubhtml',
callback: function(data, tabletop) {
console.log(data)
},
simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
