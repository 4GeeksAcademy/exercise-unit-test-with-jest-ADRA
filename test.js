//Importar la función sum del archivo app.js


//Comienza tu primera prueba
test('adds 14 +  9 to equal 23', () => {
    const {sum} = require('./app.js');
    //Dentro de la prueba llamamos a nuestra función sum con 2 números 
    let total = sum(14,9);

    //Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("3.5 euros should be 3.745 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("3.5 dollar should be 511.92 yens", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const dollar = fromDollarToYen(3.5);

    // Si 1 dolar son 1.07, entonces 3.5 yens debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(Number(fromDollarToYen(3.5).toFixed(2))).toBe(511.92); 
})

test("3.5 yen should be 2.85 pounds", function(){
    const { fromYentoPound } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromYentoPound(3.5);

    // Si 1 yen son 145.26 euros, entonces 3.5 yens debe ser (3.5 * 146.26)
    const expected = 3.5 * 146.26;

    expect(Number(fromYentoPound(3.5).toFixed(2))).toBe(2.85);

})