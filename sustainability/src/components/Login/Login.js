import React from 'react'
import './Login.css';


function Login() {
  const handleSubmit = (e) => {  
    <a href="/" style="text-decoration:none">Home</a>
    e.preventDefault();
  }

  return (
   
    <div className="container">

      <h2>Login</h2>
      <form class="login_form" onSubmit={handleSubmit}>
        <div class="font">
          <label>Username:</label>
          <input
            type="text"
            required
          />
        </div>

        <div class="font">
        <label>Password: </label>
        <input
          type="password"
          required
        />          
        </div>
        
        <div>
        <label>Account Type:</label>

        <select>
          <option value="free">free</option>
          <option value="premium">premium</option>
        </select>
        </div>

       
        <button onclick="myFunction()"><a href="/">Login</a></button>
        
      </form>

<script src="valid.js"></script>
<script>
  alert('this is an alert');
</script>

    </div>
    
  )
}




export default Login