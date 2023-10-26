import { createDbConnection, query } from "./db.js";
import {checkRole } from "../services/authenticationService.js";
import { insertProfessor, setProfessorRoleByUserId, selectProfessors, selectProfessor, selectProfessorByUserId } from '../database/professor.js';

async function get(id = null) {
    let connection = await createDbConnection();
    if (id) {
        const data = await query(
            selectProfessor(id),
            [],
            connection
        );
        return data;
    }
    const data = await query(selectProfessors(), [], connection);
    return data;
}

async function assignGivenUserAsProfessor(userId, userName) {
    let connection = await createDbConnection();
    const check = await checkRole(userName, 'admin');
    if (!check) {
        let message = "Do not have permission to assign a new professor";
        return { message };
    }
    
    const result = await query(
        setProfessorRoleByUserId(userId),
        [],
        connection
    );
    const result2 = await query(
        insertProfessor(userId),
        [],
        connection
    );
    
    let message = "Error in setting a new professor";
    
    if (result.affectedRows && result2.affectedRows) {
        message = "Professor added successfully";
    }
    
    return { message };
}

async function getProfessorIdByUserId(id) {
    let connection = await createDbConnection();
    const data = await query(
        selectProfessorByUserId(id),
        [],
        connection
    );
    return data;
}

export { get, assignGivenUserAsProfessor, getProfessorIdByUserId };