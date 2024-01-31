import axios from 'axios';
import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confPassword, setConfPassword] = useState('');
  const [ email, setEmail ] = useState('');
  const [ nama_lengkap, setNama_Lengkap ] = useState('');
  const [ alamat, setAlamat ] = useState('');
  const [ role, setRole ] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = async(e) => {
    e.preventDefault();
    

    try {
      const response = await axios.post('http://localhost:8001/signup', {
        username,
        password,
        confPassword,
        email,
        nama_lengkap,
        alamat,
        role
      });
      toast.success(`${response.data.msg}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true
      })

      console.log(response.data);

    } catch (error) {
      console.error('error signup', error.response.data)
      toast.error(`${error.response.data.msg}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true
      })
    }
  }

  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h1>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">

            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input id="username" name="username" type="text" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
          
            <div>
              <label htmlFor="confPassword" className="sr-only">Confirm Password</label>
              <input id="confirmPassword" name="confirmPassword" type="password" autoComplete="confPassword" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)}/>
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input id="email" name="email" type="text" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div>
              <label htmlFor="nama_Lengkap" className="sr-only">Nama Lengkap</label>
              <input id="nama_Lengkap" name="namaLengkap" type="text" autoComplete="namaLengkap" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Nama Lengkap" value={nama_lengkap} onChange={(e) => setNama_Lengkap(e.target.value)}/>
            </div>


            <div>
              <label htmlFor="alamat" className="sr-only">Alamat</label>
              <input id="alamat" name="alamat" type="text" autoComplete="alamat" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)}/>
            </div>


            <div>
              <label htmlFor="role" className="sr-only">Role</label>
              <input id="role" name="role" type="text" autoComplete="role" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)}/>
            </div>


          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500"> have an account?? </Link>
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up</button>
          </div>


        
        </form>
      </div>
      <ToastContainer
       position= "top-center"
       autoClose={3000}
       hideProgressBar
      />
    </div>

  )
}

export default SignUp;
