const items = [
	'1',
	'2',
	'3'
];

// Not So Good (splice, push)
items.splice(0, 1); // ['2', '3']
items.push('4'); // ['2', '3', '4']
console.log(items)

const products = [
	'1',
	'2',
	'3'
]

// Good
const goodProducts = products
						.slice(1)
						.concat('4')
console.log(goodProducts) // [ '2', '3', '4' ]


// Better 
const betterProducts = [...products, '4'].slice(1)
console.log(betterProducts)