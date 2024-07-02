const prompt = require("prompt-sync")();
const area = require("./area.js")

const raio = prompt("digite o raio: ")
console.log(area.circulo(raio))

const base = prompt("digite a base: ")
const altura = prompt("digite a altura: ")

const retangulo = area.retangulo(base, altura)
const triangulo = area.triangulo(base, altura)

console.log(`a area do retangulo e: ${retangulo}, e a area do triangulo e: ${triangulo}`)
