import fs from 'fs';
import path from 'path';

function loadJsonFiles(folderPath: string) {
  return fs
    .readdirSync(folderPath)
    .filter((file) => file.endsWith('.json'))
    .map((file) => {
      const filePath = path.join(folderPath, file);
      return require(filePath);
    });
}

export const data = {
  news: loadJsonFiles(path.join(__dirname, 'news')),
  iPlayer: loadJsonFiles(path.join(__dirname, 'iPlayer')),
  sounds: loadJsonFiles(path.join(__dirname, 'sounds')),
};
