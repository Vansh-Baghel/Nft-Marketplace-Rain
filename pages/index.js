import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "./component/Navbar";
import dynamic from "next/dynamic";
import Card from "./component/Card";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        color="247,248,250"
        outerStyle={{
          width: "30px",
          color: "247,248,250",
          height: "30px",
        }}
        trailingSpeed={4}
        outerScale={2}
      />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div >
          <Card />
        </div>
    </>
  );
}
