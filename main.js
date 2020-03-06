// let f1 = document.forms['f1'] // доступаємось по назві - []
// let f1 = document.forms[0] // доступаємось до першого елемента  але варіант не ок
// let f1 = document.forms.f1 // доступаємось по 


//FORM 1

// let f1 = document.forms['f1'];
// console.log(f1.children) // повертає масив 



// let f1 = document.forms['f1'];
// // console.log(f1.elements) // дістаються елементи форми через elements

// // console.log('button', f1.elements[3]);
// // console.log('button', f1.elements.button); // доступаємся через імя тегу 
// // console.log('button', f1.button); // доступаємся через імя тегу 
// f1.button.addEventListener('click', function() {
//     let login = f1.tt.value;
//     let password = f1.tp.value;
//     let email = f1.te.value;

//     console.log(`Login: ${login}, Password: ${password}, Email: ${email}`);
//     // f1.tt.value = '';
//     // f1.tp.value = '';
//     // f1.te.value = '';
//     // скидаємо input
//     f1.reset(); // скорочений синтаксис
//     f1.tt.placeholder = "Some Text"
// });




// //FORM 2 
// let f2 = document.forms['f2'];

// for(let i = 0; i < f2.elements.length; i++) { 
//     // console.log(f2.elements[i]);
//     f2.elements[i].addEventListener('click', function() {
//         document.body.style.background = f2.elements[i].value;
//         document.body.style.background = this.value; // скорочений синтаксис 

//     })
// }


//FORM 3 

// let f3 = document.forms.f3['f3']

// let check = true;

// f3.checkbox.addEventListener('click', function() {
//     if(check) {
//         f3.area.style.display = 'block';
//         check = false;
//     } else {
//         f3.area.style.display = 'none';
//         check = true;
//     }
// }) 

//непрацює 


// let f3 = document.forms.f3['f3']

// let check = true;

// f3.checkbox.addEventListener('click', function() {
//     if(this.checked) f3.area.style.display = 'block';
//     else f3.area.style.display = 'none';
// }) 

// переглянути 


//FORM 4 

// let f4 = document.forms['f4'];

// f4.colors.addEventListener('change', function() {
//     // document.body.style.background = 'value' // перший варіант 
//     for(let i = 0; i < f4.colors.options.length; i++) {
//         // console.log(f4.colors.options[i]);
//         if(f4.colors.options[i].selected) {
//             document.body.style.background = 'value'
//         }
//     }
// })





//ПРОВІРИТИ 
// let f21 = document.forms['f21'];


// f21.change.addEventListener('click', function() {
//     if(this.type == 'button') {
//         this.type = 'checkbox';
//     } else {
//         this.type == 'button';
//     }
//     this.checked = false;
// })









let f11 = document.forms['f11'];

f11.check.addEventListener('click', function() {
    let login = f11.tr.value;
    let password1 = f11.pass1.value;
    let password2 = f11.pass2.value;
        if(login = '' || login == login*1) {
            console.log('Wrong login')
        }
        if(password1 == '' && password2 == '' || password1 != password2) {
            console.log('Wrong password')
        }
        if(f11.man.checked) {
            console.log('You are Man')
        } else if (f11.woman.checked){
            console.log('You are Woman')
        }
})