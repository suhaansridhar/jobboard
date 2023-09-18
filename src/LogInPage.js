import './LogInPage.css';
import {useState} from 'react';

function LogInPage(){
    const [credentials, setCredentials] = useState({username: '', password : ''});

    function handleChange(event){
        const {name, value} = event.target;
        setCredentials(prevValues => ({...prevValues, [name] : value}));
    }

    function submit(){

    }
    return(
        <div className='login--page--container'>
            <h3>Login to your account</h3>
            <form onSubmit={submit}>
                <div className="login--page--container--section">
                    <label htmlFor="username">User Name:</label>
                    <input type="text" onChange={handleChange} name='username'/>
                </div>
                <div className="login--page--container--section">
                    <label htmlFor="password">Password: </label>
                    <input type="text" onChange={handleChange} name='password'/>
                </div>
                <button type='submit'>Submit</button>
            </form>
            <h5>No account? Register<a>here!</a></h5>
        </div>
    )
}

export default LogInPage;