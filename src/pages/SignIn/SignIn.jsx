import Google from '../../assets/GoogleIcon.svg'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {

  const navigate = useNavigate();
  const handleSignUpClick = () => {
    navigate('/signup')
  }
  
  return (
    <>
      <div className=" w-screen h-screen bg-zinc-900 font-poppins flex flex-col items-center justify-center px-8">
        <div className="flex items-center justify-center flex-col gap-2">
          <h1 className="text-white text-lg">Welcome Back!</h1>
          <p className=" text-gray-600 text-xs">Please sign in to your account</p>
        </div>
        <div className=" mt-20 w-full flex flex-col gap-3 items-center justify-center">
          <input type="text" className="rounded-2xl py-5 px-5 w-full bg-zinc-800 text-xs text-white outline-none" placeholder="Username"/>
          <input type="password" className="rounded-2xl py-5 px-5 w-full bg-zinc-800 text-xs text-white  outline-none" placeholder="Password"/>
          <div className="flex w-full justify-end">
          <a href="#" className="text-blue-800 text-xs">Forgot Password?</a>
          </div>
        </div>
        <div className=" mt-20 w-full flex flex-col gap-3 items-center justify-center">
        <button className="text-white text-xs bg-indigo-600 py-5 w-full rounded-2xl">Sign in</button>
        <button className="text-black text-xs bg-white py-3 w-full rounded-2xl items-center justify-center flex"><img src={Google} className='h-8 mr-2'/> Sign in With Google</button>
        </div>
        <div className='mt-3'>
          <p className='text-xs text-zinc-400'>Don't Have An Account? <a href="#" className='text-blue-800' onClick={handleSignUpClick}>Sign Up</a></p>
        </div>
      </div>
    </>
  )
}