import { useState } from "react"



const Account = () => {
  const [registerFName, setregisterFName] = useState(``);
  const [registerLName, setRegisterLName] = useState(``);
  const [registerEmail, setRegisterEmail] = useState(``);
  const [registerPassword, setRegisterPassword] = useState(``);

  const [inputEmail, setInputEmail] = useState(``);
  const [inputPassword, setInputPassword] = useState(``)

  const [token, setToken] = useState({})

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const registerUser = async (event) => {
    event.preventDefault();
    const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: registerFName,
        lastname: registerLName,
        email: registerEmail,
        password: registerPassword,
      })
    })

    setregisterFName(``);
    setRegisterLName(``);
    setRegisterEmail(``);
    setRegisterPassword(``);

    const object = await response.json();
    { console.log(token) }
    const accessToken = object.token
    setToken(accessToken);
    localStorage.setItem(`token`, accessToken)
  };

  const logIn = async (event) => {
    event.preventDefault();
    const userResponse = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: inputEmail,
        password: inputPassword
      })
    })

    setInputEmail(``);
    setInputPassword(``)

    const object = await userResponse.json();
    const accessToken = object.token
    { console.log(token) }
    setToken(accessToken)
    localStorage.setItem(`token`, accessToken)
  }

  const logOut = () => {

    localStorage.removeItem(`token`)
    setIsLoggedIn(false);
  }
  return (
    <>

      <form onSubmit={registerUser}>
        <h2>Make an Account!</h2>
        <input type="text" placeholder="First Name"
          onChange={((event) => { setregisterFName(event.target.value) })}
          value={registerFName}
        />

        <input type="text" placeholder="Last Name"
          onChange={((event) => { setRegisterLName(event.target.value) })}
          value={registerLName}
        />

        <input type="email" placeholder="Email"
          onChange={((event) => { setRegisterEmail(event.target.value) })}
          value={registerEmail}
        />

        <input type="password" placeholder="Password"
          onChange={((event) => { setRegisterPassword(event.target.value) })}
          value={registerPassword}
        />

        <button>Create Account</button>

      </form>

      <form onSubmit={logIn}>
        <h2>...already have one? Log In!</h2>
        <input type="email" placeholder="Email"
          onChange={((event) => { setInputEmail(event.target.value) })}
          value={inputEmail}
        />

        <input type="password" placeholder="Password"
          onChange={((event) => { setInputPassword(event.target.value) })}
          value={inputPassword} />
        <button>Log In</button>
      </form>
      
      <button onClick={logOut}>Logout</button>

    </>
  )
};
export default Account