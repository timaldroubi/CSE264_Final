import React from 'react'
import './Login.css';

function Login() {
  return (

    <div class="container">
        <h1 class="label">Login</h1>

		<form class="login_form" action="home.html" method="post" name="form" onsubmit="return validated()">
      <div class="font">Username</div>

      <input autocomplete="off" type="text" name="username" required/>
      <div id="username_error">Please create a Username</div>
			<div class="font font2">Password</div>

			<input type="password" name="password" required/>
			<div id="pass_error">Please create a Password</div>


      {/** <div><input type="radio" value ="Free" name="role" /> Free</div>
       <div><input type="radio" value ="Premium" name="role" /> Premium</div>*/}




		</form>

      <form >
        <label class="radio-inline">
          <input type="radio" name="optradio" checked />Free
        </label>
        <label class="radio-inline">
          <input type="radio" name="optradio" />Premium
        </label>

      </form>

			<button class="login_form" type="submit">Login</button>


    
        <script src="valid.js"></script>

	  </div>	
    

  )
}




export default Login