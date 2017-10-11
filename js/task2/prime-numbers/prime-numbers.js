var n = prompt('PRIME NUMBERS TASK\n\nenter a number', 0);

var prime = [];

    for (var i=2; prime.length < n ; i++) {
        prime.push(i);
        for (var j=2; j<i; j++) {
            if (i % j == 0) {
                prime.pop();
                break;
            };
        };
    };

console.log('first ',n, ' prime numbers are' , prime);
alert('the result is in console');