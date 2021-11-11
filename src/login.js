import axios from 'axios'
import React from 'react'
import Swal from 'sweetalert2'

function modalLogin() {
    Swal.fire({
        title: 'user Login',
        html: `
             <input type="text" id="login" class="swal2-input" placeholder="Username">
             <input type="password" id="password" class="swal2-input" placeholder="Password">
         `
        ,
        confirmButtonText: 'Sign in',
        focusConfirm: false,
        allowOutsideClick: true,
        preConfirm: () => {
          const login = document.getElementById('login').value
          const password = document.getElementById('password').value
          if (!login || !password) {
              Swal.showValidationMessage(`Please enter login and password`)
              }
              return { login: login, password: password }
          }
      }).then(res => {
          if (res.value) {
              console.log(res.value.login)
              axios.post('https://apidev.tools.antpack.co/thebeautyclub/api/auth/login', {email: res.value.login, password: res.value.password}).then((res) => {
                  sessionStorage.setItem('token', res.headers.authorization)
                  console.log(sessionStorage.getItem('token'))
                  window.open('/home', '_self')
            }).catch((e) => {
                console.log("error ***************", e)
              })
          }
      })
   }


function login () {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            {/* <button style={{margin: '50px 20px', padding: '10px 20px', backgroundColor: '#4F4F4F', color: 'white'}}>registrer</button> */}
            <button style={{margin: '50px 20px', padding: '10px 20px', backgroundColor: '#4F4F4F', color: 'white'}} onClick={modalLogin}>Login</button>
        </div>
    )   
}



export default login