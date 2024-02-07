"use client";
import { useEffect, useState } from "react";

type Tils = {
  author: {
    name: string;
  };
  content: string;
  id: number;
  title: string;
};

function HomePage() {
  const [posts, setPosts] = useState<Tils[]>([]);
  const getTil = async () => {
    const url =
      "https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/til";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("Data", data);
    setPosts(data);
  };
  useEffect(() => {
    getTil();
  }, []);
  return (
    <>
      <p>작성자 명단</p>
      <p>----------</p>
      <div>
        {posts.map((post: Tils) => (
          <div key={post.id}>
            <div>{post.author.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
