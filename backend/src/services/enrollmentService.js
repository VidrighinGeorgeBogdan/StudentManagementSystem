import { createDbConnection, query } from "./db.js";
import {
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
} from "../database/enrollment.js";
async function getStudentEnrollments(student_id) {
  let connection = await createDbConnection();
  const data = await query(selectEnrollments(student_id), [], connection);
  return data;
}

async function createStudentEnrollments(data) {
  let connection = await createDbConnection();
  const result = await query(
    insertEnrollments(
      data.student_id,
      data.specialization_id,
      data.group_id,
      data.year_id,
      data.subgroups_id,
      data.enrollment_type_id
    ),
    [],
    connection
  );
  let message = "Error in creating a new enrollment";
  if (result.affectedRows) {
    message = "Enrollment created successfully";
  }
  return { message };
}

async function modifyYearOfAnEnrollment(data) {
  let connection = await createDbConnection();
  const result = await query(
    updateYearOfAnEnrollment(data.year_id, data.enrollment_id),
    [],
    connection
  );
  let message = "Error in modifying a year of an enrollment";
  if (result.affectedRows) {
    message = "Year of an enrollment modified successfully";
  }
  return { message };
}

async function modifySpecializationOfAnEnrollment(data) {
  let connection = await createDbConnection();
  const result = await query(
    updateSpecializationOfAnEnrollment(
      data.specialization_id,
      data.enrollment_id
    ),
    [],
    connection
  );
  let message = "Error in modifying a specialization of an enrollment";
  if (result.affectedRows) {
    message = "Specialization of an enrollment modified successfully";
  }
  return { message };
}

async function modifyGroupOfAnEnrollment(data) {
  let connection = await createDbConnection();
  const result = await query(
    updateGroupOfAnEnrollment(data.group_id, data.enrollment_id),
    [],
    connection
  );
  let message = "Error in modifying a group of an enrollment";
  if (result.affectedRows) {
    message = "Group of an enrollment modified successfully";
  }
  return { message };
}

async function modifySubgroupsOfAnEnrollment(data) {
  let connection = await createDbConnection();
  const result = await query(
    updateSubgroupsOfAnEnrollment(data.subgroups_id, data.enrollment_id),
    [],
    connection
  );
  let message = "Error in modifying a subgroups of an enrollment";
  if (result.affectedRows) {
    message = "Subgroups of an enrollment modified successfully";
  }
  return { message };
}

async function modifyEnrollment(data) {
  let connection = await createDbConnection();
  const result = await query(
    updateEnrollment(
      data.specialization_id,
      data.group_id,
      data.year_id,
      data.subgroups_id,
      data.enrollment_type_id,
      data.enrollment_id
    ),
    [],
    connection
  );
  let message = "Error in modifying an enrollment";
  if (result.affectedRows) {
    message = "Enrollment modified successfully";
  }
  return { message };
}

async function deleteEnrollment(enrollment_id) {
  let connection = await createDbConnection();
  const result = await query(
    deleteEnrollmentById(enrollment_id),
    [],
    connection
  );
  let message = "Error in deleting an enrollment";
  if (result.affectedRows) {
    message = "Enrollment deleted successfully";
  }
  return { message };
}

async function getEnrollmentTypes() {
  let connection = await createDbConnection();
  const data = await query(selectEnrollmentTypes(), [], connection);
  return data;
}

async function getEnrollmentTypeById(id) {
  let connection = await createDbConnection();
  const data = await query(selectEnrollmentTypeById(id), [], connection);
  return data;
}

async function createEnrollmentType(data) {
  let connection = await createDbConnection();
  const result = await query(insertEnrollmentType(data.name), [], connection);
  let message = "Error in creating a new enrollment type";
  if (result.affectedRows) {
    message = "Enrollment type created successfully";
  }
  return { message };
}

async function modifyEnrollmentType(data) {
  let connection = await createDbConnection();
  const result = await query(
    updateEnrollmentType(data.name, data.id),
    [],
    connection
  );
  let message = "Error in modifying an enrollment type";
  if (result.affectedRows) {
    message = "Enrollment type modified successfully";
  }
  return { message };
}

async function deleteEnrollmentType(id) {
  let connection = await createDbConnection();
  const result = await query(deleteEnrollmentTypeById(id), [], connection);
  let message = "Error in deleting an enrollment type";
  if (result.affectedRows) {
    message = "Enrollment type deleted successfully";
  }
  return { message };
}

async function getSpecializations() {
  let connection = await createDbConnection();
  const data = await query(selectSpecializations(), [], connection);
  return data;
}

async function getSpecializationById(id) {
  let connection = await createDbConnection();
  const data = await query(selectSpecializationById(id), [], connection);
  return data;
}

async function createSpecialization(data) {
  let connection = await createDbConnection();
  const result = await query(insertSpecialization(data.name), [], connection);
  let message = "Error in creating a new specialization";
  if (result.affectedRows) {
    message = "Specialization created successfully";
  }
  return { message };
}

async function modifySpecialization(data) {
  let connection = await createDbConnection();
  const result = await query(
    updateSpecialization(data.name, data.id),
    [],
    connection
  );
  let message = "Error in modifying a specialization";
  if (result.affectedRows) {
    message = "Specialization modified successfully";
  }
  return { message };
}

async function deleteSpecialization(id) {
  let connection = await createDbConnection();
  const result = await query(deleteSpecializationById(id), [], connection);
  let message = "Error in deleting a specialization";
  if (result.affectedRows) {
    message = "Specialization deleted successfully";
  }
  return { message };
}

