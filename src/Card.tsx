import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Prop {
  details: any;
  deleteEducation: (x: any, y: any) => void;
}

const Card: React.FC<Prop> = ({ details, deleteEducation }) => {
  const handleDelete = (x: any, y: any) => {
    deleteEducation(x, y);
  };

  return (
    <div>
      {details.map((x: any, y: any) => (
        <div className="card mb-5" id={x["degree"]} key={y}>
          <h3>Knowledge is Power</h3>
          <h4 className="card-header g-font">Info</h4>
          <ul className="list-group">
            <li className="list-group-item g-font">
              Name of School: {x["name"]}
            </li>
            <li className="list-group-item g-font">Degree: {x["degree"]}</li>(
            <li className="list-group-item g-font">
              {(x["elearn"] = "Yes")}?<img src="" />
              :&nbsp;)
            </li>
            <li className="list-group-item g-font">
              Field of Study: {x["fos"]}
            </li>
            <li className="list-group-item g-font">
              Session: {x["start"]} - {x["end"]}{" "}
            </li>
            <li className="list-group-item g-font">Grade: {x["grade"]} </li>
            <li className="list-group-item g-font">
              Description: {x["description"]}{" "}
            </li>
            <li className="list-group-item g-font">
              Activities: {x["cocur"]}{" "}
            </li>
            <li className="list-group-item g-font">
              Media: <iframe height="350px" width="350px" src='{x["media"]}' />
            </li>
            <li className="list-group-item">
              <button
                className="btn btn-danger g-font"
                onClick={() => handleDelete(x, y)}
              >
                Delete My Education
              </button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Card;
