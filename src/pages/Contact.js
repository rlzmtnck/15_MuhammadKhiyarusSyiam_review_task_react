import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import validator from "validator";

const Contact = () => {
  let history = useHistory()
const initialData = {
      nama: "",
      phone: "",
      negara: "",
      email: "",
      description: ""
}
const [data, setData] = useState(initialData);
const [errName, setErrName] = useState("");
const [errEmail, setErrEmail] = useState("");
const [errPhone, setErrPhone] = useState("");
const [errNat, setErrnat] = useState("");
const handleInput = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  const re = /^[A-Za-z ]+$/;
  if (name === "nama")
    re.test(value) && value !== ""
      ? setErrName("")
      : setErrName("Nama tidak boleh kosong dan harus berupa huruf");

  if (name === "email")
    validator.isEmail(value) && value !== ""
      ? setErrEmail("")
      : setErrEmail("Email harus diisi dengan email yang valid");

  if (name === "phone")
    validator.isMobilePhone(value.toString(), "id-ID") && value !== ""
      ? setErrPhone("")
      : setErrPhone("Hanya dapat menerima nomor handphone Indonesia saja");

  if (name === "negara")
    validator.isEmpty(value)
      ? setErrnat("Nationality harus diisi")
      : setErrnat("");

  setData({
    ...data,
    [name]: value,
  });
};
const resetData = () => {
  setData(initialData);
  setErrEmail("");
  setErrName("");
  setErrnat("");
  setErrPhone("");
};
const handleSubmit = (event) => {
  event.preventDefault();
  if (errName !== "" || errEmail !== "" || errPhone !== "" || errNat !== "") {
    return alert("Invalid Data");
  } else {
    alert(`Form anda berhasil diterima , atas nama : ${data.nama} `);
    localStorage.setItem('document',JSON.stringify(data))
    history.push("/thankyou")
  }
  resetData();
};
  
  
    return (
      <div className="col-6 peding-30">
            <form
            onSubmit={handleSubmit}
            
            >
                <h1> Contact us </h1>
                <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  onChange={handleInput}
                  className="form-control form-control-sm is-invalid"
                  id="name"
                  value={data.nama}
                  name="nama"
                  placeholder="Your full name here..."
                  required
                />
                {errName !== "" ? (
                <>
                  <span>{errName}</span>
                  <br />
                </>
              ) : null}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                type="email"
                onChange={handleInput}
                className="form-control form-control-sm is-invalid"
                id="email"
                name="email"
                value={data.email}
                placeholder="example@domain.com"
                required
              />
              {errEmail !== "" ? (
                <>
                  <span>{errEmail}</span>
                  <br />
                </>
              ) : null}
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      onChange={handleInput}
                      className="form-control form-control-sm is-invalid"
                      id="phone-number"
                      minLength="9"
                      maxLength="13"
                      name="phone"
                      value={data.phone}
                      placeholder="08573890xxxxx"
                       required
              />
              {errPhone !== "" ? (
                <>
                  <span>{errPhone}</span>
                  <br />
                </>
              ) : null}
                </div>
                <div className="form-group">
                    <label htmlFor="negara">Select a nationality</label>
                    <select
                      className="form-control"
                      onChange={handleInput}
                      name="negara"
                      value={data.negara}
                      id="negara"
                      required
                    >
                        <option value="">--- Please select ---</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Jepang">Jepang</option>
                        <option value="Australia" >Australia</option>
                    </select>
              {errNat !== "" ? (
                <>
                  <span>{errNat}</span>
                  <br />
                </>
              ) : null}
                </div>
                <div className="form-group">
                    <label htmlFor="description">Message</label>
                    <textarea
                    className="form-control"
                    onChange={handleInput}
                    id="description"
                    rows="5"
                    name="description"
                    maxLength="200"
                    value={data.description}
                    placeholder="Type your message here..."
                    
                    />
                </div>
                <div className="form-group">
                <button style={{marginLeft: "-474px", top: "590px"}}
                  type="submit" 
                  className="btn btn-primary">
                  Submit
                </button>
               </div>
            </form>
          </div>
    );
  
}
export default Contact

// import React, { useState } from "react";

// import { Link } from "react-router-dom";
// import validator from 'validator'

// import { ValidationForm, TextInput, SelectGroup  } from 'react-bootstrap4-form-validation';
// import 'bootstrap/dist/css/bootstrap.min.css';
// const Contact = (props) => {
//   const [state, setState] = useState({
//         nama: "",
//         phone: "",
//         negara: "",
//         email: "",
//         description: ""
//   });
//   const initialState = {
//     nama: "",
//     phone: "",
//     negara: "",
//     email: "",
//     description: ""

// }
// const handleSubmit = (event, props) => {
//   event.preventDefault();
  
