import { createDbConnection, query } from "./db.js";
import { getGrade, getGrades, updateGrade, insertGrade, deleteGrade} from "../database/grades.js";
import { checkRole } from "../services/authenticationService.js"

const get = async (id = null) => {
    try {
        await createDbConnection();
        if (id) {
            return await query(getGrade(id));
        } else {
            return await query(getGrades());
        }
    } catch (err) {
        console.error(`Error while getting grades `, err.message);
        throw err;
    }
};
async function create(studentID, subjectID, grade) {
    if (checkRole(user, "admin")) {
        let connection = await createDbConnection();
        const result = await query(
            insertGrade(studentID, subjectID, grade),
            [],
            connection
        );
        
    let message = "Error in creating a new grade";

    if (result.affectedRows) {
        message = "Grade created successfully";
    }

    return { message };
    }
    return false;
}

async function update(id, grade, user) {
    if (checkRole(user, "admin")) {
        let connection = await createDbConnection();
        const result = await query(
            updateGrade(id, grade),
            [],
            connection
        );
        let message = "Error in updating grade";
        if (result.affectedRows) {
            message = "Grade updated successfully";
        }
        return { message };
    }
    return false;
}
async function remove(id, user) {
    if (checkRole(user, "admin")) {
        let connection = await createDbConnection();
        const result = await query(
            deleteGrade(id),
            [],
            connection
        );
        
    let message = "Error in deleting the grade";

    if (result.affectedRows) {
        message = "Grade deleted successfully";
    }
    return { message };
    }
    return false;
}

export { get, create, update, remove };