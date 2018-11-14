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
})
