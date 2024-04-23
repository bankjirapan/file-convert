const upload = new FileUploadWithPreview.FileUploadWithPreview('uploader',{
    maxFileCount: 10,
    multiple: true,
});


document.getElementById('convert-btn').addEventListener('click', (e) => {
    const fileType = document.getElementById('file-type').value;
    onUpload(fileType)
})

async function onUpload(fileType) {

    const files = upload.cachedFileArray;
    const formData = new FormData();
    formData.append('filetype',fileType)
    files.map((file,index) => {
        formData.append('file', file);
    })


    await axios.post("/upload", formData, {
     headers: { "Content-Type": "multipart/form-data" },
    }).then((res) => {
        console.log(res)
    } );

}