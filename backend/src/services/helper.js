import { createDbConnection, query } from "./db.js";
import { checkSenderByEmailQuerry, checkSenderByIdQuerry } from "../database/helper.js";
import bcrypt from "bcrypt"
async function checkSenderByEmail(user, connection) {
  const senderRole = await query(
    checkSenderByEmailQuerry(user.senderEmail),
    [],
    connection
  );
  if (senderRole[0].name !== "admin") {
    return { message: "You are not authorized" };
  }
}
async function checkSenderById(user, connection) {
  const senderRole = await query(
    checkSenderByIdQuerry(user.senderId),
    [],
    connection
  );
  if (senderRole[0].name !== "admin") {
    return { message: "You are not authorized" };
  }
}

async function hashPassword(plaintextPassword) {
  const hash = await bcrypt.hash(plaintextPassword, 10);
  return hash;
}
// compare password
async function comparePassword(plaintextPassword, hash) {
  const result = await bcrypt.compare(plaintextPassword, hash);
  return result;
}
export { checkSenderByEmail, checkSenderById, hashPassword, comparePassword };
