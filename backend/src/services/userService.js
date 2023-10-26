import { createDbConnection, query } from "./db.js";
import { hashPassword } from "./helper.js";
import {checkRole} from './authenticationService.js'
import { deleteaUser, insertUser, selectAllUsers, selectUser, updateUserAsAdmin, updateUserAsUser, getUserRole, getUserRoles, getUserStatus, getUserStatuses} from '../database/users.js'
async function get(id = 0) {
  let connection = await createDbConnection();
  if (id > 0) {
    const data = await query(
      selectUser(id),
      [],
      connection
    );
    return data;
  }
  const data = await query(selectAllUsers, [], connection);

  return data;
}
async function create(data) {
  let user = data.sender;
  let newUser = data.newUser;
  let connection = await createDbConnection();
  let check = await checkRole(user, 'admin');
  if (!check) {
    return check;
  }
  newUser.password = await hashPassword(newUser.password);
  const result = await query(
    insertUser(newUser),
    [],
    connection
  );

  let message = "Error in creating a new user";

  if (result.affectedRows) {
    message = "User created successfully";
  }

  return { message };
}

async function update(id, user) {
  let connection = await createDbConnection();
  const check = await checkSenderByEmail(user, connection);
  let result = "";
  if (check) {
    result = await query(
      updateUserAsUser(id, user),
      [],
      connection
    );
  } else {
    result = await query(
      updateUserAsAdmin(id, user),
      [],
      connection
    );
  }

  let message = "Error in updating a new user";

  if (result.affectedRows) {
    message = "User updated successfully";
  }

  return { message };
}
async function deleteUser(idUserDeleted, idUserDeleting) {
  let connection = await createDbConnection();
  const check = await checkSenderById({ senderId: idUserDeleting }, connection);
  if (check) {
    return check;
  }
  const result = await query(
    deleteaUser(idUserDeleted),
    [],
    connection
  );

  let message = "Error in deleting a new user";

  if (result.affectedRows) {
    message = "User deleted successfully";
  }

  return { message };
}

async function getRole(id = null) {
  let connection = await createDbConnection();
  if (id) {
    const data = await query(
      getUserRole(id),
      [],
      connection
    );
    return data;
  }
  const data = await query(getUserRoles(), [], connection);
  if(data.length) {
    return data;
  }
  return false;
}

async function getStatus(id = null) {
  let connection = await createDbConnection();
  if (id) {
    const data = await query(
      getUserStatus(id),
      [],
      connection
    );
    return data;
  }
  const data = await query(getUserStatuses(), [], connection);
  if(data.length) {
    return data;
  }
  return false;
}

export { get, create, update, deleteUser, getRole, getStatus };
