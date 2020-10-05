import React from "react";
import { useState, useEffect } from "react";

export default function Ajxx() {
  const [people, setPeople] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
  const fetchData = async()  => {
      try {
         let res = await fetch("https://swapi.dev/api/peopledsfsdfsd/");
         data = await res.json();
         setPeople(data)
         setError(true)
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      {JSON.stringify(people.count)}
      <p>error: {JSON.stringify(error)}</p>
    </div>
  );
}
