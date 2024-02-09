let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";


let s=1;
for(i=0;i<=friends.length;i++){
    if(friends[i][0]!==letter.toUpperCase())
    {
        
        console.log(`${s} => ${friends[i]}`)
        s++;
    }else continue;
}