let form = document.querySelector("form");
            
            let form_error = [];
            let fError = document.getElementById("form-errors");

            let yourname = document.getElementById("yourname");
            let yournameerror = document.getElementById("yourname-error");
            const bannedChars = /[^ A-Za-zàâéèêùûñç'-]/

            yourname.addEventListener("input", () => {
                let nameHasBannedChar = bannedChars.test(yourname.value);
                if ((yourname.checkValidity() && !nameHasBannedChar)|| (yourname.value.length == 0)){
                    yourname.className = "validInput";
                    yournameerror.className = "valid";
                }
                else if (nameHasBannedChar){
                    yourname.className = "error";
                    yournameerror.className = "error";
                    yournameerror.textContent = "Your name contains banned character";
                    form_error.push('name: ' + yourname.value);
                    fError.value = JSON.stringify(form_error);
                }
                else{
                    yourname.className = "invalidInput";
                    yournameerror.className = "invalid";
                    yournameerror.textContent= "";
                }
            });

            let email = document.getElementById("email");
            let emailerror = document.getElementById("email-error");
            const validEmail = /^[A-Za-z0-9.]+@[A-Za-z0-9.-]+(?:\.[A-Za-z]{2,})$/;
            const bannedCharsEmail = /[^A-Za-z0-9.@-]/;

            email.addEventListener("input", () => {
                let isEmailValid = validEmail.test(email.value);
                let emailHasBannedChar = bannedCharsEmail.test(email.value);
                if ((isEmailValid && !emailHasBannedChar)|| (email.value.length==0)){
                    email.className = "validInput";
                    emailerror.className = "valid";
                }
                else if(emailHasBannedChar){
                    email.className = "error";
                    emailerror.className = "error";
                    emailerror.textContent = "Email contains banned character!"
                    form_error.push('email: '+ email.value);
                    fError.value = JSON.stringify(form_error);
                }
                else{
                    email.className = "invalidInput";
                    emailerror.className = "invalid";
                    emailerror.textContent = "";
                }
            })

            let comments = document.getElementById("comments");
            let commentserror = document.getElementById("comments-error");
            let charCount = document.getElementById("count"); 
            const bannedCharsComments = /[^ A-Za-z0-9?!,.àâéèêùûñç'-]/;

            comments.addEventListener("input", () => {
                let commentsHasBannedChar = bannedCharsComments.test(comments.value);
                if((comments.checkValidity() && !commentsHasBannedChar)||(comments.value.length == 0)){
                    comments.className = "validInput";
                    commentserror.className = "valid";
                }
                else if(commentsHasBannedChar){
                    comments.className = "error";
                    commentserror.className = "error";
                    commentserror.textContent = "Comments contain banned character!";
                    form_error.push('comments: ' + comments.value);
                    fError.value = JSON.stringify(form_error);

                }
                else{
                    comments.className = "invalidInput";
                    commentserror.className = "invalid";
                    
                    commentserror.textContent = "Comments invalid: must be minimum 10 characters long";
                }

                /* char counter*/
                const maxLength = 250;
                let currentLength = comments.value.length;
                let remainChars = maxLength - currentLength;
                
                if (currentLength==0){
                    charCount.style.visibility = "hidden";
                }
                else{
                    charCount.style.visibility = "visible";
                    charCount.textContent = `${remainChars}`;
                    if (remainChars <= 25) {
                        charCount.style.color = "lightcoral";
                    }
                    else {
                        charCount.style.color = "black";
                    }
                }
            })

            form.addEventListener("submit", (event) => {
                if (comments.className !== "validInput" || email.className !== "validInput" ||
                    yourname.className !== "validInput"){
                    event.preventDefault();
                    // Optionally, you can provide feedback to the user
                    alert("Please fill in all fields correctly before submitting.");
                }
            });

