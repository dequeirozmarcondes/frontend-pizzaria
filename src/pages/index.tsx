import Head from "next/head";
import Image from "next/image";
import styles from "../../src/styles/home.module.scss";

import logoImg from "../../public/logo.svg";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sujeito Pizzaria - Faça Login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Sujeito Pizzaria" />
        <div className={styles.login}>
          <form>
            <Input placeholder="Email" type="text" />
            <Input placeholder="Senha" type="password" />

            <Button type="submit" loading={false}>
              Acessar
            </Button>
          </form>
          <a className={styles.text}>Não possuí uma conta? Cadastre-se</a>
        </div>
      </div>
    </>
  );
}
