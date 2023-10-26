const getDayScheduleStudent = (parityWeek, weekday, studentId, semester) => {
    return `SELECT *, u.first_name, u.last_name FROM student_enrollments se
    inner join studentmanagementsystem.groups g on se.group_id = g.id
    inner join subgroups sg on se.subgroup_id = sg.id
    inner join specializations s on se.specialization_id = s.id
    inner join years y on se.year_id = y.id
    inner join classes c on g.id = c.group_id, sg.id = c.subgroup_id, s.id = c.specialization_id, y.id = c.year_id
    inner join professor p on c.professor_id = p.id
    inner join users u on p.user_id = u.id
    WHERE se.student_id = ${studentId} AND c.parityWeek IN (${parityWeek}, null) AND c.weekday = ${weekday} AND c.semester = ${semester}
    ORDER BY c.start_time ASC`;
};
const getDayScheduleProfessor = (parityWeek, weekday, professorId, semester) => {
    return `SELECT * FROM classes c
    inner join studentmanagementsystem.groups g on c.group_id = g.id
    inner join subgroups sg on c.subgroup_id = sg.id
    inner join specializations s on c.specialization_id = s.id
    inner join years y on c.year_id = y.id
    inner join professor p on c.professor_id = p.id
    WHERE c.professor_id = ${professorId} AND c.parityWeek IN (${parityWeek}, null) AND c.weekday = ${weekday} AND c.semester = ${semester}`;
};
const getWeekScheduleStudent = (parityWeek, studentId, semester) => {
    return `SELECT *, u.first_name, u.last_name FROM student_enrollments se
    inner join studentmanagementsystem.groups g on se.group_id = g.id
    inner join subgroups sg on se.subgroup_id = sg.id
    inner join specializations s on se.specialization_id = s.id
    inner join years y on se.year_id = y.id
    inner join classes c on g.id = c.group_id, sg.id = c.subgroup_id, s.id = c.specialization_id, y.id = c.year_id
    inner join professor p on c.professor_id = p.id
    inner join users u on p.user_id = u.id
    WHERE se.student_id = ${studentId} AND c.parityWeek IN (${parityWeek}, null) AND c.semester = ${semester}`;
};
const getWeekScheduleProfessor = (parityWeek, professorId, semester) => {
    return `SELECT * FROM classes c
    inner join studentmanagementsystem.groups g on c.group_id = g.id
    inner join subgroups sg on c.subgroup_id = sg.id
    inner join specializations s on c.specialization_id = s.id
    inner join years y on c.year_id = y.id
    inner join professor p on c.professor_id = p.id
    WHERE c.professor_id = ${professorId} AND c.parityWeek IN (${parityWeek}, null) AND c.semester = ${semester}`;
};
const getGeneralScheduleStudent = (studentId, semester) => {
    return `SELECT *, u.first_name, u.last_name FROM student_enrollments se
    inner join studentmanagementsystem.groups g on se.group_id = g.id
    inner join subgroups sg on se.subgroup_id = sg.id
    inner join specializations s on se.specialization_id = s.id
    inner join years y on se.year_id = y.id
    inner join classes c on g.id = c.group_id, sg.id = c.subgroup_id, s.id = c.specialization_id, y.id = c.year_id
    inner join professor p on c.professor_id = p.id
    inner join users u on p.user_id = u.id
    WHERE se.student_id = ${studentId} AND c.semester = ${semester}`;
};
const getGeneralScheduleProfessor = (professorId, semester) => {
    return `SELECT * FROM classes c
    inner join studentmanagementsystem.groups g on c.group_id = g.id
    inner join subgroups sg on c.subgroup_id = sg.id
    inner join specializations s on c.specialization_id = s.id
    inner join years y on c.year_id = y.id
    inner join professor p on c.professor_id = p.id
    WHERE c.professor_id = ${professorId} AND c.semester = ${semester}`;
};
const getGeneralScheduleUnAuth = (specialization_name, year_name, group_name, subgroup_name, semester) => {
    return `SELECT *, u.first_name, u.last_name FROM classes c
    inner join professor p on c.professor_id = p.id
    inner join users u on p.user_id = u.id
    inner join studentmanagementsystem.groups g on c.group_id = g.id
    inner join subgroups sg on c.subgroup_id = sg.id
    inner join specializations s on c.specialization_id = s.id
    inner join years y on c.year_id = y.id
    WHERE sg.name = '${subgroup_name}' AND g.name = '${group_name}' AND s.name = '${specialization_name}' AND y.year = '${year_name}' and c.semester = '${semester}'`;
};



export { getDayScheduleStudent, getDayScheduleProfessor, getWeekScheduleStudent, getWeekScheduleProfessor, getGeneralScheduleStudent, getGeneralScheduleProfessor, getGeneralScheduleUnAuth }