// variable

const accordion=document.getElementsByClassName('content-container');

for(i=0;i<accordion.length;i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active');
    })
};

// const accordions = document.querySelectorAll('.content-container');

// // Loop through each element and add a click event listener
// accordions.forEach(accordion => {
//     accordion.addEventListener('click', function () {
//         this.classList.toggle('active');
//     });
// });