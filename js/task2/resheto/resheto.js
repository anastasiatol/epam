var n = prompt('ЗАДАНИЕ: вывести все простые числа, не превышающие введенное число. \n Ведите число:', 10);

var prime = [];

for (var i=2; i<+n+1; i++) {
  if (prime[i]!=0) {
      prime[i] = 1;
      for (var j=i*2; j<+n+1; j=j+i){
          prime[j] = 0;
      };
  };  
};

for (i=2; i<+n+1; i++) {
    if (prime[i]==1) {
        console.log(i);
    };
};

alert('Результат в консоли');