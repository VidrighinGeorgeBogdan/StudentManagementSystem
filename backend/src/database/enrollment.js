const selectEnrollments = () => {
  return `SELECT * FROM student_enrollments`;
};
const insertEnrollments = (
  student_id,
  specialization_id,
  group_id,
  year_id,
  subgroups_id,
  enrollment_type_id
) => {
  return `INSERT INTO student_enrollments 
(student_id, specialization_id, group_id, year_id, subgroups_id, enrollment_type_id) VALUES 
(${student_id}, ${specialization_id}, ${group_id}, ${year_id}, ${subgroups_id}, ${enrollment_type_id})`;
};

const updateEnrollment = (
    student_id,
    specialization_id,
    group_id,
    year_id,
    subgroups_id,
    enrollment_type_id,
    id
) => {
    return `UPDATE student_enrollments SET
    student_id = ${student_id},
    specialization_id = ${specialization_id},
    group_id = ${group_id},
    year_id = ${year_id},
    subgroups_id = ${subgroups_id},
    enrollment_type_id = ${enrollment_type_id}
    WHERE id = ${id}`;
};

const updateYearOfAnEnrollment = (year_id, id) => {
    return `UPDATE student_enrollments SET year_id = ${year_id} WHERE id = ${id}`;
};

const updateSpecializationOfAnEnrollment = (specialization_id, id) => {
    return `UPDATE student_enrollments SET specialization_id = ${specialization_id} WHERE id = ${id}`;
};

const updateGroupOfAnEnrollment = (group_id, id) => {
    return `UPDATE student_enrollments SET group_id = ${group_id} WHERE id = ${id}`;
};

const updateSubgroupsOfAnEnrollment = (subgroups_id, id) => {
    return `UPDATE student_enrollments SET subgroups_id = ${subgroups_id} WHERE id = ${id}`;
};

const deleteEnrollmentById = (id) => {
    return `DELETE FROM student_enrollments WHERE id = ${id}`;
};

const selectEnrollmentTypes = () => {
    return `SELECT * FROM enrollment_types`;
};

const insertEnrollmentType = (name) => {
    return `INSERT INTO enrollment_types (name) VALUES ("${name}")`;
};

const updateEnrollmentType = (name, id) => {
    return `UPDATE enrollment_types SET name = "${name}" WHERE id = ${id}`;
};

const deleteEnrollmentTypeById = (id) => {
    return `DELETE FROM enrollment_types WHERE id = ${id}`;
};

const selectEnrollmentTypeById = (id) => {
    return `SELECT * FROM enrollment_types WHERE id = ${id}`;
};

const selectSpecializationById = (id) => {
    return `SELECT * FROM specializations WHERE id = ${id}`;
};

const selectSpecializations = () => {
    return `SELECT * FROM specializations`;
};

const insertSpecialization = (name) => {
    return `INSERT INTO specializations (name) VALUES ("${name}")`;
};

const updateSpecialization = (name, id) => {
    return `UPDATE specializations SET name = "${name}" WHERE id = ${id}`;
};

const deleteSpecializationById = (id) => {
    return `DELETE FROM specializations WHERE id = ${id}`;
};

const selectGroupById = (id) => {
    return `SELECT * FROM groups WHERE id = ${id}`;
};

const selectGroups = () => {
    return `SELECT * FROM groups`;
};

const insertGroup = (name) => {
    return `INSERT INTO groups (name) VALUES ("${name}")`;
};

const updateGroup = (name, id) => {
    return `UPDATE groups SET name = "${name}" WHERE id = ${id}`;
};

const deleteGroupById = (id) => {
    return `DELETE FROM groups WHERE id = ${id}`;
};

const selectSubgroupById = (id) => {
    return `SELECT * FROM subgroups WHERE id = ${id}`;
};

const selectSubgroups = () => {
    return `SELECT * FROM subgroups`;
};

const insertSubgroup = (name) => {
    return `INSERT INTO subgroups (name) VALUES ("${name}")`;
};

const updateSubgroup = (name, id) => {
    return `UPDATE subgroups SET name = "${name}" WHERE id = ${id}`;
};

const deleteSubgroupById = (id) => {
    return `DELETE FROM subgroups WHERE id = ${id}`;
};

const selectYearById = (id) => {
    return `SELECT * FROM years WHERE id = ${id}`;
};

const selectYears = () => {
    return `SELECT * FROM years`;
};

const insertYear = (name) => {
    return `INSERT INTO years (name) VALUES ("${name}")`;
};

const updateYear = (name, id) => {
    return `UPDATE years SET name = "${name}" WHERE id = ${id}`;
};

const deleteYearById = (id) => {
    return `DELETE FROM years WHERE id = ${id}`;
};

const selectFacultyById = (id) => {
    return `SELECT * FROM faculties WHERE id = ${id}`;
};

const selectFaculties = () => {
    return `SELECT * FROM faculties`;
};

const insertFaculty = (name) => {
    return `INSERT INTO faculties (name) VALUES ("${name}")`;
};

const updateFaculty = (name, id) => {
    return `UPDATE faculties SET name = "${name}" WHERE id = ${id}`;
};

const deleteFacultyById = (id) => {
    return `DELETE FROM faculties WHERE id = ${id}`;
};

export {
  selectEnrollments,
  insertEnrollments,
  updateYearOfAnEnrollment,
  updateSpecializationOfAnEnrollment,
  updateSubgroupsOfAnEnrollment,
  updateYearOfAnEnrollment,
  updateGroupOfAnEnrollment,
  updateEnrollment,
  deleteEnrollmentById,
  selectEnrollmentTypes,
  insertEnrollmentType,
  updateEnrollmentType,
  deleteEnrollmentTypeById,
  selectEnrollmentTypeById,
  selectSpecializationById,
  selectSpecializations,
  insertSpecialization,
  updateSpecialization,
  deleteSpecializationById,
  selectGroupById,
  selectGroups,
  insertGroup,
  updateGroup,
  deleteGroupById,
  selectSubgroupById,
  selectSubgroups,
  insertSubgroup,
  updateSubgroup,
  deleteSubgroupById,
  selectYearById,
  selectYears,
  insertYear,
  updateYear,
  deleteYearById,
  selectFacultyById,
  selectFaculties,
  insertFaculty,
  deleteFacultyById,
  updateFaculty,
};
