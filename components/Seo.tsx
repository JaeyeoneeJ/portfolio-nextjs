import Head from "next/head";

interface ITitleProps {
  title?: string;
}
export default function Seo({ title }: ITitleProps) {
  return (
    <Head>
      <title>{title && `${title} - `}jaeyeonee's portfolio</title>
    </Head>
  );
}
