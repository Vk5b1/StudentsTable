import "../styles.css";
import React from "react";

export default function StudentRecordTable(props) {
  const Details = props.state;
  return (
    <React.Fragment>
      <table className="DetailsTable">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Student Name</th>
            <th>Marks</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {Details.map((value, index) => {
            return (
              <React.Fragment>
                <tr>
                  <td>{index + 1}</td>
                  <td
                    key={index}
                    id={index}
                    onDoubleClick={(e) => props.onDoubleClick(e, index)}
                  >
                    {value.isEdit ? (
                      <input
                        type="text"
                        defaultValue={value.name}
                        size="12"
                        onKeyPress={(e) => {
                          e.key === "Enter" && props.onKeyPressName(e, index);
                        }}
                      />
                    ) : (
                      value.name
                    )}
                  </td>
                  <td
                    key={`${index}${value.name}${value.marks}`}
                    onDoubleClick={(e) => props.onDoubleClick(e, index)}
                  >
                    {value.isEdit ? (
                      <input
                        type="text"
                        defaultValue={value.marks}
                        size="5"
                        onKeyPress={(e) => {
                          e.key === "Enter" && props.onKeyPressMarks(e, index);
                        }}
                      />
                    ) : (
                      value.marks
                    )}
                  </td>
                  <td>
                    <button onClick={(e) => props.onClick1(e, index)}>
                      Edit
                    </button>
                    <button onClick={(e) => props.onClick2(e, index)}>
                      delete
                    </button>
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      {Details.length === 0 && <h5 id="NoData"> No data available </h5>}
    </React.Fragment>
  );
}
