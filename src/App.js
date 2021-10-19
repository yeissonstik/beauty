
import React from "react";
import './App.css';
import Axios from 'axios';
import { Button } from '@mui/material';
import Swal from 'sweetalert2';
import axios from 'axios';


function addUser() {

  // Swal.fire({
    //   title: 'user Login',
    //   html: `<input type="text" id="user" class="swal2-input" placeholder="Username">
    //   <input type="password" id="userPassword" class="swal2-input" placeholder="Password">
    //   <input type="text" id="firsname" class="swal2-input" placeholder="Firs Name">
    //   <input type="text" id="secondname" class="swal2-input" placeholder="Second Name">
    //   <input type="number" id="age" class="swal2-input" placeholder="age">
    //   <input type="email" id="age" class="swal2-input" placeholder="email">
    //   <select class="swal2-select swal2-input" id="city">
    //     <option class="swal2-input" value="1">Pereira</option>
    //     <option value="swal2-input">Bogota</option>
    //   </select>`
    //   ,
    //   confirmButtonText: 'Sign in',
    //   focusConfirm: false,
    //   allowOutsideClick: true,
    // })
  }
  
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: false,
      cities: null
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      form: !prevState.form
    }));
  }
  getCity() {
    axios.get('https://apidev.tools.antpack.co/thebeautyclub/api/cities?page=1&limit=10').then((res) => {
      this.setState({cities: res.data.data})
      console.log(this.state.cities)
    })
  }

  createUser() {
    const data = {
      "username": document.getElementById('user').value,
      "password": document.getElementById('userPassword').value,
      "name": document.getElementById('firsname').value,
      "lastname": document.getElementById('secondname').value,
      "age": document.getElementById('age').value,
      "email": document.getElementById('email').value,
      "phone": document.getElementById('phone').value,
      "cityId": document.getElementById('city').value,
      "tokenFacebook": ""
    }
    axios.post('https://apidev.tools.antpack.co/thebeautyclub/api/users', data)
    console.log(data)
  }
  componentDidMount() {
    this.getCity()
  }
  render(){
    return(
      <div className="App">
        <Button variant="contained" style={{margin: '50px 20px'}} onClick={this.handleClick}>registrer</Button>
        <Button variant="contained" style={{margin: '50px 20px'}}>Login</Button>
  
        {
          this.state.form
          ? 
          <div>
            <form style={{display: 'flex', flexDirection: 'column'}}>
              <input type="text" id="user" className="swal2-input" placeholder="Username"></input>
              <input type="password" id="userPassword" className="swal2-input" placeholder="Password"></input>
              <input type="text" id="firsname" className="swal2-input" placeholder="Firs Name"></input>
              <input type="text" id="secondname" className="swal2-input" placeholder="Second Name"></input>
              <input type="number" id="age" className="swal2-input" placeholder="age"></input>
              <input type="email" id="email" className="swal2-input" placeholder="email"></input>
              <input type="number" id="phone" className="swal2-input" placeholder="phone"></input>
              <select className="swal2-select swal2-input" id="city">
                {
                  this.state.cities.map((city) => (
                    <option className="swal2-input" value={`${city.id}`}>{city.name}</option>
                  ))
                }
                {/* <option value="swal2-input">Bogota</option> */}
              </select>`

              <Button type='submit' onClick={this.createUser} variant='contained' style={{width: '400px', margin: 'auto'}}> Registrer </Button>
            </form>
          </div>
          : null
        }
      </div>

    )
  }
}

export default App;
