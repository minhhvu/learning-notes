/*
	package
	- definition
	- package clause
	- create a package
	- package scope
	- varible initialization in package
	- init func
	- package alias

	ref:
	https://medium.com/rungo/everything-you-need-to-know-about-packages-in-go-b8bac62b74cc
	https://golang.org/ref/spec#Packages
*/

/*
	Package Introduction
	Package is contructed by one or many Go source file with the same package name.
	Each package is to declare constants, types, variables and functions belonging to the package.
	All elements of a packages are accessible in all files. Those elements can be exported and used
	in another package.
	2 types of packages:
	- executable package: has one main(). It will turn out an .exe file after go build.
	- utility package: has no main(). It works like a library.
*/

//Create a package, named greet
package main

//Import another package
import "fmt"

//Initialization
var sum = GetSum()

const (
	Number1 = 10
	Number2 = 20
)

func GetSum() int { return Number1 + Number2 }

//Make the package as executable
func main() {
	fmt.Println(sum)
}
