import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="bg-white dark:bg-gray-900 relative w-screen h-screen transition-colors ease-in-out delay-100">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-9 flex items-center justify-between gap-5 w-4/6 md:w-6/12 lg:w-2/6 transition-colors ease-in-out delay-100">
        <span className="dark:text-white text-5xl font-extrabold transition-colors ease-in-out delay-100">
          404
        </span>
        <div className="border border-gray-900 h-10 dark:border-white transition-colors ease-in-out delay-100"></div>
        <div className="dark:text-white transition-colors ease-in-out delay-100 flex flex-col">
          <span>This content cannot be found.</span>
          <Link href="/" className="text-blue-700 font-bold">
            Back to home...
          </Link>
        </div>
      </div>
    </div>
  );
}
