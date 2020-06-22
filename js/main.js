     
   //   npm run json:server
   
     $(document).ready(function(){

           // to show and hide login & register form with click action 

        $("#register-tab").click(function(){
          $("#register-tab").addClass("active")
          $("#login-tab").removeClass("active") ;

            $("#loginForm").hide()
            $("#registerForm").attr("hidden",false)

        })
        $("#login-tab").click(function(){
          $("#login-tab").addClass("active")
          $("#register-tab").removeClass("active") ;

            $("#loginForm").show()
            $("#registerForm").attr("hidden",true)

        })
        $(".link-account").click(function(){
          $("#register-tab").addClass("active")
          $("#login-tab").removeClass("active") ;

            $("#loginForm").hide()
            $("#registerForm").attr("hidden",false)

        })
      })


      // 1-  validation form register , 2 - save it in data base and localstorage 

    
var fname ,lname , password , passwordConfirm ,email ,passwordLogin , user ;
      $(document).ready(function(){
          $("#register-fname").keyup(function(){
             fname =     $("#register-fname").val()
            var validationFname = /^[a-z]{2,12}$/
           var  testValidationFname = validationFname.test(fname)
            if(!testValidationFname){
                 $(".fnameError").attr("hidden",false)
            }else{
                $(".fnameError").attr("hidden",true)

             }
          })
          $("#register-lname").keyup(function(){
             lname =     $("#register-lname").val()
            var validationLname = /^[a-z]{2,12}$/
           var  testValidationLnme =validationLname.test(lname)
            if(!testValidationLnme){
                 $(".lnameError").attr("hidden",false)
            }else{
                $(".lnameError").attr("hidden",true)

             }
          })
          $("#register-email").keyup(function(){
             email =     $("#register-email").val()
            var validationEmail =  /^[a-zA-Z0-9]+@(hotmail|yahoo|gmail|)\.com$/ ;
            var  testValidationEmail = validationEmail.test(email)
            if(!testValidationEmail){
                 $(".emailError").attr("hidden",false)
            }else{
                $(".emailError").attr("hidden",true)

             }
          })
          $("#register-password").keyup(function(){
             password =     $("#register-password").val()
            var validationPassword =  /^[a-zA-Z0-9]{6,8}$/;
            var  testValidationPassword = validationPassword.test(password)
            if(!testValidationPassword ){
                 $(".passwordError").attr("hidden",false)
            }else{
                $(".passwordError").attr("hidden",true)

             }
          })
          $("#register-confirmPassword").keyup(function(){
           passwordConfirm =     $("#register-confirmPassword").val()
          if(passwordConfirm !== password){
               $(".passwordConfirmError").attr("hidden",false)
          }else{
              $(".passwordConfirmError").attr("hidden",true)
              $(".btn-register").css("background","#1ab188")
              document.getElementById("rigesterBtn").disabled=false

           }
        })
     

        var usserInfo = []
        $(".btn-register").click(function(){

          if(fname && lname && password && email && passwordConfirm){
           
            
           // to POST Object to json server

         //    var xhr = new XMLHttpRequest();
         //    xhr.open("POST", 'http://localhost:3000/users', true);
         //    xhr.setRequestHeader("Content-Type", "application/json"); 

         //    xhr.onreadystatechange = function () { 
         //       if (xhr.readyState === 4 && xhr.status === 200) { 
 
         //           // Print received data from server 
         //           alert(xhr.responseText) ; 
 
         //       } 
         //   }; 

         //   var data = JSON.stringify({
         //    username :fname.toUpperCase() +" "+lname.toUpperCase() ,
         //    email : email ,
         //    password : password ,
         //    confirmPassword : passwordConfirm,
         //    gander:$("#sele").val()
         //  }); 

// console.log($("#sele").val())

         //  xhr.send(data);
         //  console.log(data) 

         //  console.log(data.username) 
         //  console.log(username) 

         //  checkResult()
         
        resetDataFormRegister()  
         location.href = 'welcome/index.html'


          }


        })
 

        // validation of Login Form 

        
          $("#login-email").keyup(function(){
            usernameLogin =     $("#login-email").val()
              var validationusernameLogin  =/^[a-zA-Z0-9]+@(hotmail|yahoo|gmail|)\.com$/;
              var  testValidationusernameLogin  = validationusernameLogin .test(usernameLogin)
              if(!testValidationusernameLogin ){
                $(".emailError").attr("hidden",false)
           }else{
               $(".emailError").attr("hidden",true)

            }
         })
         
         $("#login-password").keyup(function(){
            passwordLogin =     $("#login-password").val()
           var validationPasswordLogin =  /^[a-zA-Z0-9]{6,8}$/;
           var  testValidationPasswordLogin = validationPasswordLogin.test(passwordLogin)
           if(!testValidationPasswordLogin ){
                $(".passwordError").attr("hidden",false)
           }else{
               $(".passwordError").attr("hidden",true)
               $("#loginBtn").css("background","#1ab188")
               document.getElementById("loginBtn").disabled=false
             

            }
         })
         $("#loginBtn").click(function(){

              if( passwordLogin && usernameLogin){
               location.href = 'welcome/index.html'
            }
         })
      

      })



 // Function to clear form data after click Register 

         function  resetDataFormRegister() {
            $("#register-fname").val("")
            $("#register-lname").val("")
            $("#register-email").val("")
            $("#register-password").val("")
            $("#register-confirmPassword").val("")
         
         }

  // Function to clear form data after click Login 

      function  resetDataFormLogin() {
      
         $("#login-email").val("")
         $("#login-password").val("")
      
      }



 // Function to  show hide  paasword  REGISTER
        function hideShowPasswordRegister(){

      let showPass =   document.getElementById("showPass")
      let hidePass =   document.getElementById("hidePass")
      
      showPass.addEventListener("click",function(){
        $("#register-password").attr("type","text")
      hidePass.style.display="inline-block"
      showPass.style.display="none"
      console.log("show")
      
      })
      hidePass.addEventListener("click",function(){
        $("#register-password").attr("type","password")
      console.log("hide")

        showPass.style.display="inline-block"
        hidePass.style.display="none"
        
        })

      }
      hideShowPasswordRegister()
 //  Function to show hide  confirm paasword REGISTER
       function hideShowPasswordConfirmRegister(){
               var  showConfirm =   document.getElementById("showConfirm")
               var  hideConfirm =   document.getElementById("hideConfirm")

               showConfirm.addEventListener("click",function(){
               $("#register-confirmPassword").attr("type","text")
               hideConfirm.style.display="inline-block"
               showConfirm.style.display="none"
               console.log("confirm  show")
   
           })

            hideConfirm.addEventListener("click",function(){
            $("#register-confirmPassword").attr("type","password")
            console.log("hide")

         showConfirm.style.display="inline-block"
            hideConfirm.style.display="none"
            console.log("confirm hide")
            })
  }

