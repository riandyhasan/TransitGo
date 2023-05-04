import Head from "next/head";
import Routepage from "@src/pages/Route";

export default function Route() {
  return (
    <>
      <Head>
        <title>TransitGo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Routepage />
    </>
  );
}
