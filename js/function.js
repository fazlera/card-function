function getId(target){
    
    const cardTitle = target.parentNode.childNodes[1].innerText
    const li = document.createElement('li');
    li.innerText = cardTitle;
    const showProductName = document.getElementById('show-product-name');
    showProductName.appendChild(li).style.color='red'

    const price = target.parentNode.childNodes[3].innerText;
    console.log(price);
}