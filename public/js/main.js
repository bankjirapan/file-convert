const upload = new FileUploadWithPreview.FileUploadWithPreview('uploader',{
    maxFileCount: 10,
    multiple: true,
});


document.getElementById('convert-btn').addEventListener('click', (e) => {
    onUpload()
})

async function onUpload() {

    const files = upload.cachedFileArray;

    const formData = new FormData();


    files.map((file,index) => {
        formData.append('file', file);
    })


    await axios.post("/upload", formData, {
     headers: { "Content-Type": "multipart/form-data" },
    }).then((res) => {
        console.log(res)
    } );

}