/*

Please run this, if you cannot run with your node
node_modules/.bin/babel-node --presets stage-2 lib/purity-1.js

*/



'use strict'
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