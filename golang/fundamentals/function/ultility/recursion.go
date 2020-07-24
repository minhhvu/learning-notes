package ultility

//Recusrion in Go

//Fibonaci return a number in the fibonaci series at n th
func Fibonaci(n int) int {
	if n <= 1 {
		return n
	}
	return Fibonaci(n-1) + Fibonaci(n-2)
}
