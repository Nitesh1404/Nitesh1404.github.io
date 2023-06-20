function myFunction() {
	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}


const names = ["John", "joker", "Nitesh", "jasmin", "rahul", "deepak", "kriti", "Jhonny", "kartik"];

for (i = 0; i < names.length; i++) {
	if (names[i].charAt(0) == 'J' || names[i].charAt(0) == 'j') {
		console.log("Goodbye " + names[i])
	}
	else {
		console.log("Hello " + names[i]);
	}

}
