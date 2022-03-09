const miesmuschelStatements = require('../data/miesmuschelStatements.json');

const getRandomMiesmuschelStatement = () => {
    const miesmuschelStatementsArr = miesmuschelStatements.statements

    return miesmuschelStatementsArr[Math.floor(Math.random()*miesmuschelStatementsArr.length)]
}

module.exports = {
    getRandomMiesmuschelStatement: getRandomMiesmuschelStatement
}