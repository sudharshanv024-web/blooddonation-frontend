import React, { useState } from 'react'

const FindBlood = () => {

  const [name, setName] = useState("")
  const [bloodGroup, setBloodGroup] = useState("A+")
  const [city, setCity] = useState("")
  const [donors, setDonors] = useState([])

  const handleSearch = async () => {

    if (!name || !city) {
      alert("Please fill all fields")
      return
    }

    try {
      console.log(bloodGroup);
      console.log(typeof(bloodGroup));

      const response = await fetch(
        `https://bldbackend.onrender.com/api/list/${bloodGroup}`
      )

      const data = await response.json()

      setDonors(data.data)

    } catch (error) {
      alert("Backend connection error")
    }
  }

  return (
    <div className="content">
      <h2>Find Blood</h2>

      <input type="text" placeholder="Enter Name" value={name}
        onChange={(e) => setName(e.target.value)}/>

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

      <input type="text"placeholder="Enter City"value={city}
        onChange={(e) => setCity(e.target.value)}required/>

      <button className="mainButton" onClick={handleSearch}>
        Search
      </button>
{/* 
      {donors.map((donor) => (
        <div key={donor._id}>
          <p>Name: {donor.name}</p>
          <p>Blood Group: {donor.bloodGroup}</p>
          <p>Phone: {donor.phone}</p>
          <p>City: {donor.city}</p>
        </div>
      ))} */}

      {donors.map((donor) => (
  <div className="donor-card" key={donor._id}>
    {/* <h3>{donor.name}</h3> */}
    <h3><strong>Name:</strong>{donor.name}</h3>
    <p><strong>Blood Group:</strong> {donor.bloodGroup}</p>
    <p><strong>Phone:</strong> {donor.phone}</p>
    <p><strong>City:</strong> {donor.city}</p>
  </div>
))}
    </div>

  )
}

export default FindBlood