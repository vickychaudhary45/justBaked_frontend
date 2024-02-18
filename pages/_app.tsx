import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/shared/Layout";
import "../styles/css/layout.scss";
import "../styles/css/homepage.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
