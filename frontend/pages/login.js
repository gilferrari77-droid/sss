import { useState } from "react";
import { login } from "../services/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin() {
    await login(email, senha);
    window.location.href = "/dashboard";
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={e => setSenha(e.target.value)} />

      <button onClick={handleLogin} className="bg-blue-500 text-white p-2 mt-4">
        Entrar
      </button>
    </div>
  );
}