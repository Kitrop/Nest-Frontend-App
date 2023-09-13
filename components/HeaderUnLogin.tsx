import Link from "next/link";

const HeaderUnLogin = () => {
  return (
    <>
      <span> Home </span>
      <span><Link href={'/login'}> sign in </Link></span>
      <span><Link href={'/registration'}> sign up </Link></span>
      <span>UNLOGIN</span>
    </>
  );
};

export default HeaderUnLogin;
