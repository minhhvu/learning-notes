package main

/*
	Struct  is a collection of fields.
	When a parameter has the type of a struct, it will be passed by value.
	To compare to Javascript, it works like the construction of class
*/

import "fmt"

//Define a struct
type address struct {
	city   string
	nation string
}
type student struct {
	id      int    //field id
	name    string //field name
	address        //embedded struct
}

//Struct with method
func (stu student) updateId(id int){
	stu.id = id
}

//Pass a struct instance to function
func updateName(p student, name string) {
	p.name = name
}

func print(p student) {
	fmt.Printf("%+v\n", p)
}

func (stu *student) updateAddress(newAddress address){
	(*stu).address = newAddress
}

func main() {
	//Declare a variable with the struct type
	minh := student{
		id:   12,
		name: "minh",
	}
	fmt.Println(minh)

	//Update the struct field value
	minh.id = 13
	minh.address = address{
		city:   "toronto",
		nation: "canada",
	}
	print(minh)

	//Struct integrates with method
	minh.updateId(15)			//different syntax to updateName(minh, name)
	print(minh)

	//Pass by value
	updateName(minh, "minh hai")
	print(minh)		//minh.name has not changed 

	//Pass by reference 
	minhRef := &minh		//return the memory address of variable in RAM
	newAdd := address{
		city:   "haiduong",
		nation: "vn",
	}
	minhRef.updateAddress(newAdd)
	minh.updateAddress(newAdd)		//shortcut to the method with pointer
	print(minh)
}
