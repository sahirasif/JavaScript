function  discount(total_price,discount_percent){
    discount_in_numbers = (total_price*discount_in_numbers)/100
    return total_price- discount_in_numbers
}
s= discount(1000,2)
console.log(s)