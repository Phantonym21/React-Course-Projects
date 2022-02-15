const College = {
    students : 430,
    faculty: 50,
    staff: 50,
};

console.log(College);

const { students: s , faculty , staff } = College;
console.log(s);
