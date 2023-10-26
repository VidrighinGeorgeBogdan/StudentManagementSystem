import { createDbConnection, query } from "./db.js";
import { checkSenderByEmail, checkSenderById, hashPassword, comparePassword } from "./helper.js";
import { getUserFromEmail, getRoleFromId } from "../database/authetication.js";
async function login(email, password) {
    let connection = await createDbConnection();
    const result = await query(
        getUserFromEmail(email),
        [],
        connection
    );
    if (result.length) {
        const match = await comparePassword(password, result[0].password);
        if (match && result[0].status === "active") {
            return result[0];
        }
    }
    return false;
}

async function checkRole(user, desiredRole) {
    let connection = await createDbConnection();
    const result = await query(
        getRoleFromId(user.role_id),
        [],
        connection
    );
    if (result.length) {
        if (result[0].name === desiredRole) {
            return true;
        }
    }
    return false;
}

export { login, checkRole }