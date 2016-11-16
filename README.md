# Functional Programming 


## SIGNS OF IMPURITY 


> Mutated Arguments


```javascript
const team = {
	'kid-1':'ck',
	'kid-2':'ken'
}

// Inpure
const addToTeam = (title, name) => (team) => {
	team[title] = name
	return team
}
addToTeam('kid-3', 'cw')(team)
console.log(team) 
// team has been mutated
// { 'kid-1': 'ck', 'kid-2': 'ken', 'kid-3': 'cw' }


// Pure
const addToTeamPure = (name='', role='') => (team={}) => ({...team,[name]: role})
const complete = addToTeamPure('kid-3', 'cw')(team)
console.log(complete)
// { 'kid-1': 'ck', 'kid-2': 'ken', 'kid-3': 'cw' }
```


> Referential Transparency


```javascript 
// Inpure
const randomBetween = (min=0, max=10) => 
    Math.floor(Math.random() * max) + min
console.log(randomBetween(1,5)) // 1 or 2 or 3 ... or 5
```


> Immunibility

```javascript
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
```



> Spread Operator

```javascript
// Not So Good
const crewScores_bad = {
    'A' : 1, 
    'B':  2,
    'C':  3, 
    'D':  4
};
delete crewScores_bad.D;
console.log(crewScores_bad) // { A: 1, B: 2, C: 3 }

// Better
const crewScores_good = {
    'A' : 1, 
    'B': 2,
    'C':  3, 
    'D': 4
};
let { D, ...newCrewScores } = crewScores_good

console.log(newCrewScores) // { A: 1, B: 2, C: 3 }

```


## Extra Link


> [functional-javascript-currying](https://github.com/CHAOWEICHIU/functional-javascript-currying)


> [functional_javaScript_composition_1](https://github.com/CHAOWEICHIU/functional_javaScript_composition_1)


> [functional_javaScript_composition_2](https://github.com/CHAOWEICHIU/functional_javaScript_composition_1)


> [functional-javascript-purity](https://github.com/CHAOWEICHIU/functional-javascript-purity)



> [Custom Real World Functions](https://github.com/CHAOWEICHIU/ccw-custom-functions)

```javascript
decimalPlaces('.05') 	  		 // return 2
toTitleCase('hoW aRe yOU') 		 // return 'How Are You'
truncateString("how are you", 5) // return how a ...
validZipcode('48326')   		 // return true
// More ...
```

## My Work

### [Food Recipes Application](https://github.com/CHAOWEICHIU/favorite-food-recipe)

>It is an application where has all recipes around the world. You would be able to see what ingredient that you need, what steps that you need to take in order to make the dish.




## About me

> :fire: Full Stack Web Developer

I am a freelance full-stack web developer, and I get so 
excited whenever there is a chance that I can challenge
myself and become a better software developer.


> :fire: Test Enthusiastic

Few months age, I have exposed to TDD(test-driven development) way
of writing a software. Since then, I have fallen in love with that.
I was inspired by [MPJ](https://www.youtube.com/watch?v=TWBDa5dqrl8)
and [his video](https://www.youtube.com/watch?v=vqAaMVoKz1c)


> :fire: Reusable Code

:heart: Code that can be repeatedly used with little effort

:heart: Code that can be tested easily

:heart: Code that can express themself


------------------------------------------


