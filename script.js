console.log('Witaj w czeluściach tego "kodu"')
console.log("Tak w  sumie to nie wiem co tu robić z tym JS-em więc w sumie to zrobię losowe coś, żeby pan nie krzyczał. Oprócz funkcji button to nie ma zbyt związku ze stroną no ale...")

//alert, event
function button() {
    alert('Sprawdź konsolę, tam dzieje się cała magia.');
}

//deklaracja let,var sprawdzanie typu danych, console.log z użyciem danych let

let age = 14;
var city = "Warszawa";
let student = true;

console.log(typeof age); 
console.log(typeof city); 
console.log(typeof student); 

console.log(`You are ${age} years old`); 
console.log(`Your city is ${city}`);
console.log(`You are student: ${student}`);

//deklaracja const, wypisywanie wartości deklaracji const

const pi = 3.1415

console.log(`liczba pi wynosi (w przybliżeniu): ${pi}`);

//operator matematyczny (-) z wykorzystaniem funkcji roznica

function roznica(a, b)
{
    return a-b
}

var x = 10;
var y = 6;

var wynik = roznica(x, y);

console.log(`Różnica wynosi: ${wynik}`);

//łączenie znaków i cyfr

let a = 5+5;
let b = "7"+5;
let c = "Hello"+10;
let d = "Hello"+"World";

console.log(a, b, c, d);

//obiekty, if, sprawdzanie wartości, true=id

var pojazd = {
    typ: "Samochód osobowy",
    marka: "Seat",
    model: "Ibiza",
    rok_prod: 2002,
    kolor: "czerwony",
    id: "123456789"
};

if (pojazd.typ === "Samochód osobowy" && pojazd.marka === "Seat" && pojazd.model === "Ibiza" && pojazd.rok_prod === 2002 && pojazd.kolor === "czerwony") {
    console.log("ID pojazdu to: " + pojazd.id);
} else {
    console.log("Nie znaleziono pojazdu");
}

