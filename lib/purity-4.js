const crewScores_bad = {
    'A' : 1, 
    'B':  2,
    'C':  3, 
    'D':  4
};
delete crewScores_bad.D;
console.log(crewScores_bad) // { A: 1, B: 2, C: 3 }




const crewScores_good = {
    'A' : 1, 
    'B': 2,
    'C':  3, 
    'D': 4
};
let { D, ...newCrewScores } = crewScores_good

console.log(newCrewScores) // { A: 1, B: 2, C: 3 }