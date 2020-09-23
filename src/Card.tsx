import React from "react";
// import Typewriter from "typewriter-effect";

interface Prop {
  details: any;
  deleteEducation: (d: any, i: any) => void;
}

const Card: React.FC<Prop> = ({ details, deleteEducation }) => {
  const handleDelete = (d: any, i: any) => {
    deleteEducation(d, i);
  };

  return (
    <div>
      {details.map((d: any, i: any) => (
        <div className="card mb-5" id={d["degree"]} key={i}>
          {/* <Typewriter
            options={{
              strings: ["Knowledge", "is", "Power"],
              autoStart: true,
              loop: true,
            }}
          /> */}
          <h4 className="card-header g-font">Info</h4>
          <ul className="list-group">
            <li className="list-group-item g-font">
              Name of School: {d["name"]}
            </li>
            <li className="list-group-item g-font">Degree: {d["degree"]}</li>(
            <li className="list-group-item g-font">
              {(d["elearn"] = "Yes")}?<img src="" />
              :&nbsp;)
            </li>
            <li className="list-group-item g-font">
              Field of Study: {d["fos"]}
            </li>
            <li className="list-group-item g-font">
              Session: {d["start"]} - {d["end"]}{" "}
            </li>
            <li className="list-group-item g-font">Grade: {d["grade"]} </li>
            <li className="list-group-item g-font">
              Description: {d["description"]}{" "}
            </li>
            <li className="list-group-item g-font">
              Activities: {d["cocur"]}{" "}
            </li>
            <li className="list-group-item g-font">
              Media: <iframe height="350px" width="350px" src='{d["media"]}' />
            </li>
            <li className="list-group-item">
              <button
                className="btn btn-danger g-font"
                onClick={() => handleDelete(d, i)}
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
