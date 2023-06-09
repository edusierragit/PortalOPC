import "@/styles/globals.css";
import "@/styles/nprogress.css";
import NProgress from "nprogress";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
   
    router.events.on("routeChangeComplete", () => NProgress.done());
    router.events.on("routeChangeError", () => NProgress.done());
    router.events.on("routeChangeStart", () => NProgress.start());

    // Limpieza de los eventos de NProgress al desmontar el componente
    return () => {
      router.events.off("routeChangeComplete", () => NProgress.done());
      router.events.off("routeChangeError", () => NProgress.done());
      router.events.off("routeChangeStart", () => NProgress.start());
    };
  }, [router.events]);

  return (
    <>
      {/* Botón para cambiar entre tema oscuro y claro */}
      {/* <div className="fixed bottom-2 right-2 z-50">
        <button
          className="bg-indigo-500 w-10 h-10 rounded-full hover:bg-indigo-700 focus:ring-4 active:bg-indigo-500"
          onClick={() => setIsDark(!isDark)}
        >
          <FontAwesomeIcon icon={faMoon} className="text-white" />
        </button>
      </div> */}
      {/* Renderiza el componente principal */}
      <Component {...pageProps} />
    </>
  );
}
