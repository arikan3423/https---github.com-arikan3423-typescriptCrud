import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ListFormat } from "typescript";
import { userType } from "../types";

const List = () => {
  const [userData, userdataChange] = useState<userType[]>([]);
  const navigate = useNavigate();

  const LoadEdit = (id: number) => {
    navigate("/employe/edit/" + id);
  };
  const LoadDetail = (id: number) => {
    navigate("/employe/detail/" + id);
  };
  const RemoveFunction = (id: number) => {
    fetch("http://localhost:8000/user/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        alert("Removed successfuly");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetch("http://localhost:8000/user")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        userdataChange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee Listing</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="employee/create" className="btn btn-success">
              Add User
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {userData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                    <a
                      onClick={() => {
                        LoadEdit(item.id);
                      }}
                      className="btn btn-success"
                    >
                      Edit
                    </a>
                    <a
                      onClick={() => {
                        RemoveFunction(item.id);
                      }}
                      className="btn btn-danger"
                    >
                      Remove
                    </a>
                    <a
                      onClick={() => {
                        LoadDetail(item.id);
                      }}
                      className="btn btn-primary"
                    >
                      Detail
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default List;
