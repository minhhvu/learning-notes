package main

/*
	Map in Go is a reference to a hash table, that has structure of map[K]V
	with K is the type of keys, and V is the type of values. K and V can be different.
	--> reference value
*/

import "fmt"

func main() {
	//Declare function
	colors := make(map[string]string)
	fmt.Println(colors)
	var table map[int]string		//after that, to modify it, the map has to be maked in line 23
	fmt.Println(table)
	elements := map[string]string{
		"p": "paragraph",
		"div": "division", 
	}

	//Access to the map
	table = make(map[int]string)
	table[1] = "hello world"
	colors["red"] = "#f3412"
	for key, value := range elements {
		fmt.Println(key, value)
	}

	//Delete map property
	delete(table, 1)
	fmt.Println(table)
}