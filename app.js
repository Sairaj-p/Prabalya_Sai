let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header')
let logospan = document.querySelector('.logo')

window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
        logospan.forEach((span, idx) => {
            setTimeout(()=>{
                span.classlist.add('.active')
            },(1+idx)*400)
        });

        setTimeout(()=>{
            logospan.forEach((span,idx)=>{
                setTimeout(() => {
                    span.classList.remove('.active');
                    span.classlist.add('.fade')
                },(1+idx)*50)
            })
        },2000)
        setTimeout(() => {
            intro.style.top ='-100vh'
        }, 2300);
    })

})
