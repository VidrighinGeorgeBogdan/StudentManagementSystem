const insertProfessor = (userId) => { return `INSERT INTO professor (user_id) values (${userId})`;};
const selectIdOfProfessorRole = () => { return `SELECT id FROM user_role WHERE name = 'professor'`;};
const setProfessorRoleByUserId = (userId) => { return `UPDATE users SET role_id = (${selectIdOfProfessorRole()}) WHERE id = ${userId}`;}
const selectProfessors = () => { return `SELECT * FROM professor p INNER JOIN users u on u.id = p.user_id`;};
const selectProfessor = (id) => { return `SELECT * FROM professor p INNER JOIN users u on u.id = p.user_id WHERE p.id = ${id}`;};
const selectProfessorByUserId = (userId) => { return `SELECT * FROM professor p INNER JOIN users u on u.id = p.user_id WHERE p.user_id = ${userId}`;};
export { insertProfessor, setProfessorRoleByUserId, selectProfessors, selectProfessor, selectProfessorByUserId };