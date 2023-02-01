// Code your solution here
function findMatching(data, name){
    return data.filter(e => e.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(data, letters){
    return data.filter(e => {
        for (const char in letters){
            if (e[char] !== letters[char]){
                return false;
            }
        }
        return true;
    })
}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(data, name){
    return data.filter(e => {
        if (e.name === name) {
            return true;
        }
        else return false;
    })};