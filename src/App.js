// import InputField from './components/InputField';
import Button from './components/Button';
import LoginForm from './components/LoginForm';
import './components/LoginForm'


function App() {
  return (
    <div>
    <div className='facebook'>
      <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"></img>
      {/* <p>facebook</p> */}
      <h2>Facebook helps you connect and share with people in your life.</h2>
      </div>
    
    <div className='form'>
      <div className='login-form'>
            <LoginForm type={'text'} placeholder={'Email address or phone number'} />
            <LoginForm type={'text'} placeholder={'Password'} />
            <Button text="Log in" color="blue" />
            <div>
          <div className='forgot'><a href="#" className="forgot-password">Forgotten password?</a></div>
            </div>
            <div class="line"></div>
            <Button text="Create new account" color="green" />
            </div> 
            <div className='create'>
            <a href="#created">Create a Page </a>for a celebrity, brand or business
            </div>
            </div>
      </div>
);
}

export default App;
