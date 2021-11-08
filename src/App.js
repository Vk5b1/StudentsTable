import "./styles.css";
import React, { useState } from "react";
import Marks from "./Components/Marks";
import AddStudent from "./Components/AddStudent";
import DataTable from "./Components/StudentRecordTable";

export default function App() {
  const [StudentData, setStudentData] = useState([
    { name: "venkata krishna", marks: 92, isEdit: false },
    { name: "chimmili", marks: 95, isEdit: false },
    { name: "vinay", marks: 98, isEdit: false }
  ]);

  const [StudentName, setStudentName] = useState("");
  const [StudentMarks, setStudentMarks] = useState("");

  let [AverageMarks, setAverageMarks] = useState(0);
  let [maximumMarks, setMaximumMarks] = useState(0);
  let [minimumMarks, setMinimumMarks] = useState(Infinity);

  //Adding student data into table.
  function handleStudentData() {
    // console.log(StudentName, StudentMarks);

    if (StudentName !== "" && StudentMarks !== "") {
      const StudentLog = {
        name: StudentName,
        marks: StudentMarks,
        isEdit: false
      };

      const DataList = [...StudentData];
      DataList.push(StudentLog);
      setStudentData(DataList);

      document.getElementById("StudentName").value = "";
      document.getElementById("StudentMarks").value = "";

      let AM = 0,
        count = 0,
        max = 0;
      let min = Infinity;
      DataList.map((value, index) => {
        AM += Number(value.marks);
        count = index;

        if (max < Number(value.marks)) {
          max = Number(value.marks);
        }
        if (min > Number(value.marks)) {
          min = Number(value.marks);
        }
      });
      setAverageMarks(Math.round(AM / (count + 1)));
      setMaximumMarks(max);
      setMinimumMarks(min);

      setStudentName("");
      setStudentMarks("");
    }
  }

  //update data in case needed.
  function handleUpdateClick(e, index) {
    e.preventDefault();
    const DataList = [...StudentData];
    DataList.map((value, i) =>
      i === index ? (value.isEdit = !value.isEdit) : (value.isEdit = false)
    );
    setStudentData(DataList);

    let AM = 0,
      count = 0,
      max = 0;
    let min = Infinity;
    DataList.map((value, index) => {
      if (max < Number(value.marks)) {
        max = Number(value.marks);
      }
      if (min > Number(value.marks)) {
        min = Number(value.marks);
      }

      AM += Number(value.marks);
      count = index;
    });
    setAverageMarks(Math.round(AM / (count + 1)));
    setMaximumMarks(max);
    setMinimumMarks(min);
  }

  //delete data from the table.
  function handleDeleteClick(e, index) {
    e.preventDefault();
    // console.log(index);

    const DataList = StudentData.filter((value, i) => index !== i);
    setStudentData(DataList);

    let AM = 0,
      count = 0,
      max = 0;
    let min = Infinity;
    DataList.map((value, index) => {
      if (max < Number(value.marks)) {
        max = Number(value.marks);
      }
      if (min > Number(value.marks)) {
        min = Number(value.marks);
      }

      AM += Number(value.marks);
      count = index;
    });
    setAverageMarks(Math.round(AM / (count + 1)));
    setMaximumMarks(max);
    setMinimumMarks(min);
  }

  //Edit student name here
  function handleNameKeyPress(e, index) {
    e.preventDefault();
    // console.log(e.target.value, e.key);
    const DataList = [...StudentData];

    if (e.key === "Enter") {
      // console.log(e.target.value);
      DataList[index].name = e.target.value;
      DataList[index].isEdit = false;
      setStudentData(DataList);
    }
  }

  //edit stident marks here
  function handleMarksKeyPress(e, index) {
    e.preventDefault();
    const DataList = [...StudentData];

    if (e.key === "Enter") {
      DataList[index].marks = e.target.value;
      DataList[index].isEdit = false;
      setStudentData(DataList);
    }
  }

  //Enter key to add the data
  function handleStudentDataOnEnter(e) {
    if (e.key === "Enter") {
      handleStudentData();
    }
  }

  return (
    <div className="App">
      <div className="studentDashboardHeader">
        <h5>Student DashBoard</h5>
        <div className="StudentDashboard">
          <Marks marks={[AverageMarks, minimumMarks, maximumMarks]} />
          <AddStudent
            onClick={handleStudentData}
            onChangeName={(e) => setStudentName(e.target.value)}
            onChangeMarks={(e) => setStudentMarks(e.target.value)}
            onKeyPressMarks={handleStudentDataOnEnter}
          />
          <DataTable
            state={StudentData}
            onClick1={handleUpdateClick}
            onClick2={handleDeleteClick}
            onDoubleClick={handleUpdateClick}
            onKeyPressName={handleNameKeyPress}
            onKeyPressMarks={handleMarksKeyPress}
          />
        </div>
      </div>
    </div>
  );
}
