

  const iMax=2;

  document.querySelectorAll('.check').forEach( chk=>{
      chk.addEventListener('click',function(e){
          if( document.querySelectorAll('.check:checked').length > iMax ){
              e.preventDefault();
              let span=this.parentNode.nextElementSibling;
              span.textContent=`A maximum of ${iMax} can be selected`;
              setTimeout(()=>span.textContent='', 2500 );
              return false;
          }
      });
  })

 
 function nameVal() {
  let fname = document.getElementById("fname").value;
  if(fname != '') {    
     if (fname.length < 4){
      document.getElementById("fname").style.border = "2px solid red";
      return false;
    }else{
      document.getElementById("fname").style.border = "none";
      return true;
    }
  }
}
function surnameVal(){
  let surname = document.getElementById("surname").value;
  if(surname != '') {    
     if (surname.length < 5){
      document.getElementById("surname").style.border = "2px solid red";
      return false;
    }else{
      document.getElementById("surname").style.border = "none";
      return true;
    }
  }
}
function streetVal(){
  let street = document.getElementById("street").value;
  if(street != '') {    
     if (street.length < 5){
      document.getElementById("street").style.border = "2px solid red";
      return false;
    }else{
      document.getElementById("street").style.border = "none";
      return true;
    }
  }
}

function houseVal() {
  let house = document.getElementById("house").value;
  let format = /^[1-9]+[0-9]*$/;
  if(house != '') {    
      if( !house.match(format)){
        document.getElementById("house").style.border = "2px solid red";
        return false;
      }else{
        document.getElementById("house").style.border = "none";
        return true;
      }
  }
}
function flatVal() {
  let flat = document.getElementById("flat").value;
  let format = /^[1-9]+[0-9]*$/;
  if(flat != '') {    
      if( !flat.match(format)){
        document.getElementById("flat").style.border = "2px solid red";
        return false;
      }else{
        document.getElementById("flat").style.border = "none";
        return true;
      }
  }
}