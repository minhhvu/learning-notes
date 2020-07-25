package ultility

/*
	Anonymous functions
	- A function declaration without a name following the func keyword.
	- Have access to the entire lexical enviroment. In other words, the anonymous function has states
*/

func count() func() int {
	count := 1		//lexical variable 
	return func() int {
		count++
		return count
	}
}

//Counter is to increase by one after each call.
var Counter = count();
