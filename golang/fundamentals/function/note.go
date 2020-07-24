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
}
