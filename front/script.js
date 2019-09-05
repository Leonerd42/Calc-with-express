
var ajax = new XMLHttpRequest();  // Usado para fazer as requisições 
var urlDestino = "http://127.0.0.1:3000";

function ReadNumbers() {
    var n1 = document.getElementById('number1').value;
    var n2 = document.getElementById('number2').value;

    console.log(n1, n2); 
    return [n1, n2];
}

function SendCalc(operation) {
    var numbers = ReadNumbers();

    var object = {
        numero1: numbers[0], 
        numero2: numbers[1]
    };

    ClearWarnings();
    PostRequest(operation, object);
}

function PostRequest(path, object){
    ajax.open("POST", `${urlDestino}/${path}`, true);
    ajax.setRequestHeader("Content-Type", "application/json");
    //var stringTosend = JSON.stringify(object); // Transformo o objeto numa string para poder enviar
    //console.log(stringTosend);
    ajax.send(JSON.stringify(object));
    ajax.onreadystatechange = function () {
        // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
        if (ajax.readyState == 4 && ajax.status == 200) {

            var data = ajax.responseText;
            // Retorno do Ajax
            if(data == 'NaN'){
                document.getElementById('withoutNumber').style.display = "block";
            } else if(data == 'divBy0') {
                document.getElementById('divisionByZero').style.display = "block";
            } else {
                $('#Resultado').empty(); 
                $('#Resultado').append(data);
            }
        }
    }
}

function ClearWarnings() {
    document.getElementById('withoutNumber').style.display = 'none';
    document.getElementById('divisionByZero').style.display = 'none';
}