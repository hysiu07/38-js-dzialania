// Stwórz plik "main.js".

// Napisz funkcję, która przyjmuje jako parametry dwie liczby, które przekażesz podczas wywoływania funkcji.

// Funkcja ma dodawać, odejmować i mnożyć liczby przekazane do parametrów i wyświetlać w konsoli następujące stringi:

// 1. "Wynik dodawania wynosi x"
// 2. "Wynik odejmowania wynosi x"
// 3. "Wynik mnożenia wynosi x"

// Gdzie x jest wynikiem danego działania.

// Natomiast jeżeli wynikiem jest liczba ujemna, w konsoli powinien pojawić się string:
// "Wynik jest nieprawidłowy"

// Plik wgraj do zdalnego repozytorium i podeślij link do sprawdzenia.

function operations(x, y) {
	let add = x + y;
	let sub = x - y;
	let multi = x * y;

	if (add > 0) {
		console.log(`Wynik dodawania wynosi ${add}`);
	} else {
		console.log(`Wynik dodawania jest nieprawidłowy`);
	}

	if (sub > 0) {
		console.log(`Wynik odejmowania wynosi ${sub}`);
	} else {
		console.log(`Wynik odejmowania jest nieprawidłowy`);
	}

	if (multi > 0) {
		console.log(`Wynik mnożenia wynosi ${multi}`);
	}else {
        console.log(`Wynik mnożenia jest nieprawidłowy`);
    }
}

operations(160,3)
