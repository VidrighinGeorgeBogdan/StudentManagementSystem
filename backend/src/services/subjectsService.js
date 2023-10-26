import { createDbConnection, query } from "./db.js";
import { getSubject, getSubjects, insertSubject, updateSubject, deleteSubject} from "../database/subjects.js";
import { checkRole } from "../services/authenticationService.js"

const get = async (id = null) => {
    try {
        await createDbConnection();
        if (id) {
            return await query(getSubject(id));
        } else {
            return await query(getSubjects());
        }
    } catch (err) {
        console.error(`Error while getting subjects `, err.message);
        throw err;
    }
};
async function create(name, user) {
    if (checkRole(user, "admin")) {
        let connection = await createDbConnection();
        const result = await query(
            insertSubject(name),
            [],
            connection
        );
        
    let message = "Error in creating a new subject";

    if (result.affectedRows) {
        message = "Subject created successfully";
    }

    return { message };
    }
    return false;
}

async function update(id, name, user) {
    if (checkRole(user, "admin")) {
        let connection = await createDbConnection();
        const result = await query(
            updateSubject(id, name),
            [],
            connection
        );
        let message = "Error in updating subject";
        if (result.affectedRows) {
            message = "Subject updated successfully";
        }
        return { message };
    }
    return false;
}
async function remove(id, user) {
    if (checkRole(user, "admin")) {
        let connection = await createDbConnection();
        const result = await query(
            deleteSubject(id),
            [],
            connection
        );
        
    let message = "Error in deleting the subject";

    if (result.affectedRows) {
        message = "Subject deleted successfully";
    }
    return { message };
    }
    return false;
}

export { get, create, update, remove };