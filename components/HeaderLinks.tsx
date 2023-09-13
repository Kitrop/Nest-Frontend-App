'use client'
import Link from "next/link";
import axios from "axios";
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";
import {useCookies} from "react-cookie";
import {decode} from 'jsonwebtoken'

const HeaderLinks = () => {

  const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);

  const accessToken: string = cookies.accessToken;
  const decodeAccessToken = (accessToken: string) => {
    return decode(accessToken)
  }

  const decoded: any = decodeAccessToken(accessToken)

  const logout = async () => {
    const response = await axios.post('http://localhost:4000/auth/logout', {}, { withCredentials: true })
    if (response.status !== 200) throw new Error('Fetch Error')
  }

  return (
    <>
      <span>Home</span>
      {accessToken ? (
        <>
          <span>{decoded.email}</span>
          <span onClick={logout}>logout</span>
        </>
      ) : (
        <>
          <span><Link href={'/login'}> sign in </Link></span>
          <span><Link href={'/registration'}> sign up </Link></span>
        </>
      )}
    </>
  );
};

export default HeaderLinks;

interface Props {
  accessToken: RequestCookie | undefined
}
