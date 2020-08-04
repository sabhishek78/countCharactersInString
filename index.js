// Count characters in your string and return an object
function count(string){
let result=new Object();
for(let i=0;i<string.length;i++){
  if(result[string[i]]===undefined){
    result[string[i]]=1;
  }
  else{
    let count=result[string[i]];
    count++;
    result[string[i]]=count;
  }
}
return result;
}
console.log(count("abcdefghijklmnopqrstuvwxyz"));
console.log(count("Hellohowareyou"));
console.log(count(""));