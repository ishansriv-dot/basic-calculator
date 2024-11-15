function cleardisplay(){
    document.calc.txt.value='';

}
function appendtodisplay(value){
    let display=document.calc.txt;
    display.value+=value;
}
function calculate(){
    let display=document.calc.txt;
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value='ERROR';
    }
}
