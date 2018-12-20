$(function(){
  htmlappend = function(){
    item = `<div class='item' id="item"><button id="remove">remove</button></div>`;
    $("#itemlocation").append(item);
  }
  // addボタンを押したら、htmlappend関数が動いて、items tag の中に itemが追加されていく感じ
  $("#append").on('click',function(){ htmlappend(); })
  // all class がついているdiv tag の中にある remove id がついたボタンを押すとその親要素であるitem が消える
  $(".all").on('click','#remove', function(){

    $(this).parent().remove();
  })

  // file-selectボタンを変更する
  var fileSelect = document.getElementById("fileSelect"),
      fileElem   = document.getElementById("fileElem");

  fileSelect.addEventListener("click", function (e) {
    if (fileElem) {
      fileElem.click();
    }
    e.preventDefault(); // "#" に移動するのを防ぐ
  }, false);

  // fileElem <- input tag が変更されたら files が表示されるようにする
  var inputElement = document.getElementById("fileElem");
  inputElement.addEventListener("change", handleFiles, false);

  var fileList = this.files;
  

  /* 複数のファイルオブジェクトをもらって画像を表示させる */
  function handleFiles() {
  var fileList = this.files;
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
