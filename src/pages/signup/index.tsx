import Head from "next/head";
import Image from "next/image";

import styles from "./signup.module.scss";

import logoImg from "../../../public/logo.svg";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";

import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Faça seu cadastro agora!</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Sujeito Pizzaria" />
        <div className={styles.login}>
          <h1>Criando sua conta</h1>
          <form>
            <Input placeholder="Nome" type="text" />
            <Input placeholder="Email" type="text" />
            <Input placeholder="Senha" type="password" />
            <Button type="submit" loading={false}>
              Cadastrar
            </Button>
          </form>
          <Link className={styles.text} href="/">
            <span>Já possuí uma conta? Faça login!</span>
          </Link>
        </div>
      </div>
    </>
  );
}
