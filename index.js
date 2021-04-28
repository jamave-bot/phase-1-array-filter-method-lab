// Code your solution here
const findMatching = (arr, string) =>{
    return arr.filter((element)=> element.toLowerCase() === string.toLowerCase())
}

// const fuzzyMatch = (arr, string) =>{
//     return arr.filter(element =>{
//         for (let i = 0; i < string.length; i++){
//             if (element[i] != string[i]){
//                 return false;
//             }
//         }
//         return true;
//     })
// }

const fuzzyMatch = (arr, string) =>{
    return arr.filter(element =>{
        for (let i in string){
            if (string[i].toLowerCase() != element[i].toLowerCase()){
                return false;
            } 
        }
        return true;
    })
}

const matchName =(arr,str)=>{
    return arr.filter( driver => driver["name"] === str)
}