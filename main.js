// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];

// --------------- solution --------------\\


// finding the average score of all data 

function getLearnerData (LearnerSubmissions = points_possible * 100) {
    
}
let score = 0
for (let i=0; i < getLearnerData.length; i++) {
    let score = getLearnerData(i)
    score += LearnerSubmissions
}
score = score % LearnerSubmissions * 100
console.log(score)

// turns out to be NaN , not sure what i did incorrectly 


// if student passed in assignment on time // works!

function getLearnerData (submitted_at) {

}
let submitted_at = ("")
for (let i=0; i <= getLearnerData.filter; i++){
    let LearnerSubmissions = submitted_at(i)
   
}
     console.log("submitted on time")

// for loop to show all submissions and assignments from learner

function arr([LearnerSubmissions]) {

}
for (let i=0; i< arr.length; i++){
    if (arr !== "50") {
       let submission = (LearnerSubmissions[i]);
    }
}
console.log(arr.length)
console.log(LearnerSubmissions)


// removing the last grade

