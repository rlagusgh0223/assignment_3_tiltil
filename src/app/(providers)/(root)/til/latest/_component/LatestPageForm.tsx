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

function LatestPageForm() {
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
    const latestData = data.slice(-10);
    setPosts(latestData);
    return latestData;
  };
  useEffect(() => {
    getTil();
  }, []);
  return (
    <>
      <p>최신 10개</p>
      <p>----------</p>
      <div>
        {posts.map((post: Tils) => (
          <div key={post.id}>
            <div>{post.author.name}</div>
            <div>{post.content}</div>
            <div>{post.title}</div>
            <div>----------</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LatestPageForm;
