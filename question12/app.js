// Task 1: Get Student Name
function getStudent() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1: Student Name Fetched");
            resolve("Rahul");
        }, 1000);
    });
}

// Task 2: Get Student Marks
function getMarks(student) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2: Marks Fetched");
            resolve({
                name: student,
                marks: 85
            });
        }, 1000);
    });
}

// Task 3: Calculate Result
function getResult(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 3: Result Calculated");
            const result = data.marks >= 35 ? "Pass" : "Fail";
            resolve({
                name: data.name,
                marks: data.marks,
                result: result
            });
        }, 1000);
    });
}

// Chained Promises
getStudent()
    .then(getMarks)
    .then(getResult)
    .then((data) => {
        console.log("\nFinal Output");
        console.log("Student:", data.name);
        console.log("Marks:", data.marks);
        console.log("Result:", data.result);
    })
    .catch((err) => {
        console.log("Error:", err);
    });