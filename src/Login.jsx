import React from 'react';

const Login = () => {
  return (
    <main className='h-screen flex '>
      <div className="image w-1/2 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-overlay">
        <img src="Images\img21.webp" className='w-full h-screen object-cover object-top' alt="" />
      </div>
      <form action="/" className='w-1/2 flex flex-col justify-center mt-12'>
        <h1 className='font-primary text-5xl text-center'>Log In</h1>
        <input type="text" placeholder='Name' className='px-6 py-3 border border-secondary w-1/2 mx-auto mt-6 outline-secondary'/>
        <input type="email" placeholder='Email' className='px-6 py-3 border border-secondary w-1/2 mx-auto mt-6 outline-secondary'/>
        <input type="password" placeholder='Password' className='px-6 py-3 border border-secondary w-1/2 mx-auto mt-6 outline-secondary'/>
        <button type='submit' className='px-5 py-2 border text-xl border-black bg-transparent w-fit rounded-full mx-auto mt-12'>Submit</button>
      </form>
    </main>
  )
}

export default Login;