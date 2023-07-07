const fs = require('fs');

function addRandomGradeToCSV(file, min, max) {
    const data = fs.readFileSync(file, 'utf8');
    const lines = data.split('\n');
    if (lines[lines.length - 1].includes('Average')) {
        lines.pop();
    }
    let totalOfGrades = 0;
    let countOfGrades = 0;

    for (let i = 1; i < lines.length; i++) {
        const studentData = lines[i].split(';');
        const randomGrade = Math.round((Math.random() * (max + 1 - min) + min) * 100) / 100;

        studentData[3] = randomGrade.toString();

        totalOfGrades += randomGrade;
        countOfGrades++;

        lines[i] = studentData.join(';');
    }
    const averageGrade = getAverageGrade(totalOfGrades, countOfGrades);
    const modifiedData = lines.join('\n') + `\nAverage Grade: ${averageGrade}`;
    try {
        fs.writeFileSync(file, modifiedData, 'utf8');
        return 'The file has been saved';
    } catch (err) {
        return 'Error writing file'
    }
}

function getAverageGrade(totalOfGrades, countOfGrades) {
    return Math.round((totalOfGrades / countOfGrades) * 100) / 100;
}

module.exports.addRandomGradeToCSV = addRandomGradeToCSV;
module.exports.getAverageGrade = getAverageGrade;