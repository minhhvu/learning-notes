package ultility

//FirstTwoElements return the first 2 elements of an array
func FirstTwoElements(arr []int) (int, int) {
	return arr[0], arr[1]
}

//BareFunction equivalent to FirstTwoElements()
func BareFunction(arr []int) (first, second int) {
	first = arr[0]
	second = arr[1]
	return
}
