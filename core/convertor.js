import fs from "fs";
import path from "path";
import sharp from "sharp";

export async function Convert(sessionId, extension) {
  if (!sessionId && extension) {
    return null;
  }
  const folderPath = "uploads/" + sessionId + "/";
  const filesList = await fs.readdirSync(folderPath).map((fileName) => {
    return {
      path: path.join(folderPath, fileName),
      fileName: fileName,
    };
  });
  filesList.map(async (files) => {
    const file = await fs.readFileSync(files.path);
    const splitExtension = files.fileName.split(".");
    const fileConvetedPath = `${folderPath}/${splitExtension[0]}-done.${extension}`;
    await sharp(file).toFile(fileConvetedPath);
  });
}
