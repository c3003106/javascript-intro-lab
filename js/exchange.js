(function(){
	// logic here
    let pricePounds;
    let exchangeRate;
    let priceEuros;
    const convertForm = document.getElementById('myForm');
    const msg = document.getElementById('msg');
    convertForm.addEventListener("submit", (ev) => {
        ev.preventDefault();
        console.dir(ev.target);
        console.info(document.getElementById('pounds').value);
        priceEuros = 0;
        exchangeRate = 0.87;
        pricePounds = parseFloat(document.getElementById('pounds').value);
        priceEuros = 0.87 * pricePounds;
        console.info(priceEuros);

        if(isNaN(pricePounds)){
            msg.style.display = "block";
            msg.innerHTML = "You must enter a number";
            msg.setAttribute('class', 'error');
        }
        else{
            if(pricePounds === 0){
                msg.style.display = "block";
                msg.innerHTML = "You must enter more than zero."
                msg.setAttribute('class', 'error');
            }else{
                priceEuros = pricePounds * exchangeRate;
                msg.style.display = "block";
                priceEuros = priceEuros.toFixed(2);
                msg.innerHTML = "You will get &euro;"+priceEuros;
                msg.removeAttribute('class');
            }
        }

    });
})();