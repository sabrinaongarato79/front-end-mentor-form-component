// variables
const form = document.querySelector('.form');

const validations = {
    state: {
        fname: null,
        lname: null,
        email: null,
        password: null,
    },
    isEmpty: function (key, node) {
        
        if (node.value.trim() !== '') {
            this.state[key] = true;
            hideError(node);
        } else {
            if(this.state[key] === false )return
            showError(node,`${key} can not be empty`);
            this.state[key] = false;
        }
    },
    minLength:function(key, node){
               
        if(node.value.trim().length>=6){
            this.state[key]=true;
            hideError(node);
        } else{
            if(this.state[key] === false )return
            showError(node,`${key} must contain more than 6 character`)
            this.state[key]=false;
        }          
    },
    isEmail: function(key, node){

        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(regex.test(node.value.trim())){
            this.state[key] = true;
            hideError(node)
        }else{
            if(this.state[key] === false )return
            showError(node,`is not a valid email`);
            this.state[key] = false;
        }
    }
}

// funciones
    function showError(node,messageError){  // node representa el input que no pasa la validacion
        node.classList.add("input-error");
        const formGroup = node.parentElement; // representa el padre del nodo input

        const icon = document.createElement('i');  // <i></i>
        icon.classList.add("alert-icon"); // <i class="alert-icon"></i>
        formGroup.appendChild(icon);

        const message = document.createElement('p'); // <p></p>
        message.classList.add("error-message"); // <p class="error-message"></p>
        message.innerText = messageError; // <p class="error-message"> can not...</p>
        formGroup.appendChild(message);
    }
    function hideError(node){
        node.classList.remove("input-error");
        const formGroup = node.parentElement; // representa el padre del nodo input
        
        while ( formGroup.children.length > 1 ) {
            formGroup.removeChild(formGroup.lastChild);
        } 
    }
    
// eventos

form.addEventListener('submit', (event) => {
    
    event.preventDefault(); // evita que la pagina se refresque

    validations.isEmpty('fname', event.target[0]);
    validations.isEmpty('lname', event.target[1]);
    validations.isEmpty('email', event.target[2]);
    validations.minLength('password',event.target[3]);
    validations.isEmail('email',event.target[2]);

    if (validations.state.email && validations.state.fname && validations.state.lname && validations.state.password) {
        console.log('enviando formulario...')
    } else {
        console.error('uno o mas campos no son correctos.')
    }
})





