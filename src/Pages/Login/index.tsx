import { useEffect } from 'react';
import { useState } from 'react';

import '../../Styles/global.css';
import './styles.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [classeButton, setClasseButton] = useState('buttonDisabled');
    //const [isEnable, setIsEnable] = useState(false);

    useEffect(() => {
        if(email !== '' && password !== '' && password.length > 5) {
            setClasseButton('buttonEnabled');
        }
    }, [email, password]);

    function isButtonEnabled() {
        if(email === 'teste@teste.com' && password === '123456') {

        }else {
            alert("E-mail ou senha invalidos");
            setEmail('');
            setPassword('');
        }
    }


    return (
        <div id="container">
            <div className="content-login">
                <h2 className="title">Administração</h2>
                <div className="content_input">
                    <label>E-mail</label>
                    <input
                        type="text"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) =>setEmail(e.target.value)}
                    />
                </div>

                <div className="content_input">
                    <label>Senha</label>
                    <input
                        type="password"
                        placeholder="Digite seu e-mail"
                        value={password}
                        onChange={(e) =>setPassword(e.target.value)}
                    />
                </div>

                <button className={classeButton} onClick={isButtonEnabled}>Login</button>
            </div>
        </div>
    )
}

export default Login;