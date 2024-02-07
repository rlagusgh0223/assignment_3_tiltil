"use client";

import { FormEventHandler, useState } from "react";

function TILForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const url = `${window.location.origin}/api/til`;
    const options = {
      method: "POST",
      body: JSON.stringify({ title, content }),
    };
    const response = await fetch(url, options);
    const data = await response.json();

    console.log("Data", data);
  };

  return (
    <form
      className="w-2/3 m-auto flex justify-center flex-col items-center"
      onSubmit={handleSubmit}
    >
      <p>제목</p>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full h-1/3 border border-black"
      />
      <p>내용</p>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full h-96 border border-black"
      />

      <button type="submit">작성하기</button>
    </form>
  );
}

export default TILForm;
