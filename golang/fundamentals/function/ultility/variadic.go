package ultility

/*
	Variadic function
	The function is called with varying numbers of arguments, like fmt.Println()
	Use ... 
*/
//VariadicFunction takes any numbers of agrument and turn the sum of these numbers
func VariadicFunction(nums ...int) int {
	total:=0
	for _, num := range nums {
		total += num
	}
	return total
}



