var fileType = "";
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

  const config = {
    onUploadProgress: function (progressEvent) {
      var percentCompleted = '1%'
      percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      document.getElementById('upload-status').style.display = 'block'
      document.getElementById('upload-status-bar').style.width = `${percentCompleted}%`
    },
  };

  await axios.put("/upload", formData, config).then((res) => {
    onUploadSuccess();
  });
  //   upload.cachedFileArray();
}

async function onUploadSuccess() {
  document.querySelectorAll(".image-preview-item").forEach((e) => {
    const fileName = e.getAttribute("data-upload-name");
    const divBlock = document.createElement("div");
    const createDiv = document.createElement("div");
    const linkToDownload = document.createElement("a");
    linkToDownload.text = "Download";
    linkToDownload.href = "/download/" + fileName + "?filetype=" + fileType;
    linkToDownload.target = "_blank";
    divBlock.appendChild(createDiv);
    divBlock.appendChild(linkToDownload);
    createDiv.className = "image-preview-item-success text-center";
    createDiv.style.backgroundImage = e.style.backgroundImage;
    document.getElementById("success-list").appendChild(divBlock);
  });
}
