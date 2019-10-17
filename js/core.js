const konsolejs = {
  bindings: {
    body: document.getElementById("console"),
    cmd: document.getElementById("command"),
    reset() {
      this.cmd.value = "";
    },
    injectKM() {
      document.addEventListener("keypress", e => {
        switch (e.keyCode) {
          case 13:
            konsolejs.enter();
        }
      });
    }
  },
  enter() {
    const args = this.bindings.cmd.value.split(" ");
    const argc = args.length;
    var cmd = args[0];
    switch (cmd) {
      case `help`:
        var output = `${cmd}<br>chaos: tja...<br>fix: falls man "chaos" verwendet hat<br>echo "text": Schreibe den Text in die Konsole (WIP)<br>crash: Überleg mal<br>gey: hmmm...<br>info: Info halt<br>`;
        break;
      case `echo`:
        if (argc > 1 && argc < 3) {
          var output = `${cmd} <br>${args[1]}<br>`;
        }else{
          var output = `${cmd} <br>Usage: <b>echo string</b><br>`;
        }
        break;
        break;
      case `chaos`:
        this.bindings.body.style.transform = "rotate(180deg)";
        var output = `${cmd}<br>Abgeschlossen<br>`;
        break;
      case `fix`:
        document.getElementById("console").style.transform = "rotate(0deg)";
        var output = `${cmd}<br>Abgeschlossen<br>`;
        break;
      case `info`:
        var output = `${cmd}<br>Geilste JS Konsole ever V2<br>`
        break;
      case `js`:
        var string = "";
        args.shift();
        args.forEach((el, index) => {
          string += el + " ";
        })
        var output = `${this.bindings.cmd.value} <br>${eval(string)}<br>`;
        break;
      case `crash`:
        txt = "a";
        while (1) {
          txt = txt += "a";
        }

      case `gay`:
        var output = `${cmd}<br>Ur Gey<br>`
        break;        break;
      default:
        var output = `${cmd}<br>Fehler: Befehl nicht gefunden<br>`;
    }
    this.bindings.reset();
    this.bindings.body.innerHTML += output + ">>";
  }
};
