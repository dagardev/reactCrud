import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate=useNavigate()
  const [user, setUser] = useState({
    username: "",
    usermail: "",
  });
  const [error, setError] = useState({});
  const [issubmit,setIsSubmit]=useState(false)

  const changeHandler = (e) => {
    // console.log(e.target.value,e.target.name);
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const validation = () => {
    let err = {};
    if (!user.username) {
      // alert('please fill username')
      err.eusername = "please fill username";
    }
    if (!user.usermail) {
      // alert('please fill email address')
      err.eusermail = "please fill email address";
    }
    setError(err);
    // console.log(err);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    validation();
    setIsSubmit(true)
    console.log("submit pressed");
  };
  useEffect(()=>{
    if((Object.keys(error).length===0) && (issubmit===true) ){
      axios.post('https://660e0cf16ddfa2943b35a5c0.mockapi.io/api/users',user).then(()=>{
        navigate('/read')
      })
      console.log('api call ');
      setUser({
        username:'',
        usermail:''
      })
      // navigate('/read')
      }
  },[error])
  return (
    <>
      <h2>
        {user.username}/{user.usermail}
      </h2>
      <h1 className="m-5">Create User</h1>
      <form onSubmit={submitHandler} className="m-5">
        <div className="form-group">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="username"
            className="form-control mb-3"
            value={user.username}
            onChange={changeHandler}
          />
          <span>{error.eusername}</span>
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="usermail"
            className="form-control "
            value={user.usermail}
            onChange={changeHandler}
          />
          <span>{error.eusermail}</span>
        </div>

        <button type="submit" className="mt-3 btn btn-success ">
          Save
        </button>
        <button className="btn btn-primary mt-3 ms-3" onClick={()=>{
          navigate('/read')          
        }}>Show Users</button>
      </form>
    </>
  );
}

export default Create;