// }
//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     localStorage.setItem('document',JSON.stringify(value));
//     setState(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };
//  console.log(props)
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//             <ValidationForm onSubmit={handleSubmit} style={{left: "700px"}} className="col-6">
//                 <div className="form-group">
//                     <p style={{fontSize: "28px", fontWeight: "bolder", color: "blue"}}>Contact Us</p>
//                     <label htmlFor="nama">Full Name</label>
//                     <TextInput name="nama" id="nama" required
//                         successMessage="Mantap!"
//                         value={state.nama}

//                         onChange={handleInputChange}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="email">Email</label>
//                     <TextInput name="email" id="email" type="email" 
//                         validator={validator.isEmail} 
//                         successMessage="Mantap!"
//                         errorMessage={{validator:"Please enter a valid email"}}
//                         value={state.email}
//                         onChange={handleInputChange}
//                         />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="phone">Phone</label>
//                     <TextInput name="phone" id="phone" minLength="4"
//                         validator={validator.isInt} 
//                         successMessage="Mantap!"
//                         errorMessage={{validator:"Please enter a number"}}
//                         value={state.phone}
//                         onChange={handleInputChange}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="negara">Select a nationality</label>
//                     <SelectGroup name="negara" id="negara"
//                         value={state.negara}
//                         required errorMessage="Ga punya negara?"
//                         onChange={handleInputChange}>
//                         <option value="">--- Please select ---</option>
//                         <option value="indonesia">Indonesia</option>
//                         <option value="thailand">Thailand</option>
//                         <option value="jepang">Jepang</option>
//                         <option value="australia" >Australia</option>
//                     </SelectGroup>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="description">Description</label>
//                     <TextInput name="description" id="description" multiline required
//                         value={state.description}
//                         onChange={handleInputChange}
//                         rows="10"/>
//                 </div>
                
//                 <div className="form-group">
//                     <Link 
//                       className="btn btn-primary posisibut"
//                       to={{
//                         pathname: "/thankyou",
//                         state
//                       }}
//                     >
//                       Submit
//                     </Link>
//                 </div>
//               </ValidationForm>
//         </form>
//     </div>
//   );
// };

// export default Contact;


// import React, { useState } from 'react'
// import { ValidationForm, TextInput, SelectGroup  } from 'react-bootstrap4-form-validation';
// import { Link } from "react-router-dom";
// import validator from 'validator'
// import './contact.css'
// const Contact = props => {
//     const initialState = {
//         name: "",
//         phone: "",
//         negara: "",
//         email: "",
//         description: ""

//     }
//     const [data, setData] = useState ({
//         name: "",
//         phone: "",
//         negara: "",
//         email: "",
//         description: ""

//     })

//     const [name, setName] = useState("")
//     const [phone, setPhone] = useState("")
//     const [negara, setNegara] = useState("")
//     const [email, setEmail] = useState("")
  
//     const handleChange = (e) => {
//         setData({
//             [e.target.name]: e.target.value
//         })
//     }

    // const handleSubmit = (e, formData, inputs) => {
    //     e.preventDefault();
    //     localStorage.setItem('document',JSON.stringify(formData));
    //     clearState();
    // }

//     const handleErrorSubmit = (e, formData, errorInputs) => {
//         console.error(errorInputs)
//     }
//    const clearState = () => {
//     setData({ ...initialState });
//   };
  

    
//         return (
        
//           <div className="col-6 peding-30">
//             <ValidationForm  >
//                 <h1> Contact us </h1>
//                 <div className="form-group">
//                     <label htmlFor="name">Full Name</label>
//                     <TextInput name="name" id="name" required
//                         successMessage="Mantap!"
//                         errorMessage="Ga punya nama?"
//                         value={data.name}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="email">Email</label>
//                     <TextInput name="email" id="email" type="email" 
//                         validator={validator.isEmail} 
//                         successMessage="Mantap!"
//                         errorMessage={{validator:"Please enter a valid email"}}
//                         value={data.email}
//                         onChange={handleChange}
//                         />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="phone">Phone</label>
//                     <TextInput name="phone" id="phone" minLength="4"
//                         validator={validator.isInt} 
//                         successMessage="Mantap!"
//                         errorMessage={{validator:"Please enter a number"}}
//                         value={data.phone}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="negara">Select a nationality</label>
//                     <SelectGroup name="negara" id="negara"
//                         value={data.negara} 
//                         required errorMessage="Ga punya negara?"
//                         onChange={handleChange}>
//                         <option value="">--- Please select ---</option>
//                         <option value="indonesia">Indonesia</option>
//                         <option value="thailand">Thailand</option>
//                         <option value="jepang">Jepang</option>
//                         <option value="australia" >Australia</option>
//                     </SelectGroup>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="description">Description</label>
//                     <TextInput name="description" id="description" multiline required
//                         value={data.description}
//                         onChange={handleChange}
//                         rows="10"/>
//                 </div>
                
//                 <div className="form-group">
//                     <Link 
//                       className="btn btn-primary posisibut"
//                       to={{
//                         pathname: "/thankyou",
//                         data
//                       }}
//                     >
//                       Submit
//                     </Link>
//                 </div>
//             </ValidationForm>
//           </div>
//         )
    
// }
// export default Contact