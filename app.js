/**
 * Author: Rashidul Hasan
 * =========== Step ===========
 * 
 * 1.DOM selection
 * 2.Event listner 
 * 3.Basic Validation
 * 4.Creating Element
 * 5.Append 
 */

 const tittle = document.querySelector('#tittle');
 const author = document.querySelector('#author');
 const year = document.querySelector('#year');
 const btn = document.querySelector('.btn');
 const booklist = document.querySelector('#book-list');
 const deletbook = document.querySelector('#delet-book');

 btn.addEventListener('click',function(event){
     event.preventDefault();
     if(tittle.value==='' || author.value===""|| year.value===""){
        Swal.fire({
            icon: 'error',
            title: 'Sorry',
            text: 'You must Filled the Form'
            
          })
     } else {
         const newRow = document.createElement('tr');
        // Create New Tittle 
        const newTittle = document.createElement('th');
        newTittle.innerHTML = tittle.value;
        // Th ke cinaya deya lgba appnt child diye 

        newRow.appendChild(newTittle);

          // Create New Author 
          const newAuthor = document.createElement('th');
          newAuthor.innerHTML = author.value;
          // Th ke cinaya deya lgba appnt child diye 
          newRow.appendChild(newAuthor);

            // Create New Year 
        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        // Th ke cinaya deya lgba appnt child diye 
        newRow.appendChild(newYear);

        // Append to booklist table

        booklist.appendChild(newRow);
       
     }

    

 })


 var table = document.getElementById('#book-list');
    
 function deleteRow () {
   table.deleteRow(1);
 };
