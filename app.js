// javaScript object notation 
// JSON 
const user = {name:'Sabuj Mahonto', id:22, job:'student', location:'Dhaka Bangladesh'}

const stringified = JSON.stringify(user)
// console.log(user)
// console.log(stringified)

const shop = {
    name:'Super Shop',
    location:'Mirpur 1',
    product : ['laptop', 'keyboard', 'headphone', 'camera'],
    price: [222, 44, 555, 66, ],
    owner: {
        name:'alia vat',
        age: 30,
    }
}

const shopStringified = JSON.stringify(shop)
// console.log(shop.owner)
// console.log(shop.product)
console.log(shopStringified)

const convertObj = JSON.parse(shopStringified);
console.log(convertObj .product)


