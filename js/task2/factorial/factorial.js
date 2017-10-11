var n = prompt('FACTORIAL TASK\nenter a number', 0);

var result = 1;

for (var i=1; i<=n; i++) {
    result = result * i;
};

console.log(n, '!  =', result);

alert('the result is in console');