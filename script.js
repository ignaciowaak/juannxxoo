document.getElementById('download-btn').addEventListener('click', function() {
  var pdfUrl = document.getElementById('pdf-viewer').src;
  var fileName = pdfUrl.substring(pdfUrl.lastIndexOf('/')+1);
  fetch(pdfUrl)
    .then(response => response.blob())
    .then(blob => {
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    })
    .catch(error => console.error('Error al descargar el PDF:', error));
});

window.onload = function() {
  document.querySelector('.pdf-viewer-wrapper').style.height = 'auto';
};