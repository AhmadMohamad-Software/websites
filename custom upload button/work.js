function getFileInfo(){
    const myFile =  document.getElementById('file-upload').files[0];
    var fileSize= myFile.size;
    alert(fileSize);
}