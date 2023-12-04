var arrayExams = [];

arrayExams[0] = {
    name: "Philosophy",
    date: "08.12.2023",
    classroom: "zoom"
};

arrayExams[1] = {
    name: "English",
    date: "11.12.2023",
    classroom: "18"
};

arrayExams[2] = {
    name: "AI",
    date: "13.12.2023",
    classroom: ""
};

arrayExams[3] = {
    name: "System analysis",
    date: "16.12.2023",
    classroom: "73"
};

arrayExams[4] = {
    name: "Knowledge management",
    date: "20.12.2023",
    classroom: "108"
};

arrayExams[5] = {
    name: "Decision-making methods",
    date: "29.11.2023",
    classroom: "zoom"
};
arrayExams[6] = {
    name: "Mechanical engineering",
    date: "18.12.2023",
    classroom: ""
};
function ras_diff_Days(text) {
    var currentDate = new Date();/*"2023-12-17" */
    var date1 = new Date(text.replace(/(\d+)\.(\d+)\.(\d+)/, '$3/$2/$1'));

    let timeDiff = date1.getTime() - currentDate.getTime();
    let daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24))+1;
    return daysDiff;
}

function print(item){
	var text = item['date'];
	var diffDays = ras_diff_Days(text);


if (diffDays < 0) {
    html = html + "<tr style='color:white;background-color:rgba(55, 143, 137, 0.68);'>";
    diffDays = "Іспит проведено";
} else if (diffDays === 0) {
    html = html + "<tr style='color:yellow;background-color:#00365c;'>";
    diffDays = "Іспит сьогодні";
} else if (diffDays === 1) {
    html = html + "<tr style='color:black; background-color: yellow;'>";
    diffDays = "Сьогодні консультація";
} else {
    
    diffDays = "Іспит через " + diffDays + " днів";
}

    
    var text1 = item['classroom'];
	if (text1 == "") {
		text1 = "Невідома аудиторія";
	}

    for (var key in item ){
        if (key == "classroom" &&  item[key]=="" ) {
           item[key]= "Невідома аудиторія";
         }
           html = html + "<td>" + item[key] + "</td>";
         }

    html = html +  "<td>" + diffDays + "</td>";
	html = html + "</tr>";

}

function ras() {
    html = "<table style='table; background: white; color:black;'>";
    html=html+"<tr ><td>Назва дисципліти</td><td>Дата іспиту</td><td>Аудиторія</td><td>Повідомлення</td></tr>";

    arrayExams.forEach(print);
    html += "</table>";
    document.getElementById('result').innerHTML = html;
}
