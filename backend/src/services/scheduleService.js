import { createDbConnection, query } from "./db.js";
import { checkRole } from "./authenticationService.js";
import { getStudentIdByUserId } from "./studentService.js";
import { getProfessorIdByUserId } from "./professorService.js";
import { getDayScheduleStudent, getDayScheduleProfessor, getWeekScheduleStudent, getWeekScheduleProfessor, getGeneralScheduleStudent, getGeneralScheduleProfessor, getGeneralScheduleUnAuth } from "../database/schedule.js"

async function getStudentSchedule(data) {
    let connection = await createDbConnection();
    const check = await checkRole(data.user, 'student');
    if (!check) {
        let message = "Do not have permission to view a student schedule";
        return { message };
    }
    let studentId = getStudentIdByUserId(data.user.id)
    let scheduleQuerry;
    if (data.type === 'day') {
        scheduleQuerry = getDayScheduleStudent(data.parityWeek, data.weekday, studentId, data.semester)
    } else if (data.type === 'week') {
        scheduleQuerry = getWeekScheduleStudent(data.parityWeek, studentId, data.semester)
    } else if (data.type === 'general') {
        scheduleQuerry = getGeneralScheduleStudent(studentId, data.semester)
    }
    let schedule = await query(scheduleQuerry, [], connection);
    return schedule;
}

async function getProfessorSchedule(data) {
    let connection = await createDbConnection();
    const check = await checkRole(data.user, 'professor');
    if (!check) {
        let message = "Do not have permission to view a professor schedule";
        return { message };
    }
    let teacherId = getProfessorIdByUserId(data.user.id)
    let scheduleQuerry;
    if (data.type === 'day') {
        scheduleQuerry = getDayScheduleProfessor(data.parityWeek, data.weekday, ProfessorrId, data.semester)
    } else if (data.type === 'week') {
        scheduleQuerry = getWeekScheduleProfessor(data.parityWeek, ProfessorrId, data.semester)
    } else if (data.type === 'general') {
        scheduleQuerry = getGeneralScheduleProfessor(ProfessorrId, data.semester)
    }
    let schedule = await query(scheduleQuerry, [], connection);
    return schedule;
}

async function getUnAuthSchedule(data) {
    let connection = await createDbConnection();
    let scheduleQuerry = getGeneralScheduleUnAuth(data.specialization_name, data.year_name, data.group_name, data.subgroup_name, data.semester);
    let schedule = await query(scheduleQuerry, [], connection);
    return schedule;
}
export { getStudentSchedule, getProfessorSchedule, getUnAuthSchedule }