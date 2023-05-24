import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Adduser = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const [salary, setsalary] = useState("");
  const [gender, setgender] = useState("");
  const [status, setstatus] = useState("");

  let nav = useNavigate();
  const adduser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/users/", {
        name,
        email,
        gender,
        status,
        age,
        salary,
      })
      .then((res) => {
        alert("user added");
        nav("/");
      })
      .catch((e) => {
        alert("Something went wrong please try again");
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
            <span className="">Use the below form to create a new account</span>
          </div>

          <form id="add_user" onSubmit={adduser}>
            <div class="mb-3">
              <label htmlFor="name" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
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

export default Adduser;
