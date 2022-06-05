$(document).ready(function () {
    let operand1; //левый операнд
    let operand2; //правый операнд
    let functiontype; //тип функции
    let solution; //конечный ответ

    //Очистка дисплея
    $(".clean").click(function(){
        $('.display').text('');
    });
    //Нажатие на цифры
    $('.num').click(function(){
        var text = $(this).data('text');
        $('.display').text($('.display').text() + text);
    });
    //Нажатие на знак
    $('.function').click(function(){
        var typefunc = $(this).data('text');
        operand1 = $(".display").text();
        $('.display').text('');
        functiontype = typefunc;
    });
    //нахождение корня
    $('.sqrt').click(function(){
        operand1 = $(".display").text();
        solution = Math.sqrt(+operand1);
        $(".display").text(solution);
    });
    //Нажатие на равно
    $('.result').click(function(){
        operand2 = $(".display").text();
        if(typeof(functiontype) != "undefined" && functiontype !== null){
            switch(functiontype){
                case '%':
                    solution = +operand1 % +operand2;
                    break;
                case '/':
                    solution = +operand1 / +operand2;
                    break;
                case '*':
                    solution = +operand1 * +operand2;
                    break;
                case '^':
                    solution = Math.pow(+operand1, +operand2);
                    break;
                case '-':
                    solution = +operand1 - +operand2;
                    break;
                case '+':
                    solution = +operand1 + +operand2;
                    break;
                default:
                    return;
            }
            $(".display").text(solution);
        }
    });
});