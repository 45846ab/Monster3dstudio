import { useState } from "react";

function MonsterForge3D() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [style, setStyle] = useState("fakemon");
  const [resultUrl, setResultUrl] = useState(null);

  const styles = [
    { id: "fakemon", label: "Fakémon" },
    { id: "yugioh", label: "Yu-Gi-Oh!" },
    { id: "duelmasters", label: "Duel Masters" },
    { id: "battlespirits", label: "Battle Spirits" },
    { id: "vanguard", label: "Vanguard" },
    { id: "buddyfight", label: "Buddyfight" }
  ];

  const handleGenerate = async () => {
    const response = await fetch("/gemini3d/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, style, format: "gltf" })
    });
    const data = await response.json();
    setResultUrl(data.artifacts?.[0]?.url || null);
  };

  return (
    <main className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold">MonsterForge 3D</h1>
      <p>Generate fully rigged 3D monsters from just a name or description!</p>

      <div className="space-y-4 p-4 border rounded">
        <input
          placeholder="Name (e.g. VoltJelly)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Description (e.g. A small electric jellyfish...)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <select
          className="w-full border p-2 rounded"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        >
          {styles.map((s) => (
            <option key={s.id} value={s.id}>{s.label}</option>
          ))}
        </select>
        <button onClick={handleGenerate} className="px-4 py-2 bg-blue-600 text-white rounded">
          Generate 3D Model
        </button>
      </div>

      {resultUrl && (
        <div className="border rounded p-4">
          <h2 className="font-semibold">Result</h2>
          <a href={resultUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            Download 3D Model
          </a>
        </div>
      )}
    </main>
  );
}

export default MonsterForge3D;
