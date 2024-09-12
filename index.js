

var typeTarget=prompt('Введите номер желаемой мишени:\n1.Круг;\n2.Ромб;\n3.Квадрат;\n4.Звезда из гипербол.')
if (typeTarget==1 || typeTarget==2 || typeTarget==3 || typeTarget==4) {
    var x=prompt('Введите координату x: ')
    var y=prompt('Введите координату y: ')
    x = parseInt(x);
    y= parseInt(y);

    if (typeTarget==1) {
        if ((x**2 + y**2) <=1) {
        console.log('Попал');
        } else {
        console.log('Промазал');
        
    }
    }
    if (typeTarget==2) {
        if ((Math.abs(x)+Math.abs(y))<=1) {
            console.log('Попал');
        } else {
        console.log('Промазал');
        }
    }
    
    if (typeTarget==3) 
    {
        if (Math.abs(x)<=1 && Math.abs(y)<=1) {
            console.log('Попал');
        }  else {
        console.log('Промазал');
        }
    } 
    if (typeTarget==4) {
        if (((x!=0 && y<=1/x))||(x!=0 && y<=-1/x)) {
            console.log('Попал');
        } else {
        console.log('Промазал');
        }
    } 
} else {
    console.log('Введен неправильный формат. Обновите страницу и введите номер мишени (1,2,3,4)')
    }

