const DEMO_URL="https://course-api.com/react-store-products"
function fetchData(DEMO_URL,callback){
    fetch(DEMO_URL).then((response)=>{
    return response.json()
}).then((data)=>{
    callback(data)
}).catch((error)=>{
    console.log("error",error)
})};

function handleData(data){
//    const heading=document.getElementById("para")
//    heading.innerHTML=data[0]["name"]
console.log("Received data:", data);
   const section = document.querySelector("section");
 
   for ( i=0;i<data.length;i++) {
     const myArticle = document.createElement("article");
     const myH2 = document.createElement("h2");
     const myPara1 = document.createElement("p");
     const myPara2 = document.createElement("p");
     const myPara3 = document.createElement("p");

     myH2.textContent = data[i]["name"]
     myPara1.textContent = data[i]["price"]
     myPara2.textContent = data[i]["description"]
     myPara3.textContent = data[i]["company"];

     myArticle.appendChild(myH2);
     myArticle.appendChild(myPara1);
     myArticle.appendChild(myPara2);
     myArticle.appendChild(myPara3);
     
    section.appendChild(myArticle);
    console.log(i)

}
const newH2 = document.createElement("h2")
newH2.textContent = "test"
section.appendChild(newH2)

}
fetchData(DEMO_URL,handleData)

// const p1Element=document.getElementById("para");
// const buttonElement=document.getElementById("button1");
// buttonElement.addEventListener('click',handleData())
// for(i=0;i<data.length+1;i++){
//     console.log(data[i]["name"]+":"+data[i]["price"])
//  }
//  (data[0]["name"]);
//  console.log('button clicked');
//  console.log(data[0]["name"])
//  const h1Element=document.getElementById("para");
//  h1Element.innerHTML=data[0]["name"];
  