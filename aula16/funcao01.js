function parimpar(num) {
    if (num % 2 == 0) {
        return 'Par!';
    } else {
        return 'Ímpar';
    }
}

let res = parimpar(273);
console.log(res);