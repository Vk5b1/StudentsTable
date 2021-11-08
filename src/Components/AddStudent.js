import "../styles.css";

function AddStudent(props) {
  return (
    <div className="AddStudentDetails">
      <h5>Add New Student</h5>
      <input
        type="text"
        id="StudentName"
        size="12"
        onChange={props.onChangeName}
        required
      />
      <input
        type="number"
        id="StudentMarks"
        onChange={props.onChangeMarks}
        onKeyPress={(e) => props.onKeyPressMarks(e)}
        required
      />
      <button onClick={props.onClick}>Register Student</button>
    </div>
  );
}

export default AddStudent;
