'use client'

import styles from "@/styles/form.module.css";
import {useRouter} from "next/navigation";
import {FormEventHandler} from "react";
import axios from "axios";

const Registration = () => {

  const router = useRouter()
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    const formData = new FormData(document.getElementById('form') as HTMLFormElement)
    const email = formData.get('email')
    const password = formData.get('password')
    const repeatPassword = formData.get('repeatPassword')


    if (password !== repeatPassword) {
      return
    }

    const response = await axios.post('http://localhost:4000/auth/registration', {
      email,
      password
    })

    if (response.status !== 201) throw new Error('fetch error')
    await router.push('/login')
  }

  return (
    <form onSubmit={handleSubmit} id={'form'} className={styles.form}>
      <input type={'email'} name={'email'} className={styles.form_input} placeholder={'email@gmail.com'} />
      <input type={'password'} name={'password'} className={styles.form_input} placeholder={'password'} />
      <input type={'password'} name={'repeatPassword'} className={styles.form_input} placeholder={'repeat password'} />
      <button type={'submit'} className={styles.form_btn}>Registration</button>
    </form>
  );
};

export default Registration;
