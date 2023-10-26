const insertStudent = (userId) => { return `INSERT INTO students (user_id) values (${userId})`;};
const selectIdOfStudentRole = () => { return `SELECT id FROM user_role WHERE name = 'student'`;};
const setStudentRoleByUserId = (userId) => { return `UPDATE users SET role_id = (${selectIdOfStudentRole()}) WHERE id = ${userId}`;}
const selectStudents = () => { return `SELECT * FROM students s INNER JOIN users u on u.id = s.user_id`;};
const selectStudent = (id) => { return `SELECT * FROM students s INNER JOIN users u on u.id = s.user_id WHERE s.id = ${id}`;};
const selectStudentByUser = (id) => { return `SELECT * FROM students s INNER JOIN users u on u.id = s.user_id WHERE s.user_id = ${id}`;};
export { insertStudent, setStudentRoleByUserId, selectStudents, selectStudent, selectStudentByUser };