let cart =[
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Monitör", quantity:5, unitPrice:1990},
    {id:3, productName:"Klavye", quantity:2, unitPrice:750},
    {id:4, productName:"Mouse", quantity:3, unitPrice:580},
    {id:5, productName:"MacBook Pro", quantity:1, unitPrice:14000},
]

console.log("<ul>")
cart.map(product=>{
    console.log("<li>" + product.productName + " : " + product.unitPrice * product.quantity + "</li>")
})
console.log("</ul>")

let total = cart.reduce((acc,product)=>acc+ product.unitPrice * product.quantity,0)

console.log(total)

let quantityOver2 = cart.filter(product=>product.quantity>2)

console.log(quantityOver2)


function addToCart(sepet) {
    sepet.push({id:6, productName:"Kulaklık", quantity:1, unitPrice:400})
}

addToCart(cart)

console.log(cart)

let sayi = 10

function sayiTopla(number) {
    number += 1
}
sayiTopla(sayi)
console.log(sayi)
