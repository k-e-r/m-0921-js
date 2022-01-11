// 1. Create an array - students, insert four items, which should be objects and have three properties: name, score1, score2
// with the following values:
// a. John, 47, 46
// b. Bob, 23, 24
// c. Nick, 40, 35
// d. Alex, 44, 45

let students = [
  {
    name: "John",
    score1: 47,
    score2: 46,
  },
  {
    name: "Bob",
    score1: 23,
    score2: 24,
  },
  {
    name: "Nick",
    score1: 40,
    score2: 35,
  },
  {
    name: "Alex",
    score1: 44,
    score2: 45,
  },
];

// 2. Suppose that, students have chance to get different degrees of diploma, like A, B, C, D, E and those degrees are relevant to the following passing limits 91, 81, 71, 61, 51.
//  According to that, create two arrays for passing limits and for degrees.

let degreesArr = [
  {
    degree: "A",
    pass: 91,
  },
  {
    degree: "B",
    pass: 81,
  },
  {
    degree: "C",
    pass: 71,
  },
  {
    degree: "D",
    pass: 61,
  },
  {
    degree: "E",
    pass: 51,
  },
  {
    degree: "none",
    pass: 0,
  },
];

// 3. Create function which will calculate total score (score1 + score2) for each students.

function total(score1, score2) {
  return score1 + score2;
}

// 4. Create function and use in it for loops, if else statements and whatever you need, in order to figure out, which student has passed an exam and what kind of degree he has got.

function checkDegree(students) {
  for (let student of students) {
    student.totalScore = total(student.score1, student.score2);
    for (let i = degreesArr.length - 1; i >= 0; i--) {
      if (student.totalScore > degreesArr[i].pass) {
        student.degree = degreesArr[i].degree;
      }
    }
  }
}

// 5. Display the final result in console.
checkDegree(students);
for (let student of students) {
  console.log(student.name + "'s degree is " + student.degree);
}
