import Head from "next/head";

export default function Sez({ title }) {
  return (
    <Head>
      <title>{title} : Next Movies</title>
    </Head>
  );
}
