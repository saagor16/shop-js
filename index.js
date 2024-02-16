let titleCount =1;
let totalPrice = 0;

const cards = document.querySelectorAll('.card');


for(let index = 0; index<cards.length; index++){
    const card = cards[index];
    // console.log(card);
    card.addEventListener('click', function(){
       //console.log('clicked');

       //get the title
       const title = card.querySelector('h3').innerText;
        //console.log(title);
        const price = parseFloat(card.querySelector('span').innerText.split(' ')[1]);
        console.log(price);

        const titleContainer = document.getElementById('title-container');
        // console.log(titleContainer);

        const p = document.createElement('p');
        p.innerText = titleCount + '. ' + title;
        titleCount++;
        titleContainer.appendChild(p);

        //Calculate price
        totalPrice +=price;
        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
    })
}

const btn = document.getElementById('apply-btn');
btn.addEventListener('click',function(){

    //get value the  inout
    const couponElement = document.getElementById('input-field').value;
    // console.log(couponElement);
    const couponCode = couponElement.split(' ').join('').toUpperCase();
    console.log(couponCode)
    if(totalPrice >= 200){
        if(couponCode==="SELL200"){
            //discount calculation
            const discountElement = document.getElementById('discountPrice');
            const discountAmount = totalPrice*0.2;
            discountElement.innerText =discountAmount.toFixed(2);

            //rest total
            const restTotal = document.getElementById('total');
            restTotal.innerText = totalPrice-discountAmount.toFixed(2);
            document.getElementById('input-field').value = '';
        }else{
            alert('invalid coupon code');
            document.getElementById('input-field').value = '';
        }
    }else{
        alert('plz at least $200 cost koren bhai');
        document.getElementById('input-field').value = '';
    }
})