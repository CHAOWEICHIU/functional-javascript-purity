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