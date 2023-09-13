'use client'

import {useRouter} from "next/navigation";
import {FormEventHandler} from "react";
import axios from "axios";
import styles from "@/styles/form.module.css";

const Login = () => {
  const router = useRouter()
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    const formData = new FormData(document.getElementById('form') as HTMLFormElement);
    const email = formData.get('email');
    const password = formData.get('password');

    const response = await axios.post('http://localhost:4000/auth/login', {
      email,
      password
    }, { withCredentials: true })



    if (response.status !== 201) throw new Error('fetch error')
    if (response.status === 201) {
      await router.push('/')
    }
  }

  return (
    <form onSubmit={handleSubmit} id={'form'} className={styles.form}>
      <input type={'email'} name={'email'} className={styles.form_input} placeholder={'email@gmail.com'} value={'admin@admin.com'}/>
      <input type={'password'} name={'password'} className={styles.form_input} placeholder={'password'} value={'strongPa$$w0rd_'}/>
      <button type={'submit'} className={styles.form_btn}>LOGIN</button>
    </form>
  );
};

export default Login;
