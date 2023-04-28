import Image from "next/image";
import { Inter } from "next/font/google";
import Form from "./components/form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Form />
      </div>
    </main>
  );
}
