
class Validator{
    constructor(){};

    emailIsValid(email){
        if(email.matches("[\w\.]+@[a-z]+\.[(com)(es)(hn)]")){
            return true;
        }
        return false;
    }

    isEmpty(inputValue){
        if(inputValue == null || inputValue == undefined){
            return true;
        }
        return false;
    }

    nameIsValid(name){
        if(name.match("([A-ZÁÉÍÓÚ][a-záéíóúñü]{2,})( [A-ZÁÉÍÓÚ][a-záéíóúñü]{2,})?")){
            return true;
        }
        return false;
    }

    lastNameIsValid(lastName){
        if(lastName.match("([A-ZÁÉÍÓÚ][a-záéíóúñü]{2,})( [A-ZÁÉÍÓÚ][a-záéíóúñü]{2,})?")){
            return true;
        }
        return false;
    }

    passwordIsValid(pass){
        if(pass.match("[A-Za-z0-9_\.]{8,}")){
            return true;
        }
        return false;
    }

    acronymisValid(acronym){
        if(acronym.match("[A-Z]{2,}")){
            return true;
        }
        return false;
    }

    userNameIsValid(userName){
        if(userName.match("[A-Za-z0-9_\.]{3,}")){
            return true;
        }
        return false;
    }

    phoneIsValid(phoneNumber){
        if(phoneNumber.match("(\(\+504\))?\d{4}-?\d{4}")){
            return true;
        }
        return false;
    }

    positionIsvalid(position){
        if(position.match("-?\d+\.\d+")){
            return true;
        }
        return false;
    }

    fullNameIsValid(fullName){
        if(fullName.match("^([A-ZÁÉÍÓÚ][a-záéíóúñü]{2,})( [A-ZÁÉÍÓÚ][a-záéíóúñü]{2,}){1,3}$")){
            return true;
        }
        return false;
    }

    zipIsValid(zip){
        if(zip.match("\+?\d+")){
            return true;
        }
        return false;
    }

    cardNumberIsValid(cardNumber){
        if(cardNumber.match("(\d{4}){4}")){
            return true;
        }return false;
    }

    validateExpirationNumber(number){
        if(number.match("\d{2}/\d{2}")){
            return true;
        }return false;
    }

    validateCCV(ccv){
        if(ccv.match("\d{3}")){
            return true;
        }return false;
    }
}
