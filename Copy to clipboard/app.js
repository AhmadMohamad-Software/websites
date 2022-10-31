
function copy1(txt){
var txtinput = document.createElement("textarea");
document.body.appendChild(txtinput);
txtinput.value = txt;
txtinput.select();
document.execCommand("copy");
document.body.removeChild(txtinput);
alert("تم نسخ النص بنجاح");
}


function copy2(txt){
  navigator.clipboard.writeText(txt);
  alert(" 3 تم نسخ النص بنجاح");
}
