


const queryString = window.location.search;

console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const q1 = urlParams.get('question-1');
console.log(q1);

const q2 = urlParams.get('question-2');
console.log(q2);

const q3 = urlParams.get('question-3');
console.log(q3);

const q4 = urlParams.get('question-4');
console.log(q4);

const name = urlParams.get('name');
console.log(name);


if(q2 == "10" || q3 == "8" || q4 == "yes"){
   
    document.getElementById("name").innerHTML = name;
    document.getElementById("contact").innerHTML = "Contact me to get Quote";
    document.getElementById("beforeResult").innerHTML = "Your Total Bill is ";
    document.getElementById("showResult").innerText = " £0.00";
   
    
}
else{
    
    document.getElementById("name").innerHTML = name;
    var result = parseInt(q1) * parseInt(q2) * parseInt(q3);
    document.getElementById("beforeResult").innerHTML = "Your Total Bill is ";
    document.getElementById("showResult").innerText = " £"+result+".00";
    
}