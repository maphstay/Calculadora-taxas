function parc () {
    let val1 = document.getElementById('parc').value;
    document.getElementById('parc2').value = (`${val1}x`)
}



function calc () {
    let fpgmto = document.getElementById('formapgto').value;
        if (fpgmto == "db") {
            document.getElementById('nparc').textContent = "";
            document.getElementById('lparc').style = "display: none";
            document.getElementById('parc2').style = "display: none";
            document.getElementById('currency2').style = "display: none";
            document.getElementById('currency3').style = "text-align: center";
            let val1 = Number(document.getElementById('currency1').value);
            let res = val1 + (val1*0.0203);
            document.getElementById('currency3').value = res.toFixed(2)
        } else if (fpgmto == "ca") {
            document.getElementById('nparc').textContent = "";
            document.getElementById('lparc').style = "display: none";
            document.getElementById('currency2').style = "display: none";
            document.getElementById('parc2').style = "display: none";
            document.getElementById('currency3').style = "text-align: center";
            let val1 = Number(document.getElementById('currency1').value);
            let res = val1 + (val1*0.0498);
            document.getElementById('currency3').value = res.toFixed(2)
        } else if (fpgmto == "cp"){
            document.getElementById('parc2').style = "display: ruby";
            document.getElementById('currency2').style = "display: ruby";
            document.getElementById('nparc').textContent = "Parcelas:";
            document.getElementById('lparc').style = "display: ruby";
            document.getElementById('calc1').style = "display: ruby";
            document.getElementById('currency3').style = "text-align: left";
            let val1 = Number(document.getElementById('currency1').value);
            let parcela = Number(document.getElementById('parc').value);
            let juros = parcela;
            switch (juros) {
                case 1:
                    juros = 0
                    break;
                case 2:
                    juros = 0.0484
                    break;
                case 3:
                    juros = 0.0657
                    break;
                case 4:
                    juros = 0.0835
                    break;
                case 5:
                    juros = 0.1017
                    break;
                case 6:
                    juros = 0.1161
                    break;
                case 7:
                    juros = 0.1213
                    break;
                case 8:
                    juros = 0.1291
                    break;
                case 9:
                    juros = 0.1420
                    break;
                case 10:
                    juros = 0.1547
                    break;
                case 11:
                    juros = 0.1673
                    break;
                case 12:
                    juros = 0.1791
                    break;
            }
            let res = val1 + (val1*(0.0561+juros));
            document.getElementById('currency3').value = (res/parcela).toFixed(2)
            document.getElementById('currency2').value = res.toFixed(2)
        }
}   