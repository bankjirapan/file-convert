import fs from "fs";
import path from "path";
import sharp from "sharp";

function extractFileExtenstion(fileName) {
  const lastDotIndex = fileName.lastIndexOf(".");
  const fileNameWithoutExtension = fileName.substring(0, lastDotIndex);
  const fileExtension = fileName.substring(lastDotIndex + 1);

  console.log("File Name without Extension:", fileNameWithoutExtension);
  console.log("File Extension:", fileExtension);

  return {
    original: fileExtension,
    fileWithoutExtension: fileNameWithoutExtension,
  };
}
async function readLocalFiles(sessionId) {
  const folderPath = `uploads/${sessionId}/`;
  const filesList = await fs.readdirSync(folderPath).map((fileName) => {
    return {
      folderPath: `uploads/${sessionId}/`,
      path: path.join(folderPath, fileName),
      fileName: fileName,
    };
  });
  return filesList;
}

async function Convert(sessionId, extension) {
  if (!sessionId && extension) {
    return null;
  }

  const filesDir = await readLocalFiles(sessionId);
  filesDir.map(async (files) => {
    const file = await fs.readFileSync(files.path);
    const { fileWithoutExtension } = extractFileExtenstion(files.fileName);
    const fileConvetedPath = `${files.folderPath}/${fileWithoutExtension}.${extension}`;
    await sharp(file).toFormat(extension).toFile(fileConvetedPath);
  });
}

async function ReadFileConvert(sessionId) {
  if (!sessionId) {
    return null;
  }
  const filesDir = await readLocalFiles(sessionId);
  filesDir.map(async (files) => {
    const imageBese64 = await fs.readFileSync(files.path, "base64url");
  });
}

async function GetFileFormDisk(sessionId, originalfileName,fileType) {
  const filesDir = await readLocalFiles(sessionId);
  const fileName = `${originalfileName}`.split(":")[0]
  const requestFileName = extractFileExtenstion(fileName)
  const fileConvertedName = `${requestFileName.fileWithoutExtension}.${fileType}`
  const fileMatching = filesDir.find((files) => {
    return files.fileName == fileConvertedName;
  });
  return fileMatching;
}

export { Convert, ReadFileConvert, GetFileFormDisk };
