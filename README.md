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


