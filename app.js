let h1 = document.querySelector('h1');
let ul = document.querySelector('ul');

h1.addEventListener("click", () => {
  ul.style.display = ul.style.display == 'none' ? 'block' :  'none' 
  ul.style.display == 'block' ? h1.style.display = 'none' :  h1.style.display = 'block'
})