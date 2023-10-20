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

function getLearnerData (CourseInfo, AssignmentGroup, LearnerSubmissions) {
    
let scores = []
let total = 0
for (let i=0; i < LearnerSubmissions.length; i++) {
  total += LearnerSubmissions[i].submission.score
     scores.push(LearnerSubmissions[i].submission.score) 
}
// console.log(scores)
console.log(scores)
console.log(total)
console.log(total / scores.length)
}

getLearnerData (CourseInfo, AssignmentGroup, LearnerSubmissions)


// finding the average score of 1 student 


//  function getLearnerID (AssignmentGroup)
// for (let i=0; i < LearnerSubmissions.length; i++){
// }

// for  {use this to then grab something from another subsections 



// if student passed in assignment on time // works!

// function getLearnerData (CourseInfo, AssignmentGroup, LearnerSubmissions) {


let submitted_at = (CourseInfo, AssignmentGroup, LearnerSubmissions)
let arr1 = []
for (let i=0; i <= getLearnerData.filter; i++){
     LearnerSubmissions = submission.submitted_at
}
     console.log("submitted on time")

// for loop to show all submissions and assignments from learner

function arr([LearnerSubmissions]) {

}
for (let i=0; i< arr.length; i++){
    if (arr === 50) {
       let submission = (LearnerSubmissions[i]);
    }
}
console.log(arr.length)
console.log(LearnerSubmissions)

arr([LearnerSubmissions])
// removing the last 2 grade

function removeLastGrade () {
  let removeLastGrade = [LearnerSubmissions]
} const removed = LearnerSubmissions.splice(2,2)

console.log(removed);
console.log(LearnerSubmissions.length)
console.log(LearnerSubmissions)

// using shift to remove the first string in the array

function removedSubmissionList () {
  let removedList = [LearnerSubmissions]
}
let value = [LearnerSubmissions].pop ();
console.log(value)


// i wanted it to list the remaining assignments but its not, its only listing the first one again

function removedAssignmentList () {
  let removedList = [AssignmentGroup]
}
let values = [AssignmentGroup].reverse ();
console.log(value)


// get the average assignment from each student assignemnt 1

function passedInAssignments () {
  let arr = [LearnerSubmissions]
}
for (let i=0; i <= LearnerSubmissions.filter; i++)
Array = [LearnerSubmissions.filter(learner_id)] 
if (arr <= 3) {
  console.log("true")
} else {
  console.log("false")

}

// get the higher schore

function passingGrade () {
  let arr4 = [LearnerSubmissions]
}
for (let i=0; i <= LearnerSubmissions.filter; i++)
Array1 = [LearnerSubmissions.filter()] 
if (arr4 = 140) {
console.log("Passing Grade")
} if(arry = 150) {
}console.log("Passing Grade")
if (arrayy = 130) {
}
console.log("")
// list out assignments 

function allCourses (assignments) {
  let allCourses = []
// for (let i=0; i < AssignmentGroup.filter; i++)
for (const id in AssignmentGroup) {
    allCourses.push(assignments[id]["name"]);
}

}
console.log(AssignmentGroup)
// ///////

// function allClasses(assignments) {
//   }try {
//     let allClasses =[];

//     for(const course_id in assignments) {
//       allClasses.push(assignments[id]["name"])
//   } catch {
//     console.log(allClasses.join());
// } try (error) 
// }

// console.error("An error has happned") 
