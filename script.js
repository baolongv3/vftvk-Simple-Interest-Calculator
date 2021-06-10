function compute() {
    var p = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = p * rate * years / 100;
    var year = new Date().getFullYear() + parseInt(years);
    if(p <= 0){
        alert('Please input a positive number');
        document.getElementById("principal").focus();
        return;
    }

    document.getElementById('result').innerText = `\n If you deposit <mark>${p}</mark> \n at an interest rate of <mark> ${rate}% </mark>\n You will receive an amount of  <mark> ${interest} </mark>\n in the year of <mark> ${year} </mark>`;
}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + '%';
}
