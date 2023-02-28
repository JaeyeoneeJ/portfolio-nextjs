import Head from "next/head";

export default function Seo({ title }: { title: string }) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
