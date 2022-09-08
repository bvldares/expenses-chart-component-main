const columns = document.getElementsByClassName("column")
let values = []

fetch("data.json")
.then(res => res.json())
.then(data =>{
    data.map(day => values.push(day.amount))
    document.querySelector(".statement-expenses").textContent = values.reduce((sum , value) => {
        return sum + value},0).toFixed(2)
    for(let i=0; i<columns.length; i++){
        if(values[i] >= 100){
            values[i] = 100;
        }
        columns[i].style.height = `${values[i]}%`
    }
})



