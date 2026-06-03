let menu = document.querySelector('.menu i');
 let x = document.querySelector('.x i')
let img = document.querySelector('header img')
let p = document.querySelector('header .title')
let ul = document.querySelector('ul');

// setInterval(() => location.reload(), 30000)
// if(window.innerWidth < 768){
    console.log('mobile layout');
    menu.addEventListener('click', () => {
 
    ul.style.display =  ul.style.display == 'none' ? 'block' : 'none' 
    ul.style.display == 'block' ? menu.style.display = 'none' : 'block'
       ul.style.display == 'block' ? x.style.display = 'block' : 'none'
  ul.style.display == 'block' ? img.style.display = 'none' : 'block'
   ul.style.display == 'block' ? p.style.display = 'none' : 'block'

})
    


  x.addEventListener('click', () => {
   ul.style.display =  ul.style.display == 'block' ? 'none' : 'block' 
    ul.style.display == 'none' ? x.style.display = 'none' : 'block'
    ul.style.display == 'none' ? menu.style.display = 'block' : 'none'
     ul.style.display == 'none' ? img.style.display = 'block' : 'none'
    ul.style.display == 'none' ? p.style.display = 'block' : 'none'
    
  })
 

//   let counter = document.querySelector('.counter');

//   let countstop = document.querySelector('.countstop');
//   counter.addEventListener('click', () => {
//     let count = Number(counter.textContent) || 0;

//     setInterval(() => {
//           count += 1;
//           counter.textContent = count;
//       }, 1000);
      
//   })


//    countstop.addEventListener('click', () => {
//      console.log('l');
//      let count = Number(counter.textContent) || 0;

//     setInterval(() => {
        
//           counter = clearInterval;
//       }, 1000);
//   })


//   darkmode
const darkmode = document.querySelector('.darkmode i');
const darkchange = document.querySelector('.darkchange i')

// darkmode.addEventListener('click' , () => {
//     console.log('fa-moon');
//     // darkchange.classList.toggle('darkchangevisible')
//     darkmode.style.display = 'none';
//      darkchange.style.display = 'block';

//      document.body.style.backgroundColor = 'black'
    
// })

// darkchange.addEventListener('click', () => {
  
//      darkchange.style.display = 'none';
//      darkmode.style.display = 'block';


//      document.body.style.backgroundColor = 'White'
// })



// ✅ Cleaner approach
darkmode.addEventListener('click', () => {
  document.body.classList.add('dark')
})

darkchange.addEventListener('click', () => {
  document.body.classList.remove('dark')
})















// let h1 = document.querySelector('h1');
// let ul = document.querySelector('ul');

// h1.addEventListener("click", () => {
//   ul.style.display = ul.style.display == 'none' ? 'block' :  'none' 
//   ul.style.display == 'block' ? h1.style.display = 'none' :  h1.style.display = 'block'
// })


