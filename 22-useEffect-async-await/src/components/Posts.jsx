import React, { useEffect, useState } from "react";
import Post from "./Post";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API_URL);
        const posts = await response.json();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }

    fetchData();
  }, []);

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((response) => response.json())
  //     .then((posts) => setPosts(posts))

  //     .catch((error) => setError(error.message))
  //     .finally(() => setIsLoading(false));
  // }, []);

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <hr />

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((post) => <Post key={post.id} {...post} />)
      )}
    </div>
  );
}

export default Posts;
