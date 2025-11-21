
import React, { useState } from "react";

const Form = ({ save, openDash }) => {

  const [value, setValue] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    email: "",
    contact: "",
    subject: "",
    about: ""
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    save(value);      
    openDash();        
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-10">
      <form
        onSubmit={handleSubmit}
        className=" bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 
             
        flex flex-col w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Form Data</h1>

        <label>First Name</label>
        <input name="firstname" onChange={handleChange} className="border p-2" />

        <label>Last Name</label>
        <input name="lastname" onChange={handleChange} className="border p-2" />

        <label>Email</label>
        <input name="email" onChange={handleChange} className="border p-2" />

        <label>Contact</label>
        <input name="contact" onChange={handleChange} className="border p-2" />

        <label>Gender</label>
        <div>
          <input type="radio" name="gender" value="male" onChange={handleChange} /> Male
          <input type="radio" name="gender" value="female" onChange={handleChange} /> Female
        </div>

        <label>Subject</label>
        <select name="subject" onChange={handleChange} className=" bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 
              border p-2">
          <option value="c++">c++</option>
          <option value="java">java</option>
          <option value="Python">Python</option>
          <option value="java-script">java-script</option>
        </select>

        <label>About</label>
        <textarea name="about" onChange={handleChange} className="border p-2"></textarea>

        <button className="bg-yellow-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default Form;
