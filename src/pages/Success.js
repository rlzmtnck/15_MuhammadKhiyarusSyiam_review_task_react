import React from "react";
import { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const Success = () => {
    const [data, set_data] = useState ("");
  useEffect(() => {
    let retrievedObject = localStorage.getItem('document');
    set_data(retrievedObject);
  }, []);

  
  // var retrievedObject = localStorage.getItem('document');
  // console.log('retrievedObject: ', JSON.parse(retrievedObject));
  // const { nama, email, phone, negara, description } =
  //   localStorage.getItem('document');

  return (
    <div>

      <div className="card border-primary" style={{ width: "50rem", left: "350px", top: "100px" }}>
          {
              (data !== undefined) && (
                  <>
                  <div className="card-body ml-4 mt-4">
                  <p className="card-text">Full Name <span className="ml-5">:</span> <span className="ml-5">{data.nama}</span></p>
                  <p className="card-text">Email Address  <span className="ml-5">:</span> <span className="ml-5">{data.email}</span></p>
                  <p className="card-text">Phone Number  <span className="ml-5">:</span> <span className="ml-5">{data.phone}</span></p>
                  <p className="card-text ">Nationality  <span className="ml-5">:</span> <span className="ml-5">{data.negara}</span></p>
                  <p className="card-text " style={{ fontStyle: "italic" }}>{data.description}</p>
                  <hr style={{ width: "50%" }}></hr>
                  <h4>Thanks for contacting us! </h4>
                  <h4>We will be in touch with you shortly.</h4>
                  <NavLink to="/" className="btn btn-primary" activeClassName="active">
                    Go Back
                  </NavLink>
                </div>
                  </>
              )
          }
     
      </div>
    </div>
  );
};

export default Success;

// import React from "react";
// import { NavLink } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Success = props => {
//   const { name, phone, negara, email, description } =
//     (props.location && props.location.state) || {};
//   return (
//     <>
//         <h1>{name}</h1>
//     </>
//   );
// };

// export default Success;
