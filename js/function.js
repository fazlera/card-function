let priceTotal = 0;

function getId(target){
    
    const cardTitle = target.parentNode.childNodes[1].innerText

    const li = document.createElement('li');
    li.innerText = cardTitle;

    const showProductName = document.getElementById('show-product-name');
    showProductName.appendChild(li).style.color='green';

    
    const price = target.parentNode.childNodes[3].innerText.split(' ')[1];

     priceTotal = parseFloat(priceTotal) + parseFloat(price);
    

   document.getElementById('price-total').innerText = priceTotal;
   

    
     
    

}