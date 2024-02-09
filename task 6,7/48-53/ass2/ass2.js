let start = 10;
let end = 0;
let stop = 3;

for(i=start;i>=end;i-- ){
    if(i==3)
    {
      console.log(`0${3}`)
      break;
    }
    if(i<10)
    {
        console.log("0"+i)
    }
    if(i==10){console.log(10)
    }
}