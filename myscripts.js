function calculate(){
    var p = 0;
    var i = 0;
    var n = 0;
    var t = 0;

    p = parseInt(document.getElementById("principal").value);
    i = parseInt(document.getElementById("rate").value);
    n = parseInt(document.getElementById("period").value);

    t = ((p*(1+i)^n)-p);
    document.getElementById("res").innerHTML=t;
}