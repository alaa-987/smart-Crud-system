var inputName = document.getElementById ("pNameId");
var inputPrice = document.getElementById("pPriceId");
var inputCat = document.getElementById("pCatId");
var inputDesc = document.getElementById("pDescId");
var cartoona;
if(localStorage.getItem("ourStorage") == null){
    cartoona=[];
}
else{
    cartoona = JSON.parse(localStorage.getItem("ourStorage"));
    displayProduct();
}

function addProduct(){
    var oneProduct ={ 
        pName: inputName.value,
        pPrice: inputPrice.value,
        pCat: inputCat.value,
        pDesc: inputDesc.value
    }
    cartoona.push(oneProduct)
    localStorage.setItem("ourStorage" ,JSON.stringify(cartoona))
    displayProduct()
    clearProduct()
}
function clearProduct(){
    inputName.value ="";
    inputPrice.value="";
    inputCat.value="";
    inputDesc.value="";
}
function displayProduct(){
    var hasala =``;
    for(var i=0 ; i < cartoona.length ; i++){
        hasala += ` <tr>
          <td>${i}</td>
          <td>${cartoona[i].pName}</td>
          <td>${cartoona[i].pPrice}</td>
          <td>${cartoona[i].pCat}</td>
          <td>${cartoona[i].pDesc}</td>
          <td ><button onclick="setInputData(${i})" class="btn btn-outline-warning">setData</button></td>
          <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger"> Delete</button></td>
          </tr>
        `

    }
    document.getElementById("tBody").innerHTML= hasala;
}
function deleteProduct(pIndex){
   cartoona.splice(pIndex,1);
   displayProduct()
   localStorage.setItem("ourStorage" , JSON.stringify(cartoona))
}
function searchinput(userWord){
   var hasala = "";

   for( var i=0 ; i < cartoona.length ; i++){

    if( cartoona[i].pName.toLowerCase().includes(userWord.toLowerCase())){
        hasala += ` <tr>
        <td>${i}</td>
        <td>${cartoona[i].pName}</td>
        <td>${cartoona[i].pPrice}</td>
        <td>${cartoona[i].pCat}</td>
        <td>${cartoona[i].pDesc}</td>
        <td ><button class="btn btn-outline-warning">setData</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger"> Delete</button></td>
        </tr>
      `
    }
    document.getElementById("tBody").innerHTML= hasala;
   }
}
var currentIndex;

function setInputData(pIndex){
    inputName.value = cartoona[pIndex].pName;
    inputPrice.value = cartoona[pIndex].pPrice;
    inputCat.value = cartoona[pIndex].pCat;
    inputDesc.value = cartoona[pIndex].pDesc;

    document.getElementById("addB").style.display=`none`;
    document.getElementById("Updbtn").style.display=`block`;
    currentIndex =pIndex;

}
function updataProduct(){
    var oneProduct ={ 
        pName: inputName.value,
        pPrice: inputPrice.value,
        pCat: inputCat.value,
        pDesc: inputDesc.value
    }
    cartoona[currentIndex]= oneProduct;
    localStorage.setItem("ourStorage" , JSON.stringify(cartoona));
    displayProduct();
    clearProduct();
    document.getElementById("addB").style.display=`block`;
    document.getElementById("Updbtn").style.display=`none`;
}