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


// function ras_diff_Days(text) {
//     var currentDate = new Date("2023-12-07");
//     var date1 = new Date(text.reclassroom(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));

//     let timeDiff = date1.getTime() - currentDate.getTime();
//     let daysDiff = Math.round(timeDiff / (1000 * 3600 * 24)) - 1;
//     return daysDiff;
// }

// function print(item) {
//     var html = ""; // Declare the variable here
//     var text = item['date'];
//     var diffDays = ras_diff_Days(text);

//     if (diffDays < 0) {
//         html = "<tr style='background-color: #f58a75;'>";
//         diffDays = "Іспит проведено";
//     } else if (diffDays === 0) {
//         html = "<tr style='background-color: #faff86;'>";
//         diffDays = "Іспит сьогодні";
//     } else if (diffDays === 1) {
//         html = "<tr style='background-color: #aaee82;'>";
//         diffDays = "Сьогодні консультація";
//     } else {
//         diffDays = "Іспит через " + diffDays + " днів";
//     }

//     var text1 = item['classroom'];
//     if (text1 == "") {
//         text1 = "Невідома аудиторія";
//     }

//     for (var key in item) {
//         if (key == "classroom" && item[key] == "") {
//             item[key] = "Невідома аудиторія";
//         }
//         html = html + "<td>" + item[key] + "</td>";
//     }

//     html = html + "<td>" + diffDays + "</td>";
//     html = html + "</tr>";

//     document.getElementById('result').innerHTML += html; // Use '+=' to append to innerHTML
// }

// function ras() {
//     var html = "<table style='table; background: #ccccf4'>";

//     html = html + "<tr><td>Назва дисципліти</td><td>Дата іспиту</td><td>Аудиторія</td><td>Повідомлення</td></tr>";

//     arrayExams.forEach(print);
//     html = html + "</table>";
//     document.getElementById('result').innerHTML = html;
// }
function displayExams() {
    var html = "<table class='b-table'><tr><th>Назва іспиту</th><th>Дата іспиту</th><th>Консультація</th><th>Місце проведення</th><th>Дні до консультації</th></tr>";

    arrayExams.forEach(function (item) {
        var diffDays = ras_diff_Days(item.date);
        var rowStyle = getRowStyle(diffDays);
        html += `<tr class='${rowStyle}'>`;

        for (var key in item) {
            html += `<td>${item[key]}</td>`;
        }

        // Перевірка, чи іспит вже відбувся
        if (diffDays < 0) {
            html += `<td>Відбувся</td>`;
        } else {
            // Перевірка, чи вказана аудиторія
            if (item.classroom == "") {
                html += `<td>Невідоме місце проведення консультації/іспиту</td>`;
            } else {
                html += `<td>${item.classroom}</td>`;
            }

            // Перевірка, чи це консультація
            if (diffDays == 1) {
                html += `<td>${item.date}</td>`;
            }
        }

        // Перевірка, чи іспит вже відбувся
        if (diffDays <= 0) {
            html += `<td>Відбувся</td>`;
        } else {
            html += `<td>${diffDays}</td>`;
        }

        html += `</tr>`;
    });

    html += "</table>";
    document.getElementById('result').innerHTML = html;
}



function getRowStyle(diffDays) {
    if (diffDays < 5 && diffDays > 0) {
        return "";
    } else if (diffDays == 0) {
        return "today";
    } else {
        return "warning";
    }
}


// // exam.js

// function displayExams() {
//     var arrayExams = [];

//     arrayExams[0] = {
//         name: "Philosophy",
//         date: "08.12.2023",
//         classroom: "zoom"
//     };

//     arrayExams[1] = {
//         name: "English",
//         date: "11.12.2023",
//         classroom: ""
//     };

//     arrayExams[2] = {
//         name: "AI",
//         date: "13.12.2023",
//         classroom: "18"
//     };

//     arrayExams[3] = {
//         name: "System analysis",
//         date: "16.12.2023",
//         classroom: ""
//     };

//     arrayExams[4] = {
//         name: "Knowledge management",
//         date: "20.12.2023",
//         classroom: "223"
//     };

//     arrayExams[5] = {
//         name: "Decision-making methods",
//         date: "29.11.2023",
//         classroom: "zoom"
//     };

//     var today = new Date();
//     var formattedToday = today.toLocaleDateString("en-GB");

//     var resultDiv = document.getElementById("result");
//     resultDiv.innerHTML = "<h2>Екзаменаційна сесія 2023-2024 н.р. (1 семестр)</h2>";

//     for (var i = 0; i < arrayExams.length; i++) {
//         var examDate = new Date(arrayExams[i].date.split(".").reverse().join("-"));
//         var dayDifference = Math.floor((examDate - today) / (1000 * 60 * 60 * 24));

//         if (dayDifference === 1) {
//             resultDiv.innerHTML += `<p>Завтра іспит з ${arrayExams[i].name} у аудиторії ${arrayExams[i].classroom || "Невідоме місце проведення консультації/іспиту"}</p>`;
//         } else if (dayDifference === 0) {
//             resultDiv.innerHTML += `<p>Сьогодні консультація чи іспит з ${arrayExams[i].name} у аудиторії ${arrayExams[i].classroom || "Невідоме місце проведення консультації/іспиту"}</p>`;
//         }
//     }
// }
