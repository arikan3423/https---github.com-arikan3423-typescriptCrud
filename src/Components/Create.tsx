import { FormEvent, FormEventHandler, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [active, activechange] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userdata = { id, name, email, phone, active };

    fetch("http://localhost:8000/user", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userdata),
    })
      .then((res) => {
        alert("Saved successfuly");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleChange}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2 className="text-center">User Create</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input value={id} className="form-control" hidden></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => namechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder="E-mail adresiniz.."
                        value={email}
                        onChange={(e) => emailchange(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="number"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        placeholder="+90(500-000-00-00)"
                        value={phone}
                        onChange={(e) => phonechange(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12"></div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button
                        className="btn btn-success mt-2 mx-2"
                        type="submit"
                      >
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger mt-2 ">
                        {" "}
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
