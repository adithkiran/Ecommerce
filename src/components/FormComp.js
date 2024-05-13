// import React, { useEffect, useState } from "react";

// const FormComp = () => {

//   const [nameSubmit, setNameSubmit] = useState({
//     firstname: "",
//     lastname: "",
//   });
//   const [flagheader, setFlagHeader] = useState(false)

//   function handleChange(e) {
//     setNameSubmit({ ...nameSubmit, [e.target.name]: e.target.value });
//   }

//   function handleSubmit(e){
//     e.preventDefault();
//     setFlagHeader(true)
//     // setNameSubmit({ firstname: "",
//     //                   lastname: ""})
    
//   }

//   return (
//     <>
//     {flagheader ? <p>Thank you registering {nameSubmit.firstname} {nameSubmit.lastname}</p> : "" }
//     <div className=" flex flex-col items-center">

//     <div className="">
//       <label>
//         <span className="font-medium">First Name :</span>
//         <input
//           className="border p-2 mb-2 rounded-md shadow-lg"
//           type="text" name="firstname" value={nameSubmit.firstname} onChange={handleChange}
//           placeholder="Enter your First name"
//         />
//       </label>
//       <br />
//       <label>
//         <span className="font-medium">Last Name :</span>
//         <input
//           className="border p-2 mb-2 rounded-md shadow-lg"
//           type="text" name="lastname" value={nameSubmit.lastname} onChange={handleChange}
//           placeholder="Enter your First name"
//         />
//       </label>
//       <br />

//       <button onClick={handleSubmit} className="m-5 ml-0 border p-2 rounded-md shadow-lg px-5 py-2 font-medium bg-green-200 cursor-pointer">
//         Submit
//       </button>
//     </div>
//     </div>
//     </>
//   )
// }

// export default FormComp


// import React, { useState } from 'react'

// const FormComp = () => {
 
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: ''
//   });

//   function handleChange(e){
//     setFormData({...formData, [e.target.name]: e.target.value})
//     //console.log(formData)
//   }

//   function handleSubmit(e){
//       e.preventDefault()
//       console.log("hiiiii")
//       setIsSubmitted(true)
//       // setFormData({
//       //   firstName: '',
//       //   lastName: ''
//       // })
//       console.log(formData)
//   }

//   return (
//    <>
//     <form onSubmit={handleSubmit}>
//     <div>
//     <label htmlFor="firstName">First Name:</label>
//     <input
//       type="text"
//       id="firstName"
//       name="firstName"
//       value={formData.firstName}
//       onChange={handleChange}
//     />
//   </div>
//   <div>
//     <label htmlFor="lastName">Last Name:</label>
//     <input
//       type="text"
//       id="lastName"
//       name="lastName"
//       value={formData.lastName}
//       onChange={handleChange}
//     />
//     </div>
//     <button type='submit'>Submit</button>
    
//     </form>

//     {isSubmitted && <p>Successfully registered! {formData.firstName} </p>}
   
//    </>
//   )
// }

// export default FormComp