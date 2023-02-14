const button = document.querySelector("#clickMe")
const container = document.querySelector("#container")

let answerExist = false
let answer 

const writeRiddle = (text) =>{
    const questionBlock = document.createElement("div")
    questionBlock.innerHTML = `<p>${text}</p> <hr/>`
    container.appendChild(questionBlock)
    console.log(text)
}

const fetchData = async() =>{
    const res = await fetch("https://api.api-ninjas.com/v1/riddles",{
        method:"GET",
        headers: { 'X-Api-Key': 'vEfZq9tSmaH+3Z7v+m52Fw==EWrVAS7WBNS3NuTr'},
        contentType: 'application/json',
    });
    const quote = await res.json();
    writeRiddle(quote[0].question)
    answer = quote[0].answer
    console.log(quote[0])
}

fetchData()

// async function fetchData() {
//     const res=await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
//     const record=await res.json();
//     document.getElementById("date").innerHTML=record.data[0].date;
//     document.getElementById("areaName").innerHTML=record.data[0].areaName;
//     document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
//     document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
// }
// fetchData();





button.addEventListener("click",() => {
    if(answerExist === false){
     const answerBlock = document.createElement("div")
    answerBlock.innerHTML= `<p>${answer}</p>`
    container.appendChild(answerBlock)
    answerExist = true
    }
 })