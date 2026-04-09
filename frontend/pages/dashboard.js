import { useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [file, setFile] = useState(null);
  const [resultado, setResultado] = useState(null);

  async function enviar() {
    const formData = new FormData();
    formData.append("image", file);

    const res = await axios.post("http://localhost:3001/upload", formData);
    setResultado(res.data);
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl">Dashboard</h1>

      <input type="file" onChange={e => setFile(e.target.files[0])} />

      <button onClick={enviar} className="bg-blue-500 text-white px-4 py-2 mt-3">
        Corrigir
      </button>

      {resultado && (
        <div className="mt-5">
          <p>Acertos: {resultado.acertos}</p>
          <p>Nota: {resultado.nota}</p>
        </div>
      )}
    </div>
  );
}