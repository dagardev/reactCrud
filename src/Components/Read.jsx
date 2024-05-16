import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);
  const apiCall = () => {
    axios
      .get("https://660e0cf16ddfa2943b35a5c0.mockapi.io/api/users")
      .then((res) => setData(res.data));
    console.log(data);
  };
  useEffect(() => {
    apiCall();
  }, []);
  //   apiCall()
  function handleDelete(id) {
    console.log(id);
    axios
      .delete(`https://660e0cf16ddfa2943b35a5c0.mockapi.io/api/users/${id}`)
      .then(() => {
        apiCall();
      });
  }
  const setToLocalStorage=(id,name,email)=>{
    // console.log(id,name,email);
    localStorage.setItem('id',id)
    localStorage.setItem('name',name)
    localStorage.setItem('email',email)
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>E-mail</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {data.map((eachData) => {
            return (
              <tr key={eachData.id}>
                <td>{eachData.id}</td>
                <td>{eachData.username}</td>
                <td>{eachData.usermail}</td>
                <td>
                  <Link to={'/update'}>
                  <button className="btn btn-primary " onClick={()=>{
                    setToLocalStorage(eachData.id,eachData.username,eachData.usermail)
                  }}>Edit</button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger "
                    onClick={() => handleDelete(eachData.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Read;
