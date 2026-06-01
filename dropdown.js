    const select = document.querySelector('select');
    const option = document.querySelector('option');


        select.addEventListener('change', () => {
           
            if (select.value === 'red') {
                 document.body.style.backgroundColor = 'red'
                 
            }else if (select.value === 'green'){
                 document.body.style.backgroundColor = 'green'

            }else if (select.value === 'black'){
                 document.body.style.backgroundColor = 'black'

            }else if (select.value === 'yellow'){
                 document.body.style.backgroundColor = 'yellow'

            }  else {
                 
                 document.body.style.backgroundColor = 'white'

            }
        })

const img = document.querySelector('img')
const p = document.querySelector('p')

 document.querySelector('.clickme').addEventListener('click', () => {
    let age = 19;
       if(age >= 18){
         img.classList.add('visibleadults')
          
       }else{
        console.log('monir');
       p.classList.toggle('visiblechild')

        
       }
})
