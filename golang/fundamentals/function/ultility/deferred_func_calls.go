package ultility

import "fmt"

/*
	Deferred Function calls
	- use defer keywords
	- the defer defer statement delays the execution of a function call untill right before the return function
*/

func DeferredFunctionCall() {	//order of execution
	defer fmt.Println(0)		//3
	defer fmt.Println(1)		//2

	fmt.Printf("hello\n")		//1
	
	if true {					
		return					//4
	}

	defer fmt.Println(2)
}

