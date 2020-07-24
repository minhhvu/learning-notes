/*
	Elements of Go program
	- keywords
	- declaration
	- variable
	- assignments
	- type declarations
	- packages and files
	- scope
*/

package main

import "fmt"

func main() {
	//Variable
	// var a, c, d int
	// var b, f, s = true, 2.3, "four"
	// var f, err = os.Open(name)
	// t := 3 //short variable declaration
	// i, j := 1, 2

	//Pointer
	x := 1
	p := &x //type *int, points to x
	fmt.Println("x = ", x)
	fmt.Println("p = ", p)
	fmt.Println("*p = ", *p)
	fmt.Println("*&x = ", *&x)


	//Assignment
	num := 1
	num += 2	//assignment operator +
	num++		//same as num += 1
	num--		//same as num -= 1
	x, y := 4, 5	//tuple assignment
	x, y = y, x		//swap x and y
	myArr := []int{3, 4, 1}		//same as myArr[0], myArr[1], myArr[2] = 3, 4, 1
 	myArr[0] = 4


}
