
document.getElementById("btn").addEventListener("click",(e)=>
{
    e.preventDefault();
    const age=document.getElementById("age").value;
    console.log(age);
    (age>30)?document.getElementById("output").innerText="You are eligible for drive ,you are  " +age:document.getElementById("output").innerText="You are not eligible for drive, wait for  "+(30-age)+"  year";
// if(age>30)
// { 

// document.getElementById("output").innerText="You are eligible for drive ,you are  " +age;
// }
// else{
//     document.getElementById("output").innerText="You are not eligible for drive, wait for  "+(30-age)+"  year";
// }

//Part2 
const marks=document.getElementById("marks").value;
switch (true) {
    case marks>80:
        document.getElementById("output1").innerText='A'
        break;
    case marks>70:
        document.getElementById("output1").innerText='B';
        break;
    case marks>70:
            document.getElementById("output1").innerText='C';
            break;
    case marks>70:
        document.getElementById("output1").innerText='D';
                break;
    case marks>50:
        document.getElementById("output1").innerText='D';
        break;
    default:
        break;
}
})
