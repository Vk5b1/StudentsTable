import "../styles.css";

function MarksSection(props) {
  return (
    <div className="MarksSection">
      <div>
        <h5>
          Minimum Marks
          <span className="marks">
            {props.marks[1] !== Infinity ? props.marks[1] : 0}{" "}
          </span>
        </h5>
      </div>
      <div>
        <h5>
          maximum Marks<span className="marks">{props.marks[2]}</span>
        </h5>
      </div>
      <div>
        <h5>
          Average Marks<span className="marks">{props.marks[0]}</span>
        </h5>
      </div>
    </div>
  );
}

export default MarksSection;
