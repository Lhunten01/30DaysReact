import {users} from "./users.js"
const dog={
    name:"BO khey",
    legs:"iron legs",
    color:"b/w",
    bark:["baba","bobo","rrrr","ssss","woofwoof"],
    sound: ()=>{
        return this.bark[0]
    },
};
dog.breed="buldog";
dog.getinfo=()=>
{
    return "i am litte dog"+dog.name+"hww";
}

console.log(Object.keys(dog).length);

//Find people who are MERN stack developer from the users object
for(const user in users)
{
   if(users[user].skills.length>6)
   {
    console.log(user,users[user].skills)
   }
}