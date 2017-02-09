let str = "little cat face"
let arr = []


function done (){
  let splitOut = str.split(' ')
  return splitOut.forEach((e)=>{e.charAt(0).toUpperCase()})
}
console.log(done());
