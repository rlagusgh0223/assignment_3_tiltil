"use client";

import { useAuth } from "@/app/(providers)/_contexts/auth.context";
import { FormEventHandler, useState } from "react";

function LogInForm() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const auth = useAuth();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const url = `${window.location.origin}/api/auth/log-in`;
    const options = { method: "POST", body: JSON.stringify({ id, pw }) };
    const response = await fetch(url, options);
    const data = await response.json();

    if (data === "OK" && response.status === 200) {
      auth.setIsLoggedIn(true);
    } else {
      alert("로그인 실패~");
    }
  };

  return (
    <form
      className="w-2/3 m-auto flex justify-center flex-col items-center"
      onSubmit={handleSubmit}
    >
      <h2>로그인 페이지</h2>
      <ul>
        <li>
          <input
            className="border"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </li>
        <li>
          <input
            className="border"
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
        </li>
        <li>
          <button className="border" type="submit">
            로그인하기
          </button>
        </li>
      </ul>
    </form>
  );
}

export default LogInForm;
