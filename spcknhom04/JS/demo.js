const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);




const none =  $('.content_main_1');


// book now








const btn = $('#book').onclick = function () {
      
    const book = $('#name').value;
    const book1 = $('#emai').value;
    const book2 = $('#number').value;
    const book3 = $('#number1').value;
    const book4 = $$('.check').value;
     

   let regEmail = /^\w+@gmail\.com$/i;
     
    
    if(book == "" || book1 == "" || book2 == "" || book3 == ""){
        alert('Vui lòng nhập tất cả thông tin');
        return;
    }else if(!book1.match(regEmail)){
        alert('Email không đúng định dạng');
        return;



    }
    else if(isNaN(book2)){
        alert('Number phone không phải là số');
        return;
    }else{
        window.location = ('./add.html')
    }
    confirm('Vui lòng kiểm tra lại thông tin\n'+"Name: "+book+"\n"+"Email: "+book1+"\n"+"Number phone: "+book2+"\n"+"Quantity: "+book3+"\n"+"Time"+book4+"\n");
    }
   
//    vote_peple 
let ese = 0;
const clickBtn = $('.btnclick').onclick = function (){
   
    const control1 = $('.form-control1').value;
    const control2 = $('.form-control2').value;
    const control3 = $('.form-control3').value;

    const inner = $('#inner');

   

    if(ese == 1){
        inner.style.display = "none"
        ese =0
    }
    
    if(control1 == "" || control2 == "" || control3 == "" ){
      inner.innerHTML = "Vui lòng điền đủ thông tin";
      ese++;
      
      
    }else{
        window.location = ('./demo.html');
    }
    
    
    
  
}

//Vote


    const iColors = $$('.i_color');
    
     
    
     iColors.forEach((iColor, index) => {
        
       iColor.onclick = function (){
            iColor.style.color = "yellow";
            return true;
            
         
           
       }
    
    })


// tab

const tabs = $$('.tab-item');
const allmains = $$('.content_alllmain');
tabs.forEach((tab, index) => {
    

    
    const allmain = allmains[index];
    
    
    tab.onclick= function (){
      
        if(index == 0){
            none.style.display = "flex";
        }
        if(index > 0){
            none.style.display = "none";
            
        }
        
        
       
        
        
        
        $('.tab-item.active').classList.remove('active');
        $('.content_alllmain.active').classList.remove('active');
        tab.classList.add('active');
        allmain.classList.add('active');

        
        

    }
    
});



const inputs = $$('.ipt');
    inputs.forEach((color, index) => {
        color.onclick = function (e) {
            color.style.background = "white"; 
            console.log(index)
            return;
        }
    })




 

   