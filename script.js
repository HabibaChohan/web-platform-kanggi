/** Implement a click function to which writes digits on calculator screen */

/** Implement a function which clears digits from calculator screen upon clicking AC button */

/** Implement a function which enters digit to screen upon pressing any number button and decimal point */

/** Implement a function for adding/subtracting/multiplying/dividing first entered number */

/** */

let scrn = document.getElementById('screentext');
  
function input(x){
  scrn.value=scrn.value+x;

}

function allClear(){
  scrn.value=' ';
}

function calc(){
      scrn.value=eval(scrn.value);
}

