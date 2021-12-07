import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { Dropdown, Link } from "@cancer-council-queensland/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="p-8 flex justify-end">
        <Dropdown
          label="A dropdown that does navigation"
          color="primary"
          data-theme="palassist"
        >
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </Dropdown>
      </div>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
