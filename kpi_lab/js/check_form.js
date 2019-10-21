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
    if ((form.text1.value == "")|| ( form.text1.value!=form.text1.value.toUpperCase() )){ 
        alert("Имя пользователя введено некорректно!");
        return !ok;
        }
        else 
        if ((form.text3.value == "")|| ( form.text3.value[0]!=form.text3.value[0].toUpperCase() )){ 
            alert("Фамилия пользователя введена некорректно!");
            return !ok;
        }
        else 
        if (form.text2.value == "" || form.text2.value.indexOf('@', 0) == -1) { 
            alert("Электронный адерес введен некорректно");
            return !ok;
        }
        else 
        if (isNaN(form.telephone.value) || (form.telephone.value=="")){
        alert("Номер не коректний.");
        return !ok;
        }
    else
    {
        alert("Все данные введены правильно");
        return ok;
 }
}
