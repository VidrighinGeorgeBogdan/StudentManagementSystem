import { createDbConnection, query } from "./db.js";
import { getClass, getClasses, insertClass, updateClass, deleteClass } from "../database/classes.js";
import { checkRole } from "../services/authenticationService.js"


async function get(id = null) {
    let connection = await createDbConnection();
    if (id) {
        const result = await query(
            getClass(id),
            [],
            connection
        );
        if (result.length) {
            return result[0];
        }
    }
    const result = await query(
        getClasses(),
        [],
        connection
    );
    if (result.length) {
        return result;
    }
    return false;
}

async function getType(id = null) {
    let connection = await createDbConnection();
    if (id) {
        const result = await query(
            getClassTypeByIdQuery(id),
            [],
            connection
        );
        if (result.length) {
            return result[0];
        }
    }
    const result = await query(
        getClassTypesQuery(),
        [],
        connection
    );
    if (result.length) {
        return result[0];
    }
    return false;
}

async function create(newClass, user) {
    if (checkRole(user, "admin")) {
        let connection = await createDbConnection();
        const result = await query(
            insertClass(newClass),
            [],
            connection
        );
        
    let message = "Error in creating a new class";

    if (result.affectedRows) {
        message = "Class created successfully";
    }

    return { message };
    }
    return false;
}

async function update(id, newClass, user) {
    if (checkRole(user, "admin")) {
        let connection = await createDbConnection();
        const result = await query(
            updateClass(id, newClass),
            [],
            connection
        );
        
    let message = "Error in updating the class";

    if (result.affectedRows) {
        message = "Class updated successfully";
    }

    return { message };
    }
    return false;
}

async function remove(id, user) {
    if (checkRole(user, "admin")) {
        let connection = await createDbConnection();
        const result = await query(
            deleteClass(id),
            [],
            connection
        );
        
    let message = "Error in deleting the class";

    if (result.affectedRows) {
        message = "Class deleted successfully";
    }
    return { message };
    }
    return false;
}

export { get, create, update, remove };