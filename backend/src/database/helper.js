const checkSenderByEmailQuerry = (senderEmail) => { return `SELECT r.name FROM users u inner join user_role r on r.id = u.role_id WHERE u.email = '${senderEmail}'`;};
const checkSenderByIdQuerry = (senderId) => { return `SELECT r.name FROM users u inner join user_role r on r.id = u.role_id WHERE u.id = '${senderId}'`;}
export {checkSenderByEmailQuerry, checkSenderByIdQuerry};