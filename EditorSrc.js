$(function () {
  var a, b;
  var c = 0; /*入場制限*/
  var x = document.getElementById("konzatu");
  var pass;

  function save() {
    console.log(a);
    $.post( pass + "save.php", 'ninzu='+a );
  }

  function load() {
    $.ajaxSetup({async: false});//同期通信(json取ってくるまで待つ)
    $.getJSON(pass + "load.php",function(j){
      a = j.ninzu;
    });
    $.ajaxSetup({async: true});
    check();
    $("#ninzu").html(a);
    $("#konzatu").html(b);
    $("#max").html(c);
  }

  function calculator(id) {
    switch(id) {
      case "plus":
        ++a;
        break;
      case "minus":
        --a;
        if (a<0) {
          a=0;
        }
        break;
      case "clear":
        a = 0;
      }
  }

  function check() {
    b = Math.floor(a / c * 100);
    if(b>100){
      x.style.color = "red";
      window.alert('入場制限を超えています!!');
    }else if(b>=90){
      x.style.color = "red";
    }else if(b>=80){
      x.style.color = "orange";
    }else if(b<=30){
      x.style.color = "blue";
    }else{
      x.style.color = "black";
    }
  }

  function click(id) {
    calculator(id);
    check();
    $("#ninzu").html(a);
    $("#konzatu").html(b);
    $("#max").html(c);

    save();
  }
 
  window.onload= function() {
    $.ajaxSetup({async: false});//同期通信(json取ってくるまで待つ)
    $.getJSON("setting.json",function(j){
      console.log(j.max);
      c = j.max;
      pass = j.APIPass;
    });
    $.ajaxSetup({async: true});
    load();
  };
  $('.calbutton').click(function() {
    click($(this).attr("id"));
  });

});