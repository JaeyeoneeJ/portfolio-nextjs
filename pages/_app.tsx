import { lightTheme } from "@/styles/theme";
import { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import "../styles/globals.css";

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={lightTheme}>
        <Head>
          <meta
            name="google-site-verification"
            content="UYOH_HeYIxhP8p-8Ecnna8ngWeebQeiGgYXXEwFq-Bc"
          />
          <meta
            name="description"
            content="jaeyeonee의 웹 포트폴리오입니다. 지금까지 진행한 프로젝트와 저에 대해 설명합니다."
          />
          <meta property="og:title" content="jaeyeonee's portfolio" />
          <meta
            property="og:description"
            content="웹 포트폴리오입니다. 지금까지 진행한 프로젝트와 저에 대해 설명합니다."
          />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="ko_KR" />
          <meta
            property="og:url"
            content="https://portfolio-nextjs-jaeyeoneej.vercel.app/"
          />
          <meta
            property="og:image"
            content="https://portfolio-nextjs-jaeyeoneej.vercel.app//img/main-img.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://portfolio-nextjs-jaeyeoneej.vercel.app/img/main-img.png"
          />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="300" />
          <meta property="og:image:alt" content="portfolio's main image" />
          <title>jaeyeonee&apos;s portfolio</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
}