async function getGroups() {
  let connection = await createDbConnection();
  const data = await query(selectGroups(), [], connection);
  return data;
}

async function getGroupById(id) {
  let connection = await createDbConnection();
  const data = await query(selectGroupById(id), [], connection);
  return data;
}

async function createGroup(data) {
  let connection = await createDbConnection();
  const result = await query(insertGroup(data.name), [], connection);
  let message = "Error in creating a new group";
  if (result.affectedRows) {
    message = "Group created successfully";
  }
  return { message };
}

async function modifyGroup(data) {
  let connection = await createDbConnection();
  const result = await query(updateGroup(data.name, data.id), [], connection);
  let message = "Error in modifying a group";
  if (result.affectedRows) {
    message = "Group modified successfully";
  }
  return { message };
}

async function deleteGroup(id) {
  let connection = await createDbConnection();
  const result = await query(deleteGroupById(id), [], connection);
  let message = "Error in deleting a group";
  if (result.affectedRows) {
    message = "Group deleted successfully";
  }
  return { message };
}

async function getYears() {
  let connection = await createDbConnection();
  const data = await query(selectYears(), [], connection);
  return data;
}

async function getYearById(id) {
  let connection = await createDbConnection();
  const data = await query(selectYearById(id), [], connection);
  return data;
}

async function createYear(data) {
  let connection = await createDbConnection();
  const result = await query(insertYear(data.name), [], connection);
  let message = "Error in creating a new year";
  if (result.affectedRows) {
    message = "Year created successfully";
  }
  return { message };
}

async function modifyYear(data) {
  let connection = await createDbConnection();
  const result = await query(updateYear(data.name, data.id), [], connection);
  let message = "Error in modifying a year";
  if (result.affectedRows) {
    message = "Year modified successfully";
  }
  return { message };
}

async function deleteYear(id) {
  let connection = await createDbConnection();
  const result = await query(deleteYearById(id), [], connection);
  let message = "Error in deleting a year";
  if (result.affectedRows) {
    message = "Year deleted successfully";
  }
  return { message };
}

async function getSubgroups() {
  let connection = await createDbConnection();
  const data = await query(selectSubgroups(), [], connection);
  return data;
}

async function getSubgroupById(id) {
  let connection = await createDbConnection();
  const data = await query(selectSubgroupById(id), [], connection);
  return data;
}

async function createSubgroup(data) {
  let connection = await createDbConnection();
  const result = await query(insertSubgroup(data.name), [], connection);
  let message = "Error in creating a new subgroup";
  if (result.affectedRows) {
    message = "Subgroup created successfully";
  }
  return { message };
}

async function modifySubgroup(data) {
  let connection = await createDbConnection();
  const result = await query(
    updateSubgroup(data.name, data.id),
    [],
    connection
  );
  let message = "Error in modifying a subgroup";
  if (result.affectedRows) {
    message = "Subgroup modified successfully";
  }
  return { message };
}

async function deleteSubgroup(id) {
  let connection = await createDbConnection();
  const result = await query(deleteSubgroupById(id), [], connection);
  let message = "Error in deleting a subgroup";
  if (result.affectedRows) {
    message = "Subgroup deleted successfully";
  }
  return { message };
}

async function getFaculties() {
  let connection = await createDbConnection();
  const data = await query(selectFaculties(), [], connection);
  return data;
}

async function getFacultyById(id) {
  let connection = await createDbConnection();
  const data = await query(selectFacultyById(id), [], connection);
  return data;
}

async function createFaculty(data) {
  let connection = await createDbConnection();
  const result = await query(insertFaculty(data.name), [], connection);
  let message = "Error in creating a new faculty";
  if (result.affectedRows) {
    message = "Faculty created successfully";
  }
  return { message };
}

async function modifyFaculty(data) {
  let connection = await createDbConnection();
  const result = await query(updateFaculty(data.name, data.id), [], connection);
  let message = "Error in modifying a faculty";
  if (result.affectedRows) {
    message = "Faculty modified successfully";
  }
  return { message };
}

async function deleteFaculty(id) {
  let connection = await createDbConnection();
  const result = await query(deleteFacultyById(id), [], connection);
  let message = "Error in deleting a faculty";
  if (result.affectedRows) {
    message = "Faculty deleted successfully";
  }
  return { message };
}

export {
  createFaculty,
  createGroup,
  createSpecialization,
  createSubgroup,
  createYear,
  deleteFaculty,
  deleteGroup,
  deleteSpecialization,
  deleteSubgroup,
  deleteYear,
  getFaculties,
  getFacultyById,
  getGroups,
  getGroupById,
  getSpecializations,
  getSpecializationById,
  getSubgroups,
  getSubgroupById,
  getYears,
  getYearById,
  modifyFaculty,
  modifyGroup,
  modifySpecialization,
  modifySubgroup,
  modifyYear,
  getEnrollmentTypeById,
  getEnrollmentTypes,
  createEnrollmentType,
  modifyEnrollmentType,
  deleteEnrollmentType,
  deleteEnrollment,
  getStudentEnrollments,
  getStudentEnrollmentById,
  createStudentEnrollments,
  modifyYearOfAnEnrollment,
  deleteEnrollment,
  modifySpecializationOfAnEnrollment,
  modifyGroupOfAnEnrollment,
  modifySubgroupsOfAnEnrollment,
  modifyEnrollment,
};
