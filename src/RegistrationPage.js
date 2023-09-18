import './RegistationPage.css';

function RegistrationPage(){
    const [details, setDetails] = useState({first_name : "", last_name : "", email: "", password: "", confirm_password: ""});

    function handleChange(event){
        const {name, value} = event.target;
        setDetails(prevValues => ({...prevValues, [name] : value}));
    }

  return (
    <div className="registration--page--container">
        <form className="registration--form--container">
            <div className="registration--form--container--section">
                <label htmlFor="first_name">First Name:</label>
                <input type="text" onChange={handleChange} value={details.first_name}/>
            </div>
            <div className="registration--form--container--section">
                <label htmlFor="last_name">Last Name:</label>
                <input type="text" onChange={handleChange} value={details.last_name}/>
            </div>
            <div className="registration--form--container--section">
                <label htmlFor="username">UserName :</label>
                <input type="text" onChange={handleChange} value={details.username}/>
            </div>
            <div className="registration--form--container--section">
                <label htmlFor="email">Email :</label>
                <input type="email" onChange={handleChange} value={details.email}/>
            </div>
            <div className="registration--form--container--section">
                <label htmlFor="password">Password: </label>
                <input type="text" onChange={handleChange} value={details.password}/>
            </div>
            <div className="registration--form--container--section">
                <label htmlFor="confirm_password">Confirm Password: </label>
                <input type="text" onChange={handleChange} value={details.confirm_password}/>
            </div>

            <button>Register</button>
        </form>
    </div>
  )
}

export default RegistrationPage;
