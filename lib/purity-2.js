const randomBetween = (min=0, max=10) => 
    Math.floor(Math.random() * max) + min
console.log(randomBetween(1,5))