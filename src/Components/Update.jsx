import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Update() {
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);
  const navigate = useNavigate();
  const updateHandler = (e) => {
    e.preventDefault();
    axios.put(`https://660e0cf16ddfa2943b35a5c0.mockapi.io/api/users/${id}`, {
      username: name,
      usermail: email,
    }).then(()=>{
        navigate('/read')
    });
  };
  return (
    <>
      <h1 className="m-5">Update</h1>
      <form className="m-5">
        <div className="form-group">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="username"
            className="form-control mb-3"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="usermail"
            className="form-control "
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <button onClick={updateHandler} className="mt-3 btn btn-success ">
          Update
        </button>
        <button
          className="btn btn-secondary mt-3 ms-3"
          onClick={() => {
            navigate("/read");
          }}
        >
          Back
        </button>
      </form>
    </>
  );
}

export default Update;
