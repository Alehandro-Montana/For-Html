function validate(){
   
    var name =form.name.value;
   
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
        
   
        
        
 }


