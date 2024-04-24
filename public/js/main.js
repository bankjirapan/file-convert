var fileType = ''
const upload = new FileUploadWithPreview.FileUploadWithPreview("uploader", {
  maxFileCount: 10,
  multiple: true,
});

document.getElementById("convert-btn").addEventListener("click", (e) => {
  fileType = document.getElementById("file-type").value;
  onUpload(fileType);
});

async function onUpload(fileType) {
  const files = upload.cachedFileArray;
  const formData = new FormData();
  formData.append("filetype", fileType);
  files.map((file, index) => {
    formData.append("file", file);
  });

  await axios
    .post("/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((res) => {
      onUploadSuccess();
    });
//   upload.cachedFileArray();
}

async function onUploadSuccess() {
  document.querySelectorAll(".image-preview-item").forEach((e) => {
        const fileName = e.getAttribute('data-upload-name')
        const divBlock = document.createElement('div')
        const createDiv = document.createElement('div')
        const linkToDownload = document.createElement('a')
        linkToDownload.text = "Download"
        linkToDownload.href = "/download/"+fileName+"?filetype="+fileType
        linkToDownload.target = "_blank"
        divBlock.appendChild(createDiv)
        divBlock.appendChild(linkToDownload)
        createDiv.className = "image-preview-item-success text-center"
        createDiv.style.backgroundImage = e.style.backgroundImage
        document.getElementById('success-list').appendChild(divBlock)
  });
}
