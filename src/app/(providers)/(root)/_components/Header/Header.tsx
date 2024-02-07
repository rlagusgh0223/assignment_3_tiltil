import Link from "next/link";
import HeaderAuthButtons from "./_components/HeaderAuthButtons";

function Header() {
  return (
    <header className="h-20 border-b bg-green-100 flex justify-between items-center">
      <Link href="/" className="items-start">
        TILTIL
      </Link>

      <nav>
        <ul className="flex">
          <li>
            <Link href="/til/trending">트렌딩</Link>
          </li>
          <li> | </li>
          <li>
            <Link href="/til/latest">최신</Link>
          </li>
          <li> | </li>
          <li>
            <Link href="/til/write">TIL 쓰러가기</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/til/profile">프로필</Link>
          </li>
        </ul>
      </nav>

      <HeaderAuthButtons />
    </header>
  );
}

export default Header;
