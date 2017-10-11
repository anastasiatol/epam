var n = prompt('FIBONACCI TASK\n\nenter a number', 1);

var fibonacci = [];

fibonacci[0] = 0;
fibonacci[1] = 1;

if (n == 1){
    console.log('the first number in fibonacci raw is 0');
} else {
    for (var i=2; i<n; i++) {
    fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
    };
    console.log('first ', n, ' numbers in fibonacci raw are ', fibonacci);
};

alert('the result is in console');