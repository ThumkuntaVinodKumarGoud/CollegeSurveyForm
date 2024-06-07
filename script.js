
const usersdata = []


function randomName(){
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKL"
    let x = Math.floor((Math.random() * 100) + 1)
    let y =  alphabet[Math.floor(Math.random() * alphabet.length)]
    return x+y
  }



function dothis(){ 
const unique = randomName()
const firstname = document.getElementById("firstname").value
const surname = document.getElementById("surname").value
const email = document.getElementById("email").value
const age = document.getElementById("age").value

//GPA calculator
    
const a = document.getElementById("first").value;
const b = document.getElementById("second").value;
const c = document.getElementById("third").value;
const d = document.getElementById("fourth").value;

const e = document.getElementById("fifth").value;
const f = document.getElementById("sixth").value;
const g = document.getElementById("seventh").value;
const h = document.getElementById("eight").value;

const gpa = (a*3+b*3+c*3+d*3+e*3+f*3+g*3+h*3)/24



let userdata = {
  
    firstname,
    surname,
    email,
    age,
    gpa
 }

 usersdata.push(userdata)

localStorage.setItem( unique ,  JSON.stringify(userdata) );
alert("Keep your ID "+ unique)


}



// stores in the local stoarage


const forms = document.getElementById("studentsform");
forms.addEventListener("submit" , (ev) => {
    ev.preventDefault();
    dothis();
})



// // retrieve from the local storage

// // console.log(grabinfo)


 function retrieve(){
     
 const uniqueVal = document.getElementById("uniqueVal").value;
  const {firstname , surname , email,age,gpa}  = JSON.parse(localStorage.getItem(uniqueVal));
   console.log(JSON.parse(localStorage.getItem(uniqueVal)))

    const myinfo= document.getElementById("MYINFO");
    myinfo.innerHTML = `
    <table> 
        <tbody>
            <tr>
                <td>
                FIRSTNAME
                </td>
                <td>
                ${firstname}
                </td>
            </tr>
            <tr>
                <td>
                     SURNAME
                </td>
                <td>
                     ${surname}
                </td>
             </tr>
             <tr>
             <td>
                  EMAIL
             </td>
             <td>
                  ${email}
             </td>
          </tr>
          <tr>
            <td>
               AGE
             </td>
             <td>
                  ${age}
             </td>
            </tr>
            <tr>
            <td>
               GPA
             </td>
             <td>
                  ${gpa}
             </td>
            </tr>
         </tbody?
    </table>`

    

    
    // // return the currents user details by using the findal index cos the curents use detials is pushed to the end of the array
 
    // userdetail.innerHTML =  ("FIRST NAME: "+ current.firstname + "    " + "SURNAME: " + current.surname + "   "  + "AGE: " + current.age + "   " + "GPA :"+ current.gpa );
    // indexx.innerHTML =   ("INDEX (Keep your index value ): " + (grabinfo.length -1))
 

        
}

//removes the user detaisl from teh 

function remove(){
   const  toBeRemoved = document.getElementById("uniqueVal").value
console.log("i arm here")
    if (!toBeRemoved in localStorage ){
        alert("Details not found")
    }else{
           localStorage.removeItem(toBeRemoved)    
console.log(toBeRemoved)
    }
        

}


function update(){
const firstname = document.getElementById("firstname").value
const surname = document.getElementById("surname").value
const email = document.getElementById("email").value
const age = document.getElementById("age").value

//GPA calculator
    
const a = document.getElementById("first").value;
const b = document.getElementById("second").value;
const c = document.getElementById("third").value;
const d = document.getElementById("fourth").value;

const e = document.getElementById("fifth").value;
const f = document.getElementById("sixth").value;
const g = document.getElementById("seventh").value;
const h = document.getElementById("eight").value;

const gpa = (a*3+b*3+c*3+d*3+e*3+f*3+g*3+h*3)/24



let upUserdata = {
  
    firstname,
    surname,
    email,
    age,
    gpa
 }

 const  toBeUpdated = document.getElementById("uniqueVal").value

localStorage.setItem(toBeUpdated , JSON.stringify((upUserdata)))

}


