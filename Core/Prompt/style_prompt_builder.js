export function buildPrompt({ name, description, style }) {
  const base = "3D model of a small, bipedal monster";
  const styleMap = {
    fakemon: "in Fakémon style",
    yugioh: "as a Yu-Gi-Oh! monster",
    duelmasters: "as a Duel Masters creature",
    battlespirits: "as a Battle Spirits spirit",
    vanguard: "as a Vanguard unit",
    buddyfight: "as a Buddyfight monster"
  };
  return \`\${base}, named \${name}, \${description}, \${styleMap[style] || ""}\`;
}