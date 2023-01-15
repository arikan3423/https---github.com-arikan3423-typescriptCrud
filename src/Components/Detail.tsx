import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [active, activechange] = useState<boolean>(true);
  const navigate = useNavigate();

  const handlesubmit = (e: any) => {
    e.preventDefault();
    const userdata = { id, name, email, phone, active };

    fetch("http://localhost:8000/user/" + empid, {
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
  const { empid } = useParams();

  //const[empdata,empdataChange]=useState({})

  useEffect(() => {
    fetch("http://localhost:8000/user/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        idchange(resp.id);
        namechange(resp.name);
        emailchange(resp.email);
        phonechange(resp.phone);
        activechange(resp.isactive);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container">
            <div className="card-title">
              <h2 className="text-center">User Detail</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label className="form-control">ID: {id}</label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label className="form-control">Name : {name}</label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label className="form-control">Email: {email}</label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label className="form-control text-lg-left">
                      Phone : {phone}{" "}
                    </label>
                  </div>
                  <div className="col-lg-12"></div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <Link to="/" className="btn btn-danger mt-2">
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

export default Detail;
