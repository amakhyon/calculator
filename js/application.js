
$(document).ready(function(){
    var screen = [ ]; //array to push input to 
    var screeny; //converted array to string is pushed here 
    var calc = [ ]; //calculated items here
    var a;    //two numbers which the operation is performed on
    var b;    //two numbers which the operation is performed on
    var result = 0; //result stored here
    var operation = " "; //stores type of operation


//============= start internal functions===================

    function add(x,y){  //addition
    return x + y;
    }
    function subtract(x,y) { //subtraction
        return x - y;
    }
    function multiply(x,y){  //multiplication
        return x * y;
    }
    function divide (x,y){  //division
        return x / y;
    }


    function updateScreen(x){  //display clicked button value on the screen
        var num = $(x).html();
        screen.push(num);
        screeny = screen.join("");
        $('.screen').text(screeny);
        maxLength();
    };
    function screenWrite(x){
        clear();
        $('.screen').text(x);
    }
    function clear(){ //clears screen
        $('.screen').empty();
        screeny = 0;
        screen = [ ];
    }
    function error(string){   //throws type of error 
        clear();
        $('.screen').text(string);
    };
    function maxLength(){  //checks max limit
        if(screen.length > 12){
            error('max limit');
        };
    };

//==================end internal functions===============



    $('.number').on('click',function(){  //display numbers upon click
        updateScreen(this);
    });
    $('.sign').on('click',function(){ //displays signs 
         updateScreen(this);  
    });

    $('#clear').on('click',function(){ //clears screen and vars 
        clear();
    });

    $('#add').on('click',function(){

        operation = "add";
    
    });
    $('#subtract').on('click',function(){

        operation = "subtract";
    
    });
    $('#multiply').on('click',function(){

        operation = "multiply";
    
    });
    $('#division').on('click',function(){

        operation = "divide";
    
    });

    $('#equal').on('click',function(){
        switch(operation){
            case "add":
                calc = screeny.split('+');
                a = +calc[0];
                b = +calc[1];
                result = add(a,b);
                screenWrite(result);
                break;
            case "subtract":

                calc = screeny.split('-');
                a = +calc[0];
                b = +calc[1];
                result = subtract(a,b);
                screenWrite(result);
                break;


            case "multiply":
                calc = screeny.split('x');
                a = +calc[0];
                b = +calc[1];
                result = multiply(a,b);
                screenWrite(result);
                break;



            case "divide":
                calc = screeny.split('/');
                a = +calc[0];
                b = +calc[1];
                result = divide(a,b);
                screenWrite(result);
                break;

            default:
                screenWrite('error');

        };
    });
   
});






 