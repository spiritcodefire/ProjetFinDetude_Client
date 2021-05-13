import React, {useState, useContext} from 'react'
//import {Navigate} from 'react-router-dom';
import { ContextUser } from '../logique/hooks/UserProvider'
import URLserver from '../utils/UrlServer'


const Login = () => {
    const context = useContext(ContextUser)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [text, setText] = useState('text');
    const [visible, setVisible] = useState('hidden')
    const [redirect, setRedirect] = useState(false);
    const [resultToken, setResultToken] = useState('');

    if (redirect) { 
        console.log("redirect activé");
        if (resultToken) {
            window.fetch(`${URLserver}/private/secret?token=${resultToken}`)
                    .then((response)=>{
                        response.json().then((result)=>{
                            context.setContextLogin(true)
                        })
                    })
            // return <Navigate to='/rprivate' />
        }
        
    }

    return (
        <div>
            <div className="container ">
                <div className="row justify-content-center">
                    <div className="col-xs-6 col-md-4  m-5 shadow-lg">

                        <div className="form-floating mb-3 mt-5">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(event) => {setEmail(event.target.value)}}/>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>

                        <div className="form-floating mb-5">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(event) => {setPassword(event.target.value)}}/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="form-group row mb-0">
                            <div className="col-md-8 offset-md-5">
                                <button type="submit" className="btn btn-primary" 
                                    disabled={email === "" || password === ""} onClick={async (event) => {
                                    event.preventDefault()
                                    var contact = {email: email,password: password}
                                    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                                    if(email.match(regex)) {
                                        
                                        await window.fetch(`${URLserver}/login` , { method: 'POST', body : JSON.stringify(contact), headers: {"Content-Type": "application/json",},})
                                        .then((response)=>{
                                            response.json().then((result)=>{
                                                console.log('on rentre dans la réponse');
                                                setResultToken(result.token) 
                                                localStorage.setItem('loginSecure', JSON.stringify({
                                                    login: true,
                                                    token: result.token

                                                }))  
                                                    setRedirect(true)
                                            }) 
                                        })
                                        
                                    }
                                    }}>send
                                </button>
                                <div className='text-center' style={{"visibility": visible, "marginTop": "15px", "color" : "red"}}>
                                    {text}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
