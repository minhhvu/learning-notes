package ultility

/*
	Function value
*/

//FunctionValue return square of the input number
 var FunctionValue = func (n int) int {return n* n}

 //F is to declare a function type value 
 var F func(int) int

 //FunctionAsParameter takes a callback function as the parameter
 func FunctionAsParameter(callback func(int, int) int) int{
	 return callback(5, 5)
 } 