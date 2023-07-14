const userGoods = document.querySelectorAll('section');
console.dir(userGoods);
userGoods.forEach(function(refer){
    refer.addEventListener('click', function(event){
        let name = event.currentTarget.dataset.name;
        let price = event.currentTarget.dataset.price
        alert(`${name} for ${price}`);
        console.dir(event.target);
    });
});
    

