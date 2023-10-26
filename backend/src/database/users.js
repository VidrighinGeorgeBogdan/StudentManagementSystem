const selectUser = (id) => {
  return `SELECT * FROM users WHERE id = ${id}`;
};
const selectAllUsers = () => {
  return `SELECT * FROM users`;
};
const insertUser = (user) => {
  return `INSERT INTO users 
(email, first_name, last_name, password, role_id, status_id) 
VALUES 
("${user.email}", "${user.first_name}", "${user.last_name}", "${user.password}", "${user.role_id}", "${user.status_id}")`;
};
const updateUserAsAdmin = (id, user) => {
    return `UPDATE users
    SET email = "${user.email}", first_name = "${user.first_name}", 
    last_name = "${user.last_name}",
    role_id = ${user.role_id}, status_id=${user.status_id} WHERE id = ${id}`;
};
const updateUserAsUser = (id, user) => {
    return `UPDATE users
      SET email = "${user.email}", first_name = ${user.first_name},  last_name = ${user.last_name}, 
      WHERE id = ${id}`;
};
const deleteaUser = (id) => {
    return `DELETE FROM users WHERE id = ${id}`;
};
const getUserRole = (id) => {
    return `SELECT * FROM user_role WHERE id = ${id}`;
}
const getUserRoles = () => {
    return `SELECT * FROM user_role`;
}
const getUserStatus = (id) => {
    return `SELECT * FROM user_status WHERE id = ${id}`;
}
const getUserStatuses = () => {
    return `SELECT * FROM user_status`;
}
export { selectUser, selectAllUsers, insertUser, updateUserAsAdmin, updateUserAsUser, deleteaUser, getUserRole, getUserRoles, getUserStatus, getUserStatuses };
