import { useContext, FormEvent } from "react";

import Head from "next/head";
import Image from "next/image";
import styles from "../../src/styles/home.module.scss";

import logoImg from "../../public/logo.svg";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";

import { AuthContext } from "../contexts/AuthContext";

import Link from "next/link";

export default function Home() {
  const { signIn } = useContext(AuthContext);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    let data = {
      email: "algum@teste.com",
      password: "123123",
    };
    await signIn(data);
  }
  return (
    <>
      <Head>
        <title>Sujeito Pizzaria - Faça Login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Sujeito Pizzaria" />
        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input placeholder="Email" type="text" />
            <Input placeholder="Senha" type="password" />

            <Button type="submit" loading={false}>
              Acessar
            </Button>
          </form>
          <Link className={styles.text} href="/signup">
            <span>Não possuí uma conta? Cadastre-se</span>
          </Link>
        </div>
      </div>
    </>
  );
}
