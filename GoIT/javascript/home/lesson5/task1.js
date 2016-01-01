var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

var student, max = 0;
for (var field in tasksCompleted){
    if (tasksCompleted[field] > max){
        max = tasksCompleted[field];
        student = field;
    }
}
console.log(student);