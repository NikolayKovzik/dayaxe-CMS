export const dataUrlToBlob = (dataUrl: string): Blob => {
  const byteString = atob(dataUrl.split(',')[1]);
  const mimeString = dataUrl.split(',')[0].split(':')[1].split(';')[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([ia], { type: mimeString });
  return blob;
};

export const dataUrlToFile = (dataUrl: string, fileName: string): File => {
  const blobObject = dataUrlToBlob(dataUrl);
  const file = new File([blobObject], fileName);

  return file;
};

export const fileToFileList = (file: File): FileList => {
  const dt = new DataTransfer();
  dt.items.add(file);

  return dt.files;
};
