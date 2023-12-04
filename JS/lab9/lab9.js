class car{
    constructor(color, mark, model, price){
        this.color=color;
        this.mark=mark;
        this.model=model;
    }

    show(){
        let html = "";
		html += "<tr>";
		html += "<td>" + this.color + "</td>";
		html += "<td>" + this.mark + "</td>";
		html += "<td>" + this.model + "</td>";
		html += "</tr>";
		return html;
    }
}

let array = [
    new car('red', 'Toyota', 'Camry'),
    new car('silver','Honda', 'Civic'),
    new car('blue', 'Ford', 'Mustang '),
    new car('black', 'Chevrolet ', 'Malibu')
]

function run(){

	var html = "<table class='b-table'>";
	html += "<tr class='b-table__th'><td>Колір</td><td>Марка</td><td>Модель</td></tr>"
	for (i=0;i<array.length;i++){
		html += array[i].show();
	}
	html += "</table>";
	document.getElementById("result").innerHTML = html;
}