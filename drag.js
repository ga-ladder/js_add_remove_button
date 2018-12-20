$(function(){
  /* ドラッグ&ドロップで画像投稿 */
  var dropbox;
  /*イベントハンドラを止める1*/
  dropbox = document.getElementById("dropbox");
  dropbox.addEventListener("dragenter", dragenter, false);
  dropbox.addEventListener("dragover", dragover, false);
  dropbox.addEventListener("drop", drop, false);
  /* イベントハンドラを止める method1 */
  function dragenter(e) {
    e.stopPropagation();
    e.preventDefault();
    len = $("#dropbox")[0].children.length;
    if (len < 1){
      element = document.createElement('p')
      element.textContent = "ここにいれてね"
      element
      document.getElementById("dropbox").appendChild(element);
    }
  }

  /* イベントハンドラを止めるmethod2 */
  function dragover(e) {
    e.stopPropagation();
    e.preventDefault();
  }
  /* イベントハンドラを止めるmethod2 */

  function drop(e) {
    e.stopPropagation();
    e.preventDefault();

    var dt = e.dataTransfer;
    var files = dt.files;

    handleFile(files);
  }
  /* 複数のファイルオブジェクトをもらって画像を表示させる */
  function handleFile(fileList) {
    console.log(fileList);

    /* ファイルリストを処理するコードがここに入る */
    var objectURL = window.URL.createObjectURL(fileList[0]);
    console.log(objectURL);
    var imgFile = document.createElement('img');
    imgFile.src = objectURL;

    var imgField = document.getElementById("imgField");
    imgField.appendChild(imgFile);
  }
})
