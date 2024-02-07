"use client";

import { useAuth } from "@/app/(providers)/_contexts/auth.context";
import { FormEventHandler, useState } from "react";

function SignUpForm() {
  const [signId, setSignId] = useState("");
  const [signPw, setSignPw] = useState("");
  const auth = useAuth();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const url = `${window.location.origin}/api/auth/sign-up`;
    const options = {
      method: "POST",
      body: JSON.stringify({ id: signId, pw: signPw }),
    };
    const response = await fetch(url, options);
    const data = await response.json();

    if (data === "OK" && response.status === 200) {
      auth.setIsLoggedIn(true);
    } else {
      alert("양식이 잘못됐습니다");
    }
  };

  return (
    <form
      className="w-2/3 m-auto flex justify-center flex-col items-center"
      onSubmit={handleSubmit}
    >
      <h2>회원가입 페이지</h2>
      <ul>
        <li>아이디</li>
        <li>
          <input
            className="border"
            type="text"
            value={signId}
            onChange={(e) => setSignId(e.target.value)}
          />
        </li>
        <li>비밀번호</li>
        <li>
          <input
            className="border"
            type="password"
            value={signPw}
            onChange={(e) => setSignPw(e.target.value)}
          />
        </li>
        <li>비밀번호 확인</li>
        <li>
          <input className="border" type="password" />
        </li>
        <li>닉네임</li>
        <li>
          <input className="border" type="text" />
        </li>
        <li>
          <button className="border" type="submit">
            회원가입
          </button>
        </li>
      </ul>
    </form>
  );
}

export default SignUpForm;