hideShowPasswordConfirmRegister()
      

 //  Function to show hide  confirm paasword LOG In
      function hideShowPasswordConfirmLogin(){
            var  showLogin =   document.getElementById("showLogin")
            var  hideLogin =   document.getElementById("hideLogin")

            showLogin.addEventListener("click",function(){
            $("#login-password").attr("type","text")
            hideLogin.style.display="inline-block"
            showLogin.style.display="none"
            console.log("confirm  show")

      })

   hideLogin.addEventListener("click",function(){
         $("#login-password").attr("type","password")
         console.log("hide")

      showLogin.style.display="inline-block"
      hideLogin.style.display="none"
      console.log("confirm hide")
   })
}

hideShowPasswordConfirmLogin()
   

function noneResetFormDataWithGander(){

   $("#register-fname").val()
   $("#register-lname").val()
   $("#register-email").val()
   $("#register-password").val()
   $("#register-confirmPassword").val()
}

var textAlert = "sorry you must select your gander !"

var textAlertUpper =  textAlert.toUpperCase()
// function checkGander(){
//    if($("#sele").val()===$("#boy").val()){
//       console.log("boy")
//                // location.href = 'male/boy.html'

//    } else  if($("#sele").val()===$("#girl").val()){
//       console.log("girl")
//                // location.href = 'famle/girl.html'

//    } else if($("#sele").val()===$("#gander").val() ){

//      alert(textAlertUpper )
//    //   noneResetFormDataWithGander()

//    }
// }
  

// rout to onther page with click in register buttom
// function access (){
//    if($("#sele").val()=="m"){
//       location.href = 'male/index.html'

// }else if($("#sele").val()=="f"){
// location.href = 'famle/index.html'

// }else if($("#sele").val()=="g"){
// alert(textAlertUpper )

// }

//   }

//   function checkResult(){
//      if(username==username && password==password && email==email){
//       alert("sorry this is user allready sgin up")
//      }
//   }


// var getData = new XMLHttpRequest();

// getData.open("GET",'http://localhost:3000/users', true)


// getData.setRequestHeader("Content-Type", "application/json"); 

// getData.onreadystatechange = function () { 
//    if (getData.readyState === 4 && getData.status === 200) { 

//        // Print received data from server 
//       //  console.log(getData.responseText,typeof(getData.responseText)) ; 
//        console.log(getData,typeof(getData))
//        for(var i = 0 ; i<getData.responseText.length ; i++){
//          var DTA = getData.responseText[i].username;
//        }
//        console.log(DTA)
//    } 
// }; 

// var dataReturn = JSON.stringify({
// username :fname.toUpperCase() +" "+lname.toUpperCase() ,
// email : email ,
// password : password ,
// confirmPassword : passwordConfirm,
// gander:$("#sele").val()
// }); 

// console.log($("#sele").val())

// getData.send(null);
// console.log(getData) 
