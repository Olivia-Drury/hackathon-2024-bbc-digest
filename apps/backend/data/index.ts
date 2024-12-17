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
  newsArticles: loadJsonFiles(path.join(__dirname, 'news')),
  // iplayerProgrammes: loadJsonFiles(path.join(__dirname, 'iplayer')),
  // soundsProgrammes: loadJsonFiles(path.join(__dirname, 'sounds')),
};
