const countries=require("./countries.js");
const webTechs=require("./web_tech.js");
console.log(countries);
console.log(webTechs);
const arr = Array();
        document.getElementById("addmore").addEventListener("click", (e) => {
            e.preventDefault();
            const form = document.getElementById("takeArr");
            const inputcount = form.getElementsByTagName("input").length;
            const newinput = document.createElement("input");
            newinput.id = "input" + (inputcount + 1);
            newinput.name = "input" + (inputcount + 1);
            form.appendChild(newinput)
        });
        document.getElementById("btn").addEventListener("click", (e) => {
            const inputs = document.getElementsByTagName("input");
            for (const input of inputs) {
                if (input.value.trim() !== '') {
                    arr.push(input.value);
                }
            }
            console.log(arr);
        });