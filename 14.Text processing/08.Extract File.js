function extract(str) {
    let fileInfo = str.split("\\").pop();
    let name = fileInfo.substring(0, fileInfo.lastIndexOf("."));
    let ext = fileInfo.substring(fileInfo.lastIndexOf(".") + 1);
    console.log(`File name: ${name}\nFile extension: ${ext}`);
}
extract("C:\\Internal\\training-internal\\Template.pptx");