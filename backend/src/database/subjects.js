const getSubject = (id) => {
    return `SELECT * FROM subjects WHERE id = '${id}'`;
  };
  const getSubjects = () => {
    return `SELECT * FROM subjects`;
  };
  const insertSubject = (name) => {
    return `INSERT INTO subjects 
          (name) 
          VALUES 
          ("${name}")`;
  };
  
  const updateSubject = (id, name) => {
      return `UPDATE subjects
      SET name = ${name} WHERE id = ${id}`;
  };
  
  const deleteSubject = (id) => {
      return `DELETE FROM subjects WHERE id = ${id}`;
  };
  
  export { getSubject, getSubjects, insertSubject, updateSubject, deleteSubject};
  