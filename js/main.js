/*
 *
 * TASK 1
 *
 * Создайте функцию которая будет запоминать переданные ей аргументы,
 * и прибавлять их в строку
 * и отображать в консоле всю строку
 *
 * */

function solution1() {
    var str = '';
    return function (arg) {
        str = str + ' ' + arg;
        return str;
    }
}

let stringBuffer = solution1();

console.log(stringBuffer('Замыкания')); //Замыкания
console.log(stringBuffer('Использовать нужно')); // Замыкания Использовать нужно
console.log(stringBuffer('ПРивет')); // Замыкания Использовать нужно ПРивет

/*
 *
 * TASK 2
 * Напишите функцию которая принимает в качестве аргумента строку из скобочек и посчитайте,
 * что все скобочки закрываются корректно
 *
 * */
// validBraces( "(){}[]" ); //=> returns true
// validBraces( "(}" ); //=> returns false
// validBraces( "[(])" );// => returns false
// validBraces( "([{}])" ); //=> returns true

/*
 *
 * TASK 3
 * Напишите функцию которая будет принимать 1 аргумента - функцию,
 * Отрефакторите код таким образом, чтобы сообщение 'THE LAST LAST comment',
 * отобразилось в консоле последним
 *
 * */

function makeCallback(fn) {
    for (let i = 1; i <= 10; i++) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000)
    }
    fn()
}

makeCallback(function() {
    console.log('THE LAST LAST comment')
});

// @SUPER

/*
 *
 * Напишите функцию которая будет принимать одно число и выводить сумму всех натуральных чисел
 * sum(5) //5+4+3+2+1
 * Вычисления должны кешироваться, если в функцию попадает закешированное значение, в консоле должно отобразиться
 * Значение взято из кэша
 *
 * */
function accept () {
    var cache = {};
    var sum1 = 0;
    return function (numb) {
        if (cache[numb]) {
            return cache[numb] + ' Значение взято из кэша';
        }
        for (var i = 1; i <= numb; i++) {
            sum1 = sum1 + i;
        }
        cache[numb] = sum1;
        return cache[numb] + ' Кэшировано'
    }
}
var sum = accept();
console.log(sum(5)); // 15 Значение кешировано
console.log(sum(5)); // 15 Значение взято из кэша
console.log(sum(6)); // 21 Кешировано
console.log(sum(6)); // 21 Значение взято из кэша
