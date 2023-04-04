import React, { useState } from "react";

const UserInterface = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [favFilm, setFavFilm] = useState("");
  const [interests, setInterests] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send POST request to API
    fetch("https://myzerapiserver3.onrender.com/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: name,
        Location: location,
        Age: age,
        Gender: gender,
        FavFilm: favFilm,
        Interests: interests,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //Display Data on screen
        setUserData(data);
        console.log("Saved user data:", data);
      })
      .catch(console.log("Error in Saving Data"));
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Enter Your Data</h1>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Gender:
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </label>
        <br />
        <label>
          Favourite Films:
          <input
            type="text"
            value={favFilm}
            onChange={(e) => setFavFilm(e.target.value.split(","))}
          />
        </label>
        <br />
        <label>
          Interests:
          <input
            type="text"
            value={interests}
            onChange={(e) => setInterests(e.target.value.split(","))}
          />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
      {userData && (
        <div className="userData">
          <h2>User details:</h2>
          <p>Name: {userData.Name}</p>
          <p>Location: {userData.Location}</p>
          <p>Age: {userData.Age}</p>
          <p>Gender: {userData.Gender}</p>
          <p>Favourite Films: {userData.FavFilm.join(", ")}</p>
          <p>Interests: {userData.Interests.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default UserInterface;
