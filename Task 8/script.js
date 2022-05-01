/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

//  arrow funcion yra ES6 standartas..

function Calculator(x, y) {
    this.x = x;
    this.y = y;
    this.sum = function () {
        let suma = this.x + this.y;
        return suma;
    }
    this.subtraction = function () {
        let sub = this.x - this.y;
        return sub;
    }
    this.multiplication = function () {
        let multi = this.x * this.y;
        return multi;
    }
    this.division = function () {
        let div = this.x / this.y;
        return div;
    }
}

let test = new Calculator(6, 2);

console.log(test.sum());
console.log(test.subtraction());
console.log(test.multiplication());
console.log(test.division());