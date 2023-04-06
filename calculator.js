function hitungLuas(){
    let tinggi = document.getElementById("tinggi").value;
    let alas = document.getElementById("alas").value;
    let luas = tinggi * alas;
    let total = luas/2;
    document.getElementById("hasilHitung").innerHTML = total;
    document.getElementById("alasItung").innerHTML = alas;
    document.getElementById("tinggiItung").innerHTML = tinggi;

    document.getElementById("hasil").style.visibility = "visible";
}

function hitungLuasJajar(){
    let tinggi = document.getElementById("tinggi").value;
    let alas = document.getElementById("alas").value;
    let luas = tinggi * alas;

    document.getElementById("hasilHitung").innerHTML = luas;
    document.getElementById("alasItung").innerHTML = alas;
    document.getElementById("tinggiItung").innerHTML = tinggi;

    document.getElementById("hasil").style.visibility = "visible";
}