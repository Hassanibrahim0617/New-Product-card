const userGoods = document.querySelectorAll('section');
console.dir(userGoods);
userGoods.forEach(function(refer){
    refer.addEventListener('click',function(event){
        alert(`${event.target.dataset.name} for ${ event.target.dataset.price}`);
        console.dir(event.target);
    });
});
    

