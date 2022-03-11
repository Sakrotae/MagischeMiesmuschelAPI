const miesmuschelStatements = require('../data/miesmuschelStatements.json');

/*
    Funktion um random ein Statement der magischen Miesmuschel auszuwählen
*/
const getRandomMiesmuschelStatement = () => {
    const miesmuschelStatementsArr = miesmuschelStatements.statements

    return miesmuschelStatementsArr[Math.floor(Math.random()*miesmuschelStatementsArr.length)]
}

module.exports = {
    getRandomMiesmuschelStatement: getRandomMiesmuschelStatement
}