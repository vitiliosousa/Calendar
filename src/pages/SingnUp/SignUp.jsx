import { useNavigate } from "react-router-dom"
export default function SignUp() {
    
  const navigate = useNavigate();
  const handleSignUpClick = () => {
    navigate('/')
  }

  const NextPage = () => {
    navigate('/course')
  }

  return (
      <>
      <div className=" w-screen h-screen bg-zinc-900 font-poppins flex flex-col items-center justify-center px-8">
        <div className=" flex items-center justify-center flex-col gap-2" >
          <h1 className=" text-white text-lg "> Create new account</h1>
          <p className=" text-gray-600 text-xs">Please fill the form to continue</p>
        </div>
        <div className=" mt-20 w-full flex flex-col gap-3 items-center justify-center">
          <input type="text" className=" rounded-2xl text-white py-5 px-5 bg-zinc-800 text-xs w-full outline-none" placeholder="Full Name" />
          <input type="email" className="rounded-2xl text-white py-5 px-5 bg-zinc-800 text-xs w-full outline-none" placeholder="Email Address" />
          <input type="password" className=" rounded-2xl text-white py-5 px-5 bg-zinc-800 text-xs w-full outline-none" placeholder="Password" />
          <input type="password" className=" rounded-2xl text-white py-5 px-5 bg-zinc-800 text-xs w-full outline-none" placeholder="Confirm Password" />
        </div>
        <div className=" mt-20 w-full flex flex-col gap-3 items-center justify-center">
          <button className=" text-white text-xs bg-indigo-600 py-5 w-full rounded-2xl" onClick={NextPage}>Next</button>
          <div className=" text-white text-xs mt-3">
            <p>Have an accont? <a href="#" className="text-blue-800"  onClick={handleSignUpClick}>Sign In</a></p>
          </div>
        </div>
      </div>
      </>
    )
  }