import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import initialStudentInfo from './StudentInfo';
import AddForm from './AddForm';

function Home() {
  const [students, setStudents] = useState(initialStudentInfo);
  const [studentToEdit, setStudentToEdit] = useState(null);

  const handleDelete = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  const handleEdit = (index) => {
    setStudentToEdit(students[index]);
  };

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const updateStudent = (updatedStudent) => {
    const updatedStudents = students.map((student) =>
      student.id === updatedStudent.id ? updatedStudent : student
    );
    setStudents(updatedStudents);
  };

  return (
    <>
      <div style={{ margin: '10rem' }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Marks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students && students.length > 0 ? (
              students.map((student, index) => (
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.Name}</td>
                  <td>{student.Marks}</td>
                  <td>
                    <Button color='green' onClick={() => handleEdit(index)}>
                      Edit
                    </Button>{' '}
                    <Button color='red' onClick={() => handleDelete(index)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No Data Available.</td>
              </tr>
            )}
          </tbody>
        </Table>
        <AddForm
          addStudent={addStudent}
          updateStudent={updateStudent}
          studentToEdit={studentToEdit}
          setStudentToEdit={setStudentToEdit}
        /> 
      </div>
    </>
  );
}

export default Home;
