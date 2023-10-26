import { createDbConnection, query } from "./db.js";
import { insertStudent, setStudentRoleByUserId, selectStudent, selectStudents } from "../database/student.js";
import {checkRole } from "../services/authenticationService.js";

async function getStudent(id = null) {
    let connection = await createDbConnection();
    if (id) {
        const data = await query(
            selectStudent(id),
            [],
            connection
        );
        return data;
    }
    const data = await query(selectStudents(), [], connection);
    return data;
}

async function getStudentIdByUserId(id) {
    let connection = await createDbConnection();
    const data = await query(
        selectStudentByUser(id),
        [],
        connection
    );
    return data;
}

async function assignGivenUserAsStudent(asigner, userId) {
    let connection = await createDbConnection();
    const check = await checkRole(asigner, 'admin');
    if (!check) {
        let message = "Do not have permission to assign a new student";
        return { message };
    }
    
    const result = await query(
        setStudentRoleByUserId(userId),
        [],
        connection
    );
    const result2 = await query(
        insertStudent(userId),
        [],
        connection
    );
    
    let message = "Error in setting a new student";
    
    if (result.affectedRows && result2.affectedRows) {
        message = "Student added successfully";
    }
    
    return { message };
}

export { getStudent, assignGivenUserAsStudent, getStudentIdByUserId };