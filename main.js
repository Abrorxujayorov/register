const id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

const loginbtn = document.querySelector('.login')
const registerbtn = document.querySelector('.regiter')

let form = id('form'),
    username = id('username'),
    email = id('email'),
    pass1 = id('password'),
    pass2 = id('password2'),
    // loginform
    loginform = id('formlogin')
    usernem = id('emaillogin'),
    passwordlogin = id('passwordlogin')

loginbtn.addEventListener('click', function() {
    form.style.display = 'none'
    loginform.style.display = 'block'
    loginbtn.style.color = '#000'
    loginbtn.style.background = 'rgba(148, 218, 218, 0.264)'
    registerbtn.style.color = 'rgb(14, 216, 78)'
    registerbtn.style.background = 'rgb(104, 149, 188)'
})
registerbtn.addEventListener('click', function() {
    form.style.display = 'block'
    loginform.style.display = 'none'
    registerbtn.style.color = '#000'
    loginbtn.style.color = 'rgb(14, 216, 78)'
    loginbtn.style.background = 'rgb(104, 149, 188)'
    registerbtn.style.background = 'rgba(148, 218, 218, 0.264)'
    loginbtn.style.background = 'rgb(104, 149, 188)'
})

let user1 = JSON.parse(localStorage.getItem('user1')) ? JSON.parse(localStorage.getItem('user1')) : []
form.addEventListener('submit', function(e) {
    e.preventDefault()
    let id = new Date().getTime().toString()
    user1.push ({
        username: username.value,
        email:email.value,
        pass1: pass1.value,
        pass2: pass2.value,
        id: id
    })
    for (let i = 0; i < user1.length; i++) {
        if (user1[i].pass1 === user1[i].pass2) {
            window.location.href = "./nomozvaqatlar.html";
            localStorage.setItem("user1", JSON.stringify({
                username: user1[i].username,
                email: user1[i].email,
                password1: user1[i].pass1,
                password2: user1[i].pass2,
                id: user1[i].id
             }));
        }
        else{
            pass1.style.border = '2px solid red'
            pass2.style.border = '2px solid red'
        }
    }
})
loginform.addEventListener('submit', function(e) {
    e.preventDefault()
    if(passwordlogin.value === user1.password1 && usernem.value === user1.username){
        window.location.href = "./nomozvaqatlar.html";
    }
    else{
        usernem.style.border = '2px solid red',
        passwordlogin.style.border = '2px solid red'
    }
    }
)
console.log(user1);