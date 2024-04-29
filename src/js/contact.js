$('#toggleBtn').click(function(){
    let sideWidth = $('.side-inner').innerWidth();
    
    if($('#black-sideNav').css('left')=='0px')
    {
       
        $('#black-sideNav').animate({left:-sideWidth},200)
        
        let delay = 200; 

        $('#link-list li').each(function(index) {
          let listItem = $(this);
          listItem.animate({
            opacity: 0,
            top: 0
          }, delay * index);
        });
        $('#white-sideNav').animate({left:'-84%'},200)
    }else{
        $('#black-sideNav').animate({left:'0px'},200)
        $('#icon1').addClass('hidden');
        $('#icon').removeClass('hidden');
        let delay = 200; 

        $('#link-list li').each(function(index) {
          let listItem = $(this);
          listItem.animate({
            opacity: 1,
            top: 1
          }, delay * index);
        });
        $('#white-sideNav').animate({left:'0px'},200)
   
}
    $('#crossBtn').click(function(){
       
        if($('#black-sideNav').css('left')=='0px')
    {
        $('#black-sideNav').animate({left:-sideWidth},200)
        $('#icon').addClass('hidden');
        $('#icon1').removeClass('hidden');
        let delay = 200;

        $('#link-list li').each(function(index) {
          let listItem = $(this);
          listItem.animate({
            opacity: 0,
            top: 0
          }, delay * index);
        });
        $('#white-sideNav').animate({left:'-84%'},200)
    }
    else{
        $('#black-sideNav').animate({left:'0px'},200)
        $('#icon1').removeClass('hidden');
        $('#icon').addClass('hidden');
        let delay = 200; 

        $('#link-list li').each(function(index) {
          let listItem = $(this);
          listItem.animate({
            opacity: 1,
            top: 1
          }, delay * index);
        });
        $('#white-sideNav').animate({left:'0px'},200)
   
    }
    })

}) ;

function validateName() {
    let regex=/^[a-zA-Z ]+$/;
    return (regex.test(document.getElementById("nameInput").value))
}

function validateEmail() {
    let regex =/^(?!\.)[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/
    return (regex.test(document.getElementById("emailInput").value))
}

function validatePhone() {
    let regex =/^(?:\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4,6}$/
    return (regex.test(document.getElementById("phoneInput").value))
}

function validateAge() {
    let regex=/^(0?[1-9]|[1-9][0-9]|1\d{2}|200)$/
    return (regex.test(document.getElementById("ageInput").value))
}

function validatePassword() {
    let regex=/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/;
    return (regex.test(document.getElementById("passInput").value))
}

function validateRepassword() {
    return document.getElementById("passInput").value == document.getElementById("retypeInput").value
}
let nameFlag=false  
let emailFlag=false  
let phoneFlag=false  
let ageFlag=false  
let passFlag=false  
let repassFlag=false 
document.getElementById('submitBtn').disabled = true;
document.getElementById('nameInput').addEventListener('input',function(){
    if(validateName()!= true && document.getElementById('nameInput').value != '' ){
        document.getElementById('nameAlert').classList.remove('hidden');
        nameFlag=false
    }
    else
    {
        document.getElementById('nameAlert').classList.add('hidden');
        nameFlag=true
    }

    checkBtn()
   
})

document.getElementById('emailInput').addEventListener('input',function(){
    if(validateEmail()!= true  && document.getElementById('emailInput').value != '' ){
        document.getElementById('emailAlert').classList.remove('hidden');
        emailFlag=false
    }
    else
    {
        document.getElementById('emailAlert').classList.add('hidden');
        emailFlag=true
    }
    checkBtn()
})

document.getElementById('phoneInput').addEventListener('input',function(){
    if(validatePhone()!= true  && document.getElementById('phoneInput').value != '' ){
        document.getElementById('phoneAlert').classList.remove('hidden');
        phoneFlag=false
    }
    else
    {
        document.getElementById('phoneAlert').classList.add('hidden');
        phoneFlag=true
    }

    checkBtn()
})


document.getElementById('ageInput').addEventListener('input',function(){
    if(validateAge()!= true  && document.getElementById('ageInput').value != '' ){
        document.getElementById('ageAlert').classList.remove('hidden');
        ageFlag=false
    }
    else
    {
        document.getElementById('ageAlert').classList.add('hidden');
        ageFlag=true
    }
    checkBtn()
})


document.getElementById('passInput').addEventListener('input',function(){
    if(validatePassword()!= true  && document.getElementById('passInput').value != '' ){
        document.getElementById('passAlert').classList.remove('hidden');
        passFlag=false
    }
    else
    {
        document.getElementById('passAlert').classList.add('hidden');
        passFlag=true
    }
    checkBtn()
})


document.getElementById('retypeInput').addEventListener('input',function(){
    if(validateRepassword()!= true  && document.getElementById('retypeInput').value != '' ){
        document.getElementById('retypeAlert').classList.remove('hidden');
        repassFlag=false
    }
    else
    {
        document.getElementById('retypeAlert').classList.add('hidden');
        repassFlag=true
    }
    checkBtn()
})

function checkBtn()
{
    if(nameFlag==true && emailFlag==true && ageFlag==true && passFlag==true && repassFlag==true && phoneFlag==true)
    {
        document.getElementById('submitBtn').disabled = false;
        
        document.getElementById('submitBtn').classList.add('bg-red-600')
       
    }

    else
    {
        document.getElementById('submitBtn').disabled = true;
      
        
    }
}