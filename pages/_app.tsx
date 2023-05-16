import "@/styles/globals.css";
import "@/styles/nprogress.css";


import NProgess from "nprogress";

import type { AppProps } from "next/app";
import { useEffect } from "react";

import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    // if (isDark) {
    //   localStorage.setItem("theme", "dark");
    // } else {
    //   localStorage.removeItem("theme");
    // }

    // if (
    //   localStorage.theme === "dark" ||
    //   (!("theme" in localStorage) &&
    //     window.matchMedia("(prefers-color-scheme: dark)").matches)
    // ) {
    //   document.documentElement.classList.add("dark");
    // } else {
    //   document.documentElement.classList.remove("dark");
    // }

    router.events.on("routeChangeComplete", () => NProgess.done());
    router.events.on("routeChangeError", () => NProgess.done());
    router.events.on("routeChangeStart", () => NProgess.start());

    return () => {
      router.events.off("routeChangeComplete", () => NProgess.done());
      router.events.off("routeChangeError", () => NProgess.done());
      router.events.off("routeChangeStart", () => NProgess.start());
    };
  }, [router.events]);
  return (
    <>
      {/* <div className="fixed bottom-2 right-2 z-50">
        <button
          className="bg-indigo-500 w-10 h-10 rounded-full hover:bg-indigo-700 focus:ring-4 active:bg-indigo-500"
          onClick={() => setIsDark(!isDark)}
        >
          <FontAwesomeIcon icon={faMoon} className="text-white" />
        </button>
      </div> */}
      <Component {...pageProps} />
    </>
  );
}
