var k=0;
var result='';
var st1='это первый абзац, т.е. первая строка';
function firstLetterst() {
for(var i=0; i<st1.length; i++) {
if(isNaN(st1[i])&&k==0) {
result+=st1.charAt(i).toUpperCase();
k+=1;
}
else if(isNaN(st1[i])&&st1[i-1]==' ') {
result+=st1.charAt(i).toUpperCase();
}
else {
result+=st1[i]; 
}
}
alert(result);
}
firstLetterst();