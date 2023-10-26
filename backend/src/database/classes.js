const getClass = (id) => {
  return `SELECT * FROM classes WHERE id = '${id}'`;
};
const getClasses = () => {
  return `SELECT * FROM classes`;
};
const insertClass = (newClass) => {
  return `INSERT INTO classes 
        (duration, start_time, weekday, weekly, parityWeek, name, subject_id, type_id, professor_id, year_id, group_id, subgroup_id, specialization_id, semester) 
        VALUES 
        ("${newClass.duration}", "${newClass.start_time}", "${newClass.weekday}", "${newClass.weekly}", "${newClass.parityWeek}",
        "${newClass.name}", "${newClass.subject_id}", "${newClass.type_id}", "${newClass.professor_id}",
        "${newClass.year_id}", "${newClass.group_id}", "${newClass.subgroup_id}", "${newClass.specialization_id}", "${newClass.semester}")`;
};

const updateClass = (id, newClass) => {
    return `UPDATE classes
    SET duration = "${newClass.duration}", start_time = "${newClass.start_time}", weekday = "${newClass.weekday}",
    weekly = "${newClass.weekly}", parityWeek = "${newClass.parityWeek}", name = "${newClass.name}", subject_id = "${newClass.subject_id}",
    type_id = "${newClass.type_id}", professor_id = "${newClass.professor_id}" 
    WHERE id = ${id}`;
};

const deleteClass = (id) => {
    return `DELETE FROM classes WHERE id = ${id}`;
};

const getClassTypeByIdQuery = (id) => {
    return `SELECT * FROM class_type WHERE id = "${id}"`;
  };
const getClassTypesQuery = () => {
return `SELECT * FROM class_type`;
};

export { getClass, getClasses, insertClass, updateClass, deleteClass, getClassTypeByIdQuery, getClassTypesQuery };
