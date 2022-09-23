let arr = ["ajay","kumar","yadav","ram","gopal","tiger"];
let idx = "gopal";

if(arr.includes(idx)){
    for(let i=arr.length; i>=0; i--){
        if(arr[i] == idx){
            arr.splice(i, 1);
        }
    }
}

console.log(arr);