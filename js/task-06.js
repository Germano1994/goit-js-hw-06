const input = document.querySelector('#validation-input')
input.addEventListener('blur', (e)=> {
const checkInputLength = input.dataset.length
    input.setAttribute("class", "")
    if(e.target.value.length < checkInputLength){
        input.classList.add("invalid");
    } else {
        input.classList.add("valid");
    }
})