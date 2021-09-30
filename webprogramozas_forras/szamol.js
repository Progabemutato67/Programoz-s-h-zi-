function szamol(){
    var sa = document.getElementById("a").value;
    var sb = document.getElementById("b").value;
    var sc = document.getElementById("c").value;
    var gysz; //gyökök száma

if (isNAN(sa) || isNAN(sb) || isNAN(sc) || sa== "" || sb=="" || sc==""){
    gsz = "hiba"
}
else{
    var a = parseFloat(sa);
    var b = parseFloat(sb);
    var c = parseFloat(sc);
    var gysz = Math.sign(D)+1
}
document.getElementById("gysz").innerHTML = gysz;
return false;

}