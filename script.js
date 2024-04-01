function sumValues(){
    var num1, num2, num3, num4, num5, num6, num7, res;

    num1=Number(document.formcalc.txtnum1.value);
    num2=Number(document.formcalc.txtnum2.value);
    num6=Number(document.formcalc.txtnum6.value);

    res=num1/num2;
    document.formcalc.txtres.value=res.toFixed(2);
 
    num3 = (res*0.12) * num6; 
    document.formcalc.txtnum3.value=num3.toFixed(2);

    num4 = (res*0.20 * num6);
    document.formcalc.txtnum4.value=num4.toFixed(2);

    num5 = num1-num3-num4;
    document.formcalc.txtnum5.value=num5.toFixed(2);

    num7 = num3 + num4;
    document.formcalc.txtnum7.value=num7.toFixed(2);
}

