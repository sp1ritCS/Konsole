function enter() {
    var cmd = document.getElementById("command").value;
    if(cmd == `help`){
        var output = `${cmd}<br>chaos: tja...<br>fix: falls man "chaos" verwendet hat<br>echo "text": Schreibe den Text in die Konsole (WIP)<br>crash: Überleg mal<br>`;
    }
    else if(cmd == "echo"){
        var output = `${cmd}<br>Fehler: Befehl nicht unterstützt<br>`;
    }
    else if(cmd == "chaos") {
        document.getElementById("console").style.transform = "rotate(180deg)";
        var output = `${cmd}<br>Abgeschlossen<br>`;
    }
    else if(cmd == "fix") {
        document.getElementById("console").style.transform = "rotate(0deg)";
        var output = `${cmd}<br>Abgeschlossen<br>`;
    }
    else if(cmd == "info") {
        var output = `${cmd}<br>JS Console von Philipp4<br>`
    }
    else if(cmd == "crash") {
        txt = "a";
            while(1){
                txt = txt += "a";   
            }
    }
    else{
        var output = `${cmd}<br>Fehler: Befehl nicht gefunden<br>`
    }
    document.getElementById("console").innerHTML += output + ">>";
    document.getElementById("console").innerHTML = alltext;
}