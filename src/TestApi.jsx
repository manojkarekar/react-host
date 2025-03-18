import React, { useEffect, useState } from "react";

const TestApi = () => {
  const [Counter, setCounter] = useState(0);

  const [Posts, setPosts] = useState([]);

  let api = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(100 + 100);

  return (
    <>
      <h1>{Counter}</h1>
      <button onClick={() => setCounter(Counter + 1)}>BtnClick</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>body</th>
          </tr>
        </thead>

        <tbody>
          {Posts.map((data) => {
            return (
              
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td>{data.body}</td>
                </tr>
              
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TestApi;
