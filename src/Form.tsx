import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "bootstrap/dist/css/bootstrap.min.css";

interface Prop {
  getEducationDetails: (val: Object) => void;
  toggleModal: () => void;
}

const Form: React.FC<Prop> = ({ toggleModal, getEducationDetails }) => {
  // state varibales
  const [universities, setUniversities] = useState([]);
  const [degrees, setDegrees] = useState([]);
  const [fos, setFos] = useState([]);
  const [name, setName] = useState<any>({});
  const [values, setValues] = useState<any>({
    degree: "",
    elearn: "",
    fos: "",
    start: "",
    end: "",
    grade: "",
    cocur: "",
    description: "",
    media: "",
  });

  // destructuring state variables
  const {
    degree,
    elearn,
    start,
    end,
    grade,
    cocur,
    description,
    media,
  } = values;

  // fetch all universities from API when initial loading of Component
  const fetchUniversities = async () => {
    try {
      const rawResponse = await fetch(
        "https://showwcase-challenge-university.free.beeceptor.com/search"
      );
      const response = await rawResponse.json();
      setUniversities(response);
    } catch (error) {
      console.log(error);
    }
  };

  // fetch all degrees from API when initial loading of Component
  const fetchDegrees = async () => {
    try {
      const rawResponse = await fetch(
        "https://showwcase-challenge.free.beeceptor.com/degrees"
      );
      const response = await rawResponse.json();
      setDegrees(response);
    } catch (error) {
      console.log(error);
    }
  };

  // fetch all study fields from API when initial loading of Component
  const fetchFos = async () => {
    try {
      const rawResponse = await fetch(
        "https://showwcase-challenge.free.beeceptor.com/study"
      );
      const response = await rawResponse.json();
      setFos(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUniversities();
    fetchDegrees();
    fetchFos();
  }, []);

  // handleChange method for all form elements
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    values["name"] = name["name"];
    values["uniqueKey"] = values["name"] + values["degree"];
    getEducationDetails(values);
    toggleModal();
  };

  // Modal form
  const newModalForm = () => (
    <form
      className="mb-3"
      onSubmit={handleSubmit}
      accept-charset="UTF-8"
      id="education"
    >
      <div className="form-group">
        <label className="text-muted">
          🏫 Name of School <span style={{ color: "red" }}>*</span>
        </label>
        <Autocomplete
          id="School"
          options={universities}
          getOptionLabel={(u) => u["name"]}
          renderInput={(params) => <TextField {...params} variant="outlined" />}
          onChange={(event, newValue) => {
            setName(newValue);
          }}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">
          🎓 Degree <span style={{ color: "red" }}>*</span>
        </label>
        <Autocomplete
          id="Degree"
          options={degrees}
          getOptionLabel={(u) => u["degree"]}
          renderInput={(params) => <TextField {...params} variant="outlined" />}
          onChange={(event, newValue) => {
            setDegrees(newValue);
          }}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">🌐 E-Learning</label>
        &nbsp;
        <input
          id="Online"
          type="checkbox"
          onChange={handleChange}
          value={elearn}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">
          🔎 Field of Study <span style={{ color: "red" }}>*</span>
        </label>
        <Autocomplete
          id="study"
          options={fos}
          getOptionLabel={(u) => u["fos"]}
          renderInput={(params) => <TextField {...params} variant="outlined" />}
          onChange={(event, newValue) => {
            setFos(newValue);
          }}
        />
      </div>
      <div className="row">
        <div className="form-group col">
          <label className="text-muted">
            🎉 Start year <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="date"
            className="form-control"
            name="start"
            value={start}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group col">
          <label className="text-muted">
            🔚 End year (expected) <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="date"
            className="form-control"
            name="end"
            value={end}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group col">
          <label className="text-muted">⏳ Ongoing</label>
          <input
            type="checkbox"
            className="form-control"
            name="end"
            value={end}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label className="text-muted">
          💯 Grade (1.0 - 4.0) <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="number"
          className="form-control"
          name="grade"
          value={grade}
          onChange={handleChange}
          max="4.0"
          min="0.0"
          step="0.01"
          required
        />
      </div>
      <div className="form-group">
        <label className="text-muted">🎭 Activities and Societies</label>
        <textarea
          placeholder="ex: Experiences in clubs & events"
          className="form-control"
          name="cocur"
          value={cocur}
          onChange={handleChange}
          rows={3}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">📄 Description</label>
        <textarea
          placeholder="ex: Experiences with your University / Field of
          Study"
          className="form-control"
          name="description"
          value={description}
          onChange={handleChange}
          rows={3}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">🎞 Media (url):</label>
        <input
          type="text"
          placeholder="ex: link to documents, photos and presentations."
          className="form-control"
          name="media"
          value={media}
          onChange={handleChange}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary">➕ Save</button>
        &nbsp;
        <button className="btn btn-primary">⛔ Reset</button>
      </div>
    </form>
  );

  return <div>{newModalForm()}</div>;
};

export default Form;
