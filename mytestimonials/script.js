const wrapper=document.querySelector('.wrapper');
const indicators=[...document.querySelectorAll('.indicators button')];

let  currentTestimonial = 0; //default 0
    indicators.forEach((items,i)=>{
    items.addEventListener('click',()=>{
    indicators[currentTestimonial].classList.remove('active');
    wrapper.style.marginLeft=`-${50 * i}%`;
    items.classList.add('active');
    currentTestimonial=i;
    })

    // setInterval(()=>{

    // },3000)
        // indicators.forEach((item,i)=>{
        //     setInterval(()=>{
        //         indicators[currentTestimonial].classList.remove('active');
        //         wrapper.style.marginLeft=`-${50 * i}%`;
        //         item.classList.add('active');
        //         currentTestimonial=i;

        //     },2000)
        // })
        // indicators[currentTestimonial].classList.remove('active');
        // wrapper.style.marginLeft=`-${50 * i}%`;
        // item.classList.add('active');
        // currentTestimonial=i;

    // indicators[currentTestimonial].classList.remove('active');
    // wrapper.style.marginLeft=`-${50 * i}%`;
    // item.classList.add('active');
    // currentTestimonial=i;

    // }) n 
    // indicators[currentTestimonial].classList.remove('active');
    // wrapper.style.marginLeft=`-${50 * i}%`;
    // item.classList.add('active');
    // currentTestimonial=i;


// const testimonialFunc=indicators.forEach((item,i)=>{
//     item.addEventListener('click',testiFunc())

// })
// setInterval(testiFunc(),1000);
// indicators.forEach(testimonialFunc(item,i));