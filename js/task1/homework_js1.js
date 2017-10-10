console.log("1" + 2 + 0);	// ==> '120'	the first argument is a string so 2 and 0 transform into strings and  the ‘+’ operator adds strings together 
console.log("1" - 1 + 2);	// ==> 2		the ‘-’ operator works with numbers only, so string '1' converts to number 1
console.log(true + false);	// ==> 1		true and false convert to numbers 1 and  0 respectively
console.log(10 / "5");		// ==> 2		the ‘/’ operator works with numbers only, so string ‘5’ converts to number 5
console.log("2" * "3");		// ==> 6		the ‘*’ operator works with numbers only, so strings '2' and '3' convert to numbers 2 and 3 respectively
console.log(4 + 5 + "px");	// ==> '9px'	first two arguments are numbers so operator '+' adds two numbers. the third argument is a string so operator '+' adds strings together
console.log("$" + 4 + 5);	// ==> '$45'	the first argument is a string so the ‘+’ operator adds strings together
console.log("42" - 2);		// ==> 40		the ‘-’ operator works with numbers only, so string '42' converts to number 42
console.log("4px" - 2);		// ==> NaN	    the ‘-’ operator works with numbers only, but "4px" can't be transformed into a number
console.log(7 / 0);		    // ==> Infinity	7/0 works in the same way as in Math, the result of division by 0 is equal to Infinity
console.log("  -9\n" + 5);	// ==> '  -9/n5'the ‘+’ operator  adds strings together
console.log("  -9\n" - 5);	// ==> -14		the ‘-’ operator' works with numbers only, so string "  -9\n" converts to -9 (space symbols are cut, the result -9 is a number)
console.log(5 && 2);		// ==> 2		the ‘&&’ operator returns the first false value or the last one. (numbers 2 and 5 are both true values)
console.log(2 && 5);		// ==> 5		the ‘&&’ operator returns the first false value or the last one. (numbers 2 and 5 are both true values)
console.log(5 || 0);		// ==> 5		the ‘||’ operator returns the first true value or the last one. (number 5 is a true value and the number 0 is a false value)
console.log(0 || 5);		// ==> 5		the ‘||’ operator returns the first true value or the last one. (number 5 is a true value and the number 0 is a false value)
console.log(null + 1);		// ==> 1		when null transforms into a number it becomes 0
console.log(undefined + 1);	// ==> NaN	    when undefined transforms into a number it becomes NaN
console.log(null == "\n0\n");	// ==> false  you should remember that null = = only undefined
console.log(+null == +"\n0\n");	// ==> true	  +null transforms into 0 and the string "\n0\n" transforms into number 0 too (space symbols are cut, the result is 0)