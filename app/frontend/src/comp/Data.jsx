import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Data = () => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    fetch("/api/showdata")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setStudentData(result);
      });
  }, [studentData]);

  function handleDelete(id) {
    fetch(`/api/deletedata/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
      });
  }

  return (
    <div>
      <h1>Student Data</h1>
      <table border={"1"}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Id</th>
            <th>Student Name</th>
            <th>Student Roll-No</th>
            <th>Merried</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((items, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{items._id}</td>
              <td>{items.StudentName}</td>
              <td>{items.StudentRollNo}</td>
              <td>{items.IsMerried ? "Yes" : "No"}</td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(items._id);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to={`/update/${items._id}`}>
                  <button>Update</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Data;
