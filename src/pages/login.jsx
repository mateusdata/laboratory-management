import React, { useContext, useState } from 'react';
import { Context } from '../context/authContext';
import { Link } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('ifba@gmail.com');
  const [password, setPassword] = useState('123456');
  const { login, contextHolder } = useContext(Context);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault(); 
    console.log('Email:', email);
    console.log('Senha:', password);
    login(email, password);

  };

  return (
  <html className="h-full">
    {contextHolder}
    <body className="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
      <main className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Entrar</h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
               Bem vindo ao Gestão labs
              { false &&  <a className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="../examples/html/signup.html">
                  Sign up here
                </a>}
              </p>
            </div>

            <div className="mt-5">
              <hr className='mb-12'/>
              <form onSubmit={handleLogin}>
                <div className="grid gap-y-4">
                 
                  <div>
                    <label for="email" className="block text-sm mb-2 dark:text-white">Email address</label>
                    <div className="relative">
                      <input  onChange={handleEmailChange} placeholder='Email' type="email" id="email" name="email" className="py-3 border-2 outline-none px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="email-error"/>
                      <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                        <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>
                      </div>
                    </div>
                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">Por favor inclua um email valido</p>
                  </div>
                 

                 
                  <div>
                    <div className="flex justify-between items-center">
                      <label for="password" className="block text-sm mb-2 dark:text-white">Password</label>
                      <a className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="../examples/html/recover-account.html">Esqueceu a senha?</a>
                    </div>
                    <div className="relative">
                      <input  onChange={handlePasswordChange} placeholder='Senha' type="password" id="password" name="password"  className="py-3 border-2 outline-none px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"  required aria-describedby="password-error"/>
                      <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                        <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>
                      </div>
                    </div>
                    <p className="hidden text-xs text-red-600 mt-2" id="password-error">A senha deve ter 8  caracteres</p>
                  </div>
                 

                  <div className="flex items-center">
                    <div className="flex">
                      <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                    </div>
                    <div className="ms-3">
                      <label for="remember-me" className="text-sm dark:text-white">Remember me</label>
                    </div>
                  </div>
                 

                  <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Sign in</button>
                </div>
              </form>
             
            </div>
          </div>
        </div>
      </main>
    </body>
  </html>    
  );
};

export default Login;
