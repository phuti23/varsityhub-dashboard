import { useState } from "react"
import { motion } from "framer-motion"
import { FaMoon, FaSun, FaUserGraduate } from "react-icons/fa"

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    if (email && password) {
      alert(`Welcome ${email}`)
    } else {
      alert("Please enter email and password")
    }
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-slate-100 dark:bg-slate-900 transition-all duration-500 p-6 space-y-8">

        {/* Navbar */}
        <nav className="bg-slate-900 dark:bg-slate-800 text-white p-4 rounded-3xl shadow-lg flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FaUserGraduate className="text-2xl" />
            <h1 className="text-2xl font-bold">VarsityHub</h1>
          </div>

          <div className="flex gap-6 items-center">
            <a href="#" className="hover:text-slate-300">Home</a>
            <a href="#" className="hover:text-slate-300">Dashboard</a>
            <a href="#" className="hover:text-slate-300">Assignments</a>
            <a href="#" className="hover:text-slate-300">Planner</a>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-white text-slate-900 p-2 rounded-xl"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </nav>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8"
        >
          <h1 className="text-4xl font-bold text-slate-800 dark:text-white">
            Your All-in-One Student Success Platform
          </h1>

          <p className="text-slate-500 dark:text-slate-300 mt-3">
            Organize assignments, quizzes, study groups and track academic success.
          </p>
        </motion.div>

        {/* Login */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">
            Student Login
          </h2>

          <div className="max-w-md mx-auto space-y-4">
            <input
              type="email"
              placeholder="Student Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-2xl p-3 dark:bg-slate-700 dark:text-white"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-2xl p-3 dark:bg-slate-700 dark:text-white"
            />

            <button
              onClick={handleLogin}
              className="w-full bg-slate-900 text-white rounded-2xl p-3 font-semibold hover:bg-slate-700"
            >
              Login
            </button>

            <div className="flex justify-between text-sm text-slate-500 dark:text-slate-300">
              <span>Create Account</span>
              <span>Forgot Password?</span>
            </div>
          </div>
        </motion.section>

        {/* Dashboard Cards */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            ["Assignments", "5"],
            ["Upcoming Quizzes", "2"],
            ["Study Groups", "3"],
            ["Progress", "78%"],
          ].map((item, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-6"
            >
              <h3 className="font-semibold text-slate-700 dark:text-white">
                {item[0]}
              </h3>

              <p className="text-4xl font-bold mt-3 text-slate-900 dark:text-white">
                {item[1]}
              </p>
            </motion.div>
          ))}
        </section>

        {/* Assignment Tracker */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">
            Assignment Tracker
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center bg-red-100 rounded-2xl p-4">
              <div>
                <h3 className="font-semibold">
                  HCIN6222 Prototype Submission
                </h3>

                <p className="text-sm text-slate-600">
                  Due: 10 May 2026
                </p>
              </div>

              <span className="bg-red-500 text-white px-4 py-2 rounded-xl text-sm">
                Urgent
              </span>
            </div>

            <div className="flex justify-between items-center bg-green-100 rounded-2xl p-4">
              <div>
                <h3 className="font-semibold">
                  Database Test Preparation
                </h3>

                <p className="text-sm text-slate-600">
                  Completed
                </p>
              </div>

              <span className="bg-green-500 text-white px-4 py-2 rounded-xl text-sm">
                Done
              </span>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  )
}