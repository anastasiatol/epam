var addArguments = function(){
    var allArguments = [];
    return function(...arg){
        if (arg.length){
            for (var i=0; i<arg.length; i++) {
                allArguments.push(arg[i]);
            };
        } else {
            console.log(allArguments);
        };
    };
};

var collectArguments = addArguments();
collectArguments(1,2);
collectArguments('hello');
collectArguments({a:1}, 'someString');
collectArguments();