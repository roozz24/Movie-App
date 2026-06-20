import { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../firebase/Firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up data:", mail, pass);
  };

  function createAccount(){
    createUserWithEmailAndPassword(auth, mail, pass)
    navigate("/Login")
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">

      {/* Centered Sign Up Card */}
      <main className="flex-1 flex items-center justify-center mt-10 px-4 py-10 sm:py-16">
        <div className="w-full max-w-md bg-zinc-900 border-t-4 border-[#c58b00] rounded-2xl shadow-2xl shadow-black/50 px-6 sm:px-8 py-8 sm:py-10 transition-all duration-300">
          {/* Logo / Title */}
          <div className="flex flex-col items-center text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Movie<span className="text-[#c58b00]">zapp</span>
            </h2>
            <p className="mt-3 text-sm text-gray-400">
              Create your account and build your watchlist.
            </p>
          </div>

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block mb-1.5 text-sm font-medium text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setMail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full rounded-lg bg-black text-white placeholder-gray-500 border border-zinc-700 px-4 py-2.5 sm:py-3 outline-none focus:ring-2 focus:ring-[#c58b00] focus:border-[#c58b00] transition-all duration-300"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block mb-1.5 text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  onChange={(e) => setPass(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-lg bg-black text-white placeholder-gray-500 border border-zinc-700 px-4 py-2.5 sm:py-3 pr-11 outline-none focus:ring-2 focus:ring-[#c58b00] focus:border-[#c58b00] transition-all duration-300"
                />
              </div>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#c58b00] hover:bg-[#a87600] text-black font-bold text-base sm:text-lg py-3 rounded-lg mt-2 transition-all duration-300 hover:scale-105"
              onClick={createAccount}
            >
              Create Account
            </button>
          </form>

          {/* Sign In Redirect */}
          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account?{" "}
            <a
              href="#"
              className="text-[#c58b00] hover:text-[#e0a829] font-semibold transition-colors duration-300"
              onClick={() => {navigate("/Login")}}
            >
              Login
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default SignUp;