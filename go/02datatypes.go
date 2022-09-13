package main

import "fmt"

func main() {
	fmt.Println("Datatypes")
	// declare a variable in go
	// var variable Name datatype
	var score int
	var cityName string
	var check bool
	var lifeline float32
	score = 88
	cityName = "KL"
	check = true
	lifeline = 88.88

	fmt.Println(score)
	fmt.Println(cityName)
	fmt.Println(check)

	fmt.Println("Score:" , score)
	fmt.Println("City Name:" , cityName)
	fmt.Println("Check:" , check)	
	fmt.Println("Lifeline:" , lifeline)	
	fmt.Println("My score is",score,". I live in", cityName)

	// use format specifier
	fmt.Printf("My score is %v. I live in %v \n", score, cityName)
	fmt.Printf("My lifeline is %v. \n", lifeline)

	// %T format specifier -> get datatype of variable.
	fmt.Printf("Datatype of lifeline variable is %T \n", lifeline)

	// auto type inference
	// let go detect the datatype of the variable automatically
	// use :=
	autoScore := 88
	fmt.Printf("My autoScore is %v. \n", lifeline)
	fmt.Printf("Datatype of autoScore variable is %T \n", autoScore)
}