
 /* برای تایید فرم ثبت نام */

 const nameInput = document.getElementById("name");
 const familyInput = document.getElementById("family");
 const emailInput = document.getElementById("email");
 const passwordInput = document.getElementById("password");
 const submitBtn = document.getElementById("submit-btn");

 nameInput.addEventListener("input", validateForm);
 familyInput.addEventListener("input", validateForm);
 emailInput.addEventListener("input", validateForm);
 passwordInput.addEventListener("input", validateForm);


 function validateForm() {
   const nameValue = nameInput.value.trim();
   const familyValue = familyInput.value.trim();
   const emailValue = emailInput.value.trim();
   const passwordValue = passwordInput.value.trim();
 

   let isValid = true;


   if (nameValue == "") {
     setErrorFor(nameInput, "نام را وارد کنید");
     isValid = false;
   } 
   else {
     setSuccessFor(nameInput);
   }

   if (familyValue == "") {
     setErrorFor(familyInput, "نام  خانوادگی را وارد کنید");
     isValid = false;
   } 
   else {
     setSuccessFor(familyInput);
   }

   
   if (emailValue == "") {
     setErrorFor(emailInput, "ایمیل را وارد کنید");
     isValid = false;
   }  else {
     setSuccessFor(emailInput);
   }

   
   if (passwordValue == "") {
     setErrorFor(passwordInput, "رمز عبور را وارد کنید");
     isValid = false;
   } else {
     setSuccessFor(passwordInput);
   }

   

   
   if (isValid) {
     submitBtn.disabled = false;
   } else {
     submitBtn.disabled = true;
   }
 }

 function setErrorFor(input, message) {
   const formGroup = input.parentElement;
   const errorMessage = formGroup.querySelector(".error-message");
   formGroup.classList.add("error");
   errorMessage.innerText = message;
 }

 function setSuccessFor(input) {
  const formGroup = input.parentElement;
  formGroup.classList.remove("error");
  const errorMessage = formGroup.querySelector(".error-message");
  errorMessage.innerText = "";
}

 /* پیغام popup--------------------------------*/

function showPopup() {
    var popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = "flex";
    
}
function hidePopup() {
    var popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = "none";
}
