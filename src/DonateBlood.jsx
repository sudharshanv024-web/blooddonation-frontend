import React, { useState } from 'react'

const DonateBlood = () => {

  const [name, setName] = useState("")
  const [bloodGroup, setBloodGroup] = useState("A+")
  const [phone, setPhone] = useState("")
  const [city, setCity] = useState("")

  const handleSubmit = async () => {

    if (!name || !phone || !city) {
      alert("Please fill all fields")

      return
    }

    const data = {
      name: name,
      bloodGroup: bloodGroup,
      phone: phone,
      city: city
    }

    try {
      // const response = await fetch("http://localhost:5000/api/donate", { 
      const response = await fetch("https://bldbackend.onrender.com/api/donate", { 
        method: "POST", 
        headers: { 
          "Content-Type": "application/json" 
        }, 
        body: JSON.stringify(data) 
      }) 
 
      const result = await response.json() 
 
      alert(result.message)

      setName("")
      setPhone("")
      setCity("")
      setBloodGroup("A+")
       
 
    } catch (error) { 
      alert("Error connecting to backend") 
    } 
  } 
 
  return ( 
    <div className="content"> 
 
      <h2>Donate Blood</h2> 
 
      <input type="text"placeholder="Enter Name"value={name} 
        onChange={(e) => setName(e.target.value)}required/> 
 
      <div> 
        <select 
          value={bloodGroup} 
          onChange={(e) => setBloodGroup(e.target.value)} 
        className="Drop"> 
          <option>A+</option> 
          <option>AB+</option> 
          <option>AB-</option> 
          <option>B+</option> 
          <option>B-</option> 
          <option>O+</option> 
          <option>O-</option> 
        </select> 
      </div> 
 
      <input type="number"placeholder="Enter Phone Number" value={phone} 
        onChange={(e) => setPhone(e.target.value)}/> 
 
      <input type="text"placeholder="Enter City"value={city} 
       onChange={(e) => setCity(e.target.value)}/> 
 
      <button className="mainButton" onClick={handleSubmit}> 
        Submit 
      </button> 
 
    </div> 
  ) 
} 
 
export default DonateBlood