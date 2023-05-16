import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="h-screen  bg-white dark:bg-gray-900 transition-colors duration-500 ease-in-out">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
