import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";

const UpdateUser = () => {
  const { id } = useParams();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const [salary, setsalary] = useState("");
  const [gender, setgender] = useState("");
  const [status, setstatus] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/api/users/" + id).then((res) => {
      setname(res.data.name);
      setemail(res.data.email);
      setgender(res.data.gender);
      setstatus(res.data.status);
      setage(res.data.age);
      setsalary(res.data.salary);
    });
  }, []);

  const update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/users/" + id, {
        name,
        email,
        gender,
        status,
        age,
        salary,
      })
      .then((res) => {
        alert("user updated");
        nav("/");
      });
  };

  return (
    <>
      <Header />
      <main id="site-main" className="pt-5">
        <div className="container pt-3">
          <div className="box-nav d-flex justify-between">
            <div className="filter">
              <a href="/" className="btn btn-outline-secondary">
                <i className="fas fa-angle-double-left"></i> All Users
              </a>
            </div>
          </div>
          <div className="form-title text-center">
            <h2 className="text-dark">New User</h2>
            <span className="">Use the below form to update the account</span>
          </div>

          <form id="add_user" onSubmit={update}>
            <div class="mb-3">
              <label htmlFor="name" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                defaultValue={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label htmlFor="email" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                defaultValue={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label htmlFor="age" class="form-label">
                Age
              </label>
              <input
                type="number"
                class="form-control"
                id="age"
                defaultValue={age}
                onChange={(e) => setage(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label htmlFor="salary" class="form-label">
                Salary
              </label>
              <input
                type="number"
                class="form-control"
                id="salary"
                defaultValue={salary}
                onChange={(e) => setsalary(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="me-5">Gender</label>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  id="male"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setgender(e.target.value)}
                />
                <label class="form-check-label" for="male">
                  Male
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  id="female"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setgender(e.target.value)}
                />
                <label class="form-check-label" for="female">
                  Female
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label className="me-5">Status</label>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  id="active"
                  value="Active"
                  checked={status === "Active"}
                  onChange={(e) => setstatus(e.target.value)}
                />
                <label class="form-check-label" for="active">
                  Active
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  id="inactive"
                  value="Inactive"
                  checked={status === "Inactive"}
                  onChange={(e) => setstatus(e.target.value)}
                />
                <label class="form-check-label" for="inactive">
                  Inactive
                </label>
              </div>
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default UpdateUser;
