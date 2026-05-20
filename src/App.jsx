import { useState } from "react"
import { motion } from "framer-motion"
import { FaMoon, FaSun, FaUserGraduate } from "react-icons/fa"

export default function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")

  const handleLogin = () => {

    if (!email || !password) {
      setLoginError("Please enter email and password.")
      return
    }

    if (!email.startsWith("ST")) {
      setLoginError("Access denied. Student email must start with ST.")
      return
    }

    if (password.length < 8) {
      setLoginError("Password must contain at least 8 characters.")
      return
    }

    setLoginError("")
    setLoggedIn(true)
  }

  return (
    <div className={darkMode ? "dark" : ""}>

      <div className="min-h-screen bg-slate-100 dark:bg-slate-900 transition-all duration-500 p-6">

        {/* NAVBAR */}
        <nav className="bg-slate-900 dark:bg-slate-800 text-white p-4 rounded-3xl shadow-lg flex justify-between items-center mb-8">

          <div className="flex items-center gap-3">
            <FaUserGraduate className="text-2xl" />
            <h1 className="text-2xl font-bold">VarsityHub</h1>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-white text-slate-900 p-2 rounded-xl"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

        </nav>

        {/* LOGIN PAGE */}
        {!loggedIn ? (

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-10 mt-20"
          >

            <h1 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-4">
              Welcome to VarsityHub
            </h1>

            <p className="text-center text-slate-500 dark:text-slate-300 mb-8">
              Your All-in-One Student Success Platform
            </p>

            <div className="space-y-4">

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Student Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-2xl p-4 dark:bg-slate-700 dark:text-white"
              />

              {/* VALIDATION MESSAGE */}
              {
                loginError && (
                  <p className="text-red-500 text-sm font-medium">
                    {loginError}
                  </p>
                )
              }

              {/* PASSWORD */}
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-2xl p-4 dark:bg-slate-700 dark:text-white"
              />

              {/* LOGIN BUTTON */}
              <button
                onClick={handleLogin}
                className="w-full bg-slate-900 text-white rounded-2xl p-4 font-semibold hover:bg-slate-700"
              >
                Login
              </button>

              {/* CREATE ACCOUNT + FORGOT */}
              <div className="flex justify-between items-center text-sm mt-4">

                <button
                  onClick={() => alert("Create Account feature coming soon")}
                  className="text-blue-500 hover:underline"
                >
                  Create Account
                </button>

                <button
                  onClick={() => alert("Password reset link sent")}
                  className="text-blue-500 hover:underline"
                >
                  Forgot Password?
                </button>

              </div>

            </div>

          </motion.div>

        ) : (

          <div className="space-y-8">

            {/* DASHBOARD */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8"
            >

              <h1 className="text-4xl font-bold text-slate-800 dark:text-white">
                Student Dashboard
              </h1>

              <p className="text-slate-500 dark:text-slate-300 mt-3">
                Track assignments, quizzes, collaboration and academic progress.
              </p>

            </motion.div>

            {/* DASHBOARD CARDS */}
            <section className="grid grid-cols-1 md:grid-cols-4 gap-4">

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-blue-100 rounded-2xl p-5"
              >
                <h3 className="font-semibold">Assignments</h3>
                <p className="text-3xl font-bold mt-2">6</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-purple-100 rounded-2xl p-5"
              >
                <h3 className="font-semibold">Quizzes</h3>
                <p className="text-3xl font-bold mt-2">3</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-green-100 rounded-2xl p-5"
              >
                <h3 className="font-semibold">Modules</h3>
                <p className="text-3xl font-bold mt-2">5</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-orange-100 rounded-2xl p-5"
              >
                <h3 className="font-semibold">Progress</h3>
                <p className="text-3xl font-bold mt-2">72%</p>
              </motion.div>

            </section>

            {/* FEEDBACK */}
            <section className="bg-green-100 text-green-700 p-4 rounded-2xl">
              Assignment uploaded successfully.
            </section>

          </div>

        )}

      </div>

    </div>
  )
}