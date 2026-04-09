import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white">
      <h1 className="text-4xl text-blue-500 font-bold">Gabarito AI</h1>

      <Link href="/login">
        <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-xl">
          Entrar
        </button>
      </Link>
    </div>
  );
}