export default function SignUp2(){
    return(
        <>
           <div className=" w-screen h-screen bg-zinc-900 font-poppins flex flex-col items-center justify-center px-8">
        <div className=" flex items-center justify-center flex-col gap-2" >
          <h1 className=" text-white text-lg "> Create new account</h1>
          <p className=" text-gray-600 text-xs">Please fill the form to continue</p>
        </div>
        <div className=" mt-20 w-full flex flex-col gap-3 items-center justify-center">
            <select name="curso" id="#" className="w-full py-4 rounded-xl text-white bg-zinc-700 text-xs">
                <option value="#">Selecione o seu curso</option>
                <option value="LEIT">LEIT</option>
                <option value="LECC">LECC</option>
                <option value="LEMT">LEMT</option>
                <option value="LECT">LECT</option>
            </select>
            <select name="curso" id="#" className="w-full py-4 rounded-xl text-white bg-zinc-700 text-xs">
                <option value="#">Selecione o seu ano</option>
                <option value="1ano">1 ano</option>
                <option value="2ano">2 ano</option>
                <option value="3ano">3 ano</option>
                <option value="4ano">4 ano</option>
                <option value="5ano">5 ano</option>
            </select>
            <select name="curso" id="#" className="w-full py-4 rounded-xl text-white bg-zinc-700 text-xs">
                <option value="#">Selecione o seu semestre</option>
                <option value="1semestre">1semestre</option>
                <option value="2semestre">2semestre</option>
            </select>
            
          </div>
        <div className=" mt-20 w-full flex flex-col gap-3 items-center justify-center">
          <button className=" text-white text-xs bg-indigo-600 py-5 w-full rounded-2xl">Sign Up</button>
          <div className=" text-white text-xs mt-3">
            <p>Have an accont? <a href="#" className="text-blue-800"  >Sign In</a></p>
          </div>
        </div>
      </div>
        </>
    )
}