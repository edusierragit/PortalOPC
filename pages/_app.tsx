import "@/styles/globals.css";
import "@/styles/nprogress.css";
import NProgress from "nprogress";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Configuración de temas oscuros y claros
    // const isDark = false; // Define tu estado para el tema oscuro/claro
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

    // Configuración de NProgress para mostrar la barra de progreso en el cambio de rutas
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
