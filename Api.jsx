import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Api.css'
function Api() {
  const [userdata, setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setdata(res.data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);  
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">Loading...</div> 
      ) : (
        userdata.map((data) => {
          return (
            <div className='main' key={data.id}>
              <h5>User : </h5> <span>{data.name}</span>
              <ol>
                <li><b>Name :</b> {data.name}</li>
                <li><b>UserName :</b> {data.username}</li>
                <li><b>Email :</b> {data.email}</li>
                <li><b>Phone :</b> {data.phone}</li>
                <li><b>Website :</b> {data.website}</li>
                <li><b>Company  :</b> {data.company.name}</li>

              </ol>
            </div>
          );
        })
      )}
    </>
  );
}

export default Api;

