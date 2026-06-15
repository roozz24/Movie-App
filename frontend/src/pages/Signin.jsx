import { useState } from "react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up data:", formData);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Navbar */}
      {/* <header className="w-full bg-[#c58b00] shadow-lg shadow-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-[0.2em] text-black">
            MOVIEZAPP
          </h1>
        </div>
      </header> */}

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
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block mb-1.5 text-sm font-medium text-gray-300"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full rounded-lg bg-black text-white placeholder-gray-500 border border-zinc-700 px-4 py-2.5 sm:py-3 outline-none focus:ring-2 focus:ring-[#c58b00] focus:border-[#c58b00] transition-all duration-300"
              />
            </div>

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
                value={formData.email}
                onChange={handleChange}
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
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-lg bg-black text-white placeholder-gray-500 border border-zinc-700 px-4 py-2.5 sm:py-3 pr-11 outline-none focus:ring-2 focus:ring-[#c58b00] focus:border-[#c58b00] transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#c58b00] transition-colors duration-300"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a18.5 18.5 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block mb-1.5 text-sm font-medium text-gray-300"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  required
                  className="w-full rounded-lg bg-black text-white placeholder-gray-500 border border-zinc-700 px-4 py-2.5 sm:py-3 pr-11 outline-none focus:ring-2 focus:ring-[#c58b00] focus:border-[#c58b00] transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#c58b00] transition-colors duration-300"
                >
                  {showConfirmPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a18.5 18.5 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#c58b00] hover:bg-[#a87600] text-black font-bold text-base sm:text-lg py-3 rounded-lg mt-2 transition-all duration-300 hover:scale-105"
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
            >
              Sign in
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default SignUp;