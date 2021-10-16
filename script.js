    //der eingetragene Name wird in die Variable Name gespeichert
    var name = document.querySelector('input[name="name"]').value;
    console.log(name);
function submitAnswers(){
    var numQuestions = 4;
    var score = 0;
    var answers = ["a","c","a","a"];



    //die ausgewählten Antworten werden geschaut, ob sie gecheked wurden, dann wird der Wert in eine Variable gespeichert
    var f1 = document.querySelector("input[name=aEins]:checked");
    var f2 = document.querySelector("input[name=aZwei]:checked");
    var f3 = document.querySelector("input[name=aDrei]:checked");
    var f4 = document.querySelector("input[name=aVier]:checked");

    //in der Schleife werden die Variabeln der Antworten kontrolliert ob sie Werte haben
    for(i = 1 ; i<= numQuestions; i++){
        if(eval("f"+i) == null){
            alert("Folgende Antwort fehlt noch: " + i);
            return false;
        }
    }

    //hier werden die Werte der Antworten mit den Lösungswerten verglichen und für jede richtige Antwort einen Punkt in den Score gespeichert
    for(i = 1; i <= numQuestions; i++) {
        if(eval("f"+i).value == answers [i - 1]){
            score++;
        }
    }
    //wir nehmen einen div in eine variable um es dann zu überschreiben
    // Ausgegeben wird der Name, die Punkte, die Anzahl der  Gesamtpunkte
    var results = document.getElementById("results");
    results.innerHTML = "<h3>" + name + " du hast <span>" + score + "</span> von <span>" + numQuestions + "</span> Punkten erreicht! </h3>";
    
    //wenn Gesamtpunkte erreicht gebe aus....
    if(score == numQuestions){
        alert(name + ", du hast alles richtig!");
       
    }else if(score>=1){
        alert(name + ", du hast" + score + " von " + numQuestions + " Punkten!");
    } else {
        alert("alles Falsch");
    }
    return false;
}