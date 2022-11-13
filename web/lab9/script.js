function validate(){
    //Считаем значения из полей name и email в переменные x и y
  /*  var x=document.forms["form"]["name"].value;
    var y=document.forms["form"]["email"].value;
    var p=document.forms["form"]["password"].value;
    var t=document.forms["form"]["userphone"].value;
    var com=document.forms["form"]["text"].value;*/
    //Если поле name пустое выведем сообщение и предотвратим отправку формы
    var name =form.name.value;
    var fail =false;
    var password=form.password.value;
    var state = form.state.value;
    var email =form.email.value;
    var text = form.text.value;
    var tel=form.tel.value;
    var age =form.age.value;
    if(age==""){
        alert("Выберите возраст.")
        form.age.focus();
        return false;
    }
    if (name.length==0){
        alert("Вы не ввели Имя");
       
       return false;
    }
    
    if (email.length==0){
        alert("Вы не ввели email");
      
       return false;
    }
    if (password.length==0){
      
      alert("Вы не ввели password");
        return false;
     }
     if (tel.length==0){
       
        alert("Вы не ввели номер телефона");
        return false;
     }
     if (text.length==0){
        
        alert("Вы не написали комментарий");
        return false;
     }
     if(state.length==0){
        alert("Укажите пол");
        return false;
     }
    //Проверим содержит ли значение введенное в поле tel символы @ и .
    var name_pattern=/[a-z-.]/i;
    var tel_pattern= /[0-9-+()]/;
    var tel1_pattern=/[@,*&^$%''`~]/;
    a = name.indexOf(name_pattern);
    t1=tel.indexOf(tel1_pattern);
    //t2=tel.indexOf(adr_pattern);
    if(a>1){
        alert("Вы ввели запрещенный символ");
        return false;
    }
    if(t1>1){
        alert("Вы ввели запрещенный символ,разрешенные символы () + -");
        return false;
    }
   
    var adr_pattern= /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
    
    if(adr_pattern.test(email) ==false){
        alert("Вы ввели неправильно почту");
        return false;
    }
        
   
        
    
    //Если поле не содержит эти символы знач email введен не верно
    if (at<1 || dot <1){
        alert("email введен не верно");
     //  document.getElementById("email").innerHTML="*email введен не верно";
       return false;

    }
    if(at>2){
        alert("Вы ввели 2 или более @");
        return false;
    }
        
 }

/*function valid(form){// проверка ввода имени
    var name =form.name.value;
    var fail =false;
    var pass=form.pass.value;
    var state = form.state.value;
    var emeil =form.email.value;
    var text = form.text.value;

    var adr_pattern= /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;

    if(name =="" || name==" ")
        fail="Вы не ввели свое имя";
   /* else if (adr_pattern.test(email) ==false)
        fail="Вы ввели почту неправильно";

    else if(email.split("@").length-1 ==0)
        fail="Вы ввели почту неправильно";

    else if(pass =="" || pass ==" ")
        fail="Вы не ввели пароль";

    else if(state =="")
        fail="Укажите пол";

    else if(text =="" || text ==" ")
        fail="Напишите свой комментарий";
    
    if(fail)
        alert(fail);*/
  //  else
      //  window.location="http://google.com";
       
    


/*
form.onsubmit= function(){
    let emailVal=inputEmail.value,
    phoneVal=inputphone.value,

    formInputs.foreach( function(input ){
        if(input.value==''){
            input.classList.add('error');
            console.log();
        }
    })
    
    return 0;

}*/