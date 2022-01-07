var pN = document.querySelector('.pN');
var pP = document.querySelector('.pP');
var btn = document.getElementById('addBtn');
//
const tBodyFunction = () => {
    const tr = document.createElement('tr');
        tr.className = "bodyTR";

        const PLN = document.createElement('td');
        PLN.innerText = pN.value;
        tr.appendChild(PLN);

        const PLP = document.createElement('td');
        PLP.innerText = pP.value;
        tr.appendChild(PLP);

        const pL = document.querySelector('.product-items');
        pL.appendChild(tr);

        document.querySelector('.pN').value = "";
        document.querySelector('.pP').value = "";
}
//KeyBoard Event :
btn.addEventListener('keyup', (e)=>{
    e.preventDefault();
    if(e.keyCode == 13 && pN.value != "" && pP.value != ""){
        tBodyFunction();
        
    }else{

    }
})
// Click Event: 
document.getElementById('addBtn').addEventListener('click', function(e){
    e.preventDefault;
    
    if(pN.value != "" && pP.value != ""){
        tBodyFunction();

    }else{
        alert('faka ka?');
       
    }
});



var tBody = document.querySelector('.product-items');

tBody.addEventListener('click', function(e){
    e.target.parentNode.removeChild(e.target);
 })