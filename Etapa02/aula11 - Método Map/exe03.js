const el = document.getElementsByTagName('div')
const valores = Array.prototype.map.call(el, ({innerHTML}) => innerHTML)

console.log(valores)