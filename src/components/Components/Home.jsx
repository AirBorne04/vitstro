import { useState, useEffect } from "react";

const fetchDataFromAstro = async (apiEndpoint) => {
  const response = await fetch(`/api/${apiEndpoint}`);
  return await response.json();
};

export default function Home() {

  const [message, setMessage] = useState();

  useEffect(
    () => {
      fetchDataFromAstro("test").then((data) => {
        setMessage(data.message);
      });
    }
  )

  return (
    <div className="home">
      This is a totally real shop! See! That's a picture! Of a shop! Totally
      open.
      <img src="/diana.avif" alt="Check us out" />

      <div>Message from the API: <h3>"{ message }"</h3></div>
    </div>
  )
}
