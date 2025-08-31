import fs from 'fs';
import archiver from 'archiver';

export function createZip(modelPath, outZipPath) {
  const output = fs.createWriteStream(outZipPath);
  const archive = archiver('zip', { zlib: { level: 9 } });

  archive.pipe(output);
  archive.file(modelPath, { name: 'monster.glb' });
  archive.finalize();
}