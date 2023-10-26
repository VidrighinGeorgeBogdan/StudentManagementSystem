const getGrade = (id) => {
    return `SELECT * FROM grades WHERE id = '${id}'`;
};
const getGrades = () => {
    return `SELECT * FROM grades`;
};
const insertGrade = (studentID, subjectID, grade) => {
    return `INSERT INTO grades
            (studentID) VALUES ("${studentID}")
            (subjectID) VALUES ("${subjectID}")
            (grade)     VALUES ("${grade}")`;
};
const updateGrade = (id, grade) => {
    return `UPDATE grades
    SET grade = ${grade} WHERE id = ${id}`;
}
const deleteGrade = (id) => {
    return `DELETE FROM grades WHERE id = ${id}`;
}

export {getGrade, getGrades, insertGrade, updateGrade, deleteGrade};