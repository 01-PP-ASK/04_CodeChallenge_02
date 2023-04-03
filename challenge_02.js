/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */




let name = prompt("Bitte geben Sie Ihren Namen ein:");
let age = parseInt (prompt("Bitte geben Sie Ihr Alter ein:"));



// age >=0 && age <=5   // Milch  --> age > 0 AND age < 6
// age <=6 && age <=12  // Saft
// age <=13 && age <=17 // Cola
// age <=18  // Wein


const cond = true;


switch (cond) {
    case (age >=0 && age <=5):
        console.log(name + " trinkt Milch");
        break;

    case (age >=6 && age <=12):
        console.log(name + " trinkt Saft");
        break;

    case (age >=13 && age <=17):
        console.log(name + " trinkt Cola!");
        break;

    case (age >=18):
        console.log(name + " trinkt Wein!");
        break;
    
        default:
        console.log(name + " trinkt vielleicht besser nix mehr");
        break;
    }

