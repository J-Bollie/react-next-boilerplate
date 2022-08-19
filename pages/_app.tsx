import type { AppProps } from "next/app";
import "./GlobalStyle.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
