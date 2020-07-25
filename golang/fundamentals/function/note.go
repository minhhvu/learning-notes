/*
	Function
	- declaration
	- recursion
	- multiple return value
	- Errors
	- Function Values
	- anonymous function
	- variadic function
	- deferred function calls
	- panic
	- recover
*/

package main

import (
	"fmt"

	"./ultility"
)


func main() {
	//Function declaration
	fmt.Println("3 + 4 =", ultility.Add(3, 4))
	fmt.Println("3 - 4 =", ultility.Sub(3, 4))

	//Recursion function
	fmt.Println("fibonaci at n = 10:\n", ultility.Fibonaci(10))

	//Multiple return values
	a, b := ultility.FirstTwoElements([]int{2, 3, 5})
	fmt.Println(a, b)

	//Function value 
	fmt.Println(ultility.FunctionValue(5)) 	//assigned a function to the variable
	fmt.Println(ultility.F == nil)		//declared function without clarifying 
	multiple := func (a, b int) int {
		return a*b
	}
	fmt.Println(ultility.FunctionAsParameter(multiple))

	//Anonymous function 
	anonymousF := ultility.Counter;
	fmt.Println(anonymousF())	//return 2
	fmt.Println(anonymousF())	//return 3
	fmt.Println(anonymousF())	//return 4
}
