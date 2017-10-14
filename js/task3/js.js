var allArguments = [];

var addArguments = function(...arg){
    if (arg.length){
        for (i=0; i<arg.length; i++) {
            allArguments.push(arg[i]);
        };
    } else {
        console.log(allArguments);
    };
};

addArguments(1,2);
addArguments('hello');
addArguments({a:1}, 'someString');
addArguments();