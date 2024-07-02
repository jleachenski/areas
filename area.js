const circulo = raio => Math.PI * raio ** 2

const retangulo = function(base, altura) {
    return base * altura
}

function triangulo(base, altura) {
    return base * altura / 2
}

module.exports = { 
    circulo, 
    retangulo, 
    triangulo 
}
