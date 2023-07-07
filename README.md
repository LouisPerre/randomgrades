## Information
Give my function a CSV file containing student information and it will give, for each student, a random grade.

- [Installation](#-installation-)
- [Usage](#-usage-)
- [How does that work](#-how-does-that-work--)
- [Local development](#-local-development-)
- [License](#-license-)

# 🔥 Installation 🔥
```
npm i randomgrades
```

# ⚙️ Usage ⚙️
```js

import {addRandomGradeToCSV} from "randomgrades";
const result = addRandomGradeToCSV("path/to/file.csv", 0, 20);

```

## ✨ How does that work ? ✨
The function take three parameters, a path to a csv file, the minimum grade and the maximum grade. <br>
**Here is an example of a csv file :** <br>

| Student_pk  | Nom | Prenom   | Note | Commentaire |
|-------------|-----|----------|------|-------------|
| 12312321312 | DOE | John     |      |             |
| 12312321313 | DOE | Maria    |      |             |
| 12312321314 | DOE | Jane     |      |             |
| 12312321315 | DOE | John 2   |      |             |
| 12312321316 | DOE | Mariasse |      |             |

When the function is started it will read the csv file and create an array with each line of the file. <br>
```js
const data = fs.readFileSync(file, 'utf8');
const lines = data.split('\n');
if (lines[lines.length - 1].includes('Average')) {
    lines.pop();
}
```
After that it will create a random grade for each line and add it to the array. <br>
```js
for (let i = 1; i < lines.length; i++) {
        const studentData = lines[i].split(';');
        const randomGrade = Math.round((Math.random() * (max + 1 - min) + min) * 100) / 100;

        studentData[3] = randomGrade.toString();

        totalOfGrades += randomGrade;
        countOfGrades++;

        lines[i] = studentData.join(';');
    }
```
Then it will add at the end of the document the average of all the grades. <br>
```js
const averageGrade = getAverageGrade(totalOfGrades, countOfGrades);
const modifiedData = lines.join('\n') + `\nAverage Grade: ${averageGrade}`;
```
Finally it will create a new csv file with the new array. <br>
```js
try {
    fs.writeFileSync(file, modifiedData, 'utf8');
    return 'The file has been saved';
} catch (err) {
    return 'Error writing file'
}
```

## 🔧 Local development 🔧

```bash
# Install the dependencies
npm i
```

```bash
# Test the type of all the project
npx eslint index.js
```

```bash
# Execute all the test
npm test
```


# 📝 License 📝

Licensed under the terms of the MIT License.