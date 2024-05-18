import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function AddForm({ addStudent, updateStudent, studentToEdit, setStudentToEdit }) {
  const [student, setStudent] = useState({ id: '', Name: '', Marks: '' });

  useEffect(() => {
    if (studentToEdit !== null) {
      setStudent(studentToEdit);
    } else {
      setStudent({ id: '', Name: '', Marks: '' });
    }
  }, [studentToEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentToEdit === null) {
      addStudent(student);
    } else {
      updateStudent(student);
    }
    setStudentToEdit(null);
    setStudent({ id: '', Name: '', Marks: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
    <br/>
      <div>
        <label>ID:</label>
        <input
          type="text"
          name="id"
          value={student.id}
          onChange={handleInputChange}
          placeholder="Enter ID"
          required
        />
      </div>
      <br/>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="Name"
          value={student.Name}
          onChange={handleInputChange}
          placeholder="Enter Name"
          required
        />
      </div>
      <br/>
      <div>
        <label>Marks:</label>
        <input
          type="text"
          name="Marks"
          value={student.Marks}
          onChange={handleInputChange}
          placeholder="Enter Marks"
          required
        />
      </div>
      <br/>
      <Button type="submit" style={{ marginTop: '10px' }}>
        {studentToEdit === null ? 'Add Student' : 'Update Student'}
      </Button>
    </form>
  );
}

export default AddForm;
