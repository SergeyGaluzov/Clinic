/* eslint-disable no-unused-vars */
function check (input){
    let ok = true;
    for ( let i = 0; i<input.length;i++){
        let chr = input.charAt(i);
        let found = false;
        for ( let j = 0; j<check.length;j++)
           if (chr == check[j]) found = true;
           if (!found) ok = false;
    }
    return ok; 
 }

 function test1 (form){
    let ok = true;
    if ((form.name.value == "")|| ( form.name.value[0]!=form.name.value[0].toUpperCase() )){ 
        alert("Имя пользователя введено некорректно!");
        }
        else 
        if ((form.surname.value == "")|| ( form.surname.value[0]!=form.surname.value[0].toUpperCase() )){ 
            alert("Фамилия пользователя введена некорректно!");
        }
        else 
        if (form.email.value == "" || form.email.value.indexOf('@', 0) == -1) { 
            alert("Электронный адерес введен некорректно");
        }
        else 
        if (isNaN(form.telephone.value) || (form.telephone.value=="")){
        alert("Номер не коректний.");
    }
    else{
        alert("Все данные введены правильно");
    }
 }
