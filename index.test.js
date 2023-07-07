const lib = require('./index');

test('The function addRandomGradeToCSV should return a string', () => {
    const result = lib.addRandomGradeToCSV('./files/students.csv', 0, 20)
    expect(typeof result).toBe('string');
    expect(result).toBe('The file has been saved');
})

test('The function getAverageGrade should return a number', () => {
    const result = lib.getAverageGrade(0, 20)
    expect(typeof result).toBe('number');
})

