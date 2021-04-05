

   var validatePassword = (password) => {
   if (password.length < 8) {
     return false    
    } return true
   }

    //returns false when the password is missing a lower case letter'//
    var  validatePassword = (password) => {
        const lowerCaseLetter = 'abcdefghigklmnopqrstuvwxyz'
        for (let i = 0; i < password.length; i++) {
         if(password != password.toLowerCase()){
             return false
         }return true
        }
    }

    //returns false when the password is missing an upper case letter'//
    var upperCaseLetter = (password) => {
        const upperCaseLetter ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        for (let i = 0; i < password.length; i++){
         if(password != password.toUpperCase()){
             return false
         } return true
     }
    }

    //returns false when the password is missing a numeric value'//
    var numericValue = (password) => {
        const numericValue = '0123456789'
        for(let i = 0; i <password.length; i++)
        if(numericValue.indexOf(password[i]) <= 0 ){
            return false
        } return true

    }
    //returns false when the password is missing a special character'//
    var specialCharacter= (password) => {
        const specialCharacter = "!@#$%^&?~"
        for(let i = 0; i <password.length; i++)
        if(char.indexOf(password[i]) <= 0 ){
            return false
        } return true

    }
    //returns true when the password meets all requirements',//
    




    module.exports = validatePassword











