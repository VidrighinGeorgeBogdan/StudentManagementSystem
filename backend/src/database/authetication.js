const getRoleFromId = (role_id) => {
  return `SELECT * FROM user_role WHERE id = "${role_id}"`;
};
const getUserFromEmail = (email) => {
  return `SELECT *, ur.name as 'role', us.name as 'status' FROM users u 
  inner join user_role ur on ur.id = u.role_id
  inner join user_status us on us.id = u.status_id
  WHERE email = "${email}"`;
};

export { getUserFromEmail, getRoleFromId };
