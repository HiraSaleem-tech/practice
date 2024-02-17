let reviews= document.querySelectorAll('.review-wrapper');

let currentReviews = [0, 2];

let updateReviewSlider =(cards)=>{
    cards.foreach((card_index) =>{
        reviews[card_index].classList.add('active');
    })
}

setInterval(()=>{
    currentReviews.foreach((card_index, i) => {
        reviews[card_index].classList.remove('active');

        currentReviews[1] = card_index >= reviews.length -1 ? 0:card_index +1;

        currentReviews[]
    })

    setTimeout(() =>{
       updateReviewSlider(currentReviews)
    }.250)
}.5000)

updateReviewSlider(CurrentReviews)

//faq

let faqs = [...document.querySelectorAll('.faq')];

faqs.map(faq =>{
    let ques = faq.querySelector('.question-box')
    ques.addEventListener('click',() =>{
        faq.classList.toggle('active');
    })
})
