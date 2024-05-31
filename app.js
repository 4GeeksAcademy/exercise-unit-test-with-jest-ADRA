let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
}
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    // Retornamos el valor en dólares
    return valueInDollar;
}
//console.log(fromEuroToDollar(1))
//Esta es mi función que suma dos números
const sum = (a,b) => {
    return a+b
};

//Solo un registro en consola para nosotros
//console.log(sum(7,3));

//Exporta la función para usarla en otros archivos 
//(similar a la palabra clave "exporta cuando se usa webpack")

const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs["USD"];
    let valueInYen = valueInEuro * oneEuroIs["JPY"];
    return valueInYen;
}

const fromYentoPound = (valueInDollar) =>{
    let valueInEuro = valueInDollar / oneEuroIs["USD"];
    let valueInPound = valueInEuro * oneEuroIs["GBP"];
    return valueInPound;
}
console.log(fromYentoPound(3.5));




module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYentoPound};