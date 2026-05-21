import { useState } from "react"
import { motion } from "framer-motion"
import {
  FaMoon,
  FaSun,
  FaUserGraduate
} from "react-icons/fa"

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

    setLoginError("")
    setLoggedIn(true)
  }

  return (
    <div className={darkMode ? "dark" : ""}>

      <div className="min-h-screen bg-slate-100 dark:bg-slate-900 transition-all duration-500 p-6">

        {/* NAVBAR */}
        <nav className="bg-slate-900 dark:bg-slate-800 text-white p-4 rounded-3xl shadow-lg flex justify-between items-center mb-8 sticky top-4 z-50">

          <div className="flex items-center gap-3">
            <FaUserGraduate className="text-2xl" />
            <h1 className="text-2xl font-bold">
              VarsityHub
            </h1>
          </div>

          <div className="hidden md:flex gap-5 text-sm font-medium">

            <a href="#home" className="hover:text-blue-300">
              Home
            </a>

            <a href="#about" className="hover:text-blue-300">
              About
            </a>

            <a href="#dashboard" className="hover:text-blue-300">
              Dashboard
            </a>

            <a href="#assignments" className="hover:text-blue-300">
              Assignments
            </a>

            <a href="#planner" className="hover:text-blue-300">
              Planner
            </a>

            <a href="#quiz" className="hover:text-blue-300">
              Quiz
            </a>

            <a href="#groups" className="hover:text-blue-300">
              Groups
            </a>

            <a href="#resources" className="hover:text-blue-300">
              Resources
            </a>

            <a href="#accessibility" className="hover:text-blue-300">
              Accessibility
            </a>

            <a href="#contact" className="hover:text-blue-300">
              Contact
            </a>

          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-white text-slate-900 p-2 rounded-xl"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

        </nav>

        {/* LOGIN */}
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

              <input
                type="text"
                placeholder="Student Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-2xl p-4 dark:bg-slate-700 dark:text-white"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-2xl p-4 dark:bg-slate-700 dark:text-white"
              />

              {
                loginError && (
                  <p className="text-red-500 text-sm font-medium">
                    {loginError}
                  </p>
                )
              }

              <button
                onClick={handleLogin}
                className="w-full bg-slate-900 text-white rounded-2xl p-4 font-semibold hover:bg-slate-700"
              >
                Login
              </button>

              <div className="flex justify-between text-sm">

                <button className="text-blue-500 hover:underline">
                  Create Account
                </button>

                <button className="text-blue-500 hover:underline">
                  Forgot Password?
                </button>

              </div>

            </div>

          </motion.div>

        ) : (

          <div className="space-y-8">

            {/* HOME */}
            <section
              id="home"
              className="bg-gradient-to-r from-blue-600 to-slate-900 text-white rounded-3xl p-10 shadow-xl"
            >

              <h1 className="text-5xl font-bold mb-6">
                Student Success Starts Here
              </h1>

              <p className="text-lg text-slate-200 max-w-3xl leading-8">
                VarsityHub helps students manage assignments,
                quizzes, study schedules, collaboration and
                academic productivity from one platform.
              </p>

              <button className="mt-8 bg-white text-slate-900 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition-all">
                Explore Platform
              </button>

            </section>

            {/* ABOUT */}
            <section
              id="about"
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8"
            >

              <h2 className="text-3xl font-bold dark:text-white mb-4">
                About Us
              </h2>

              <p className="text-slate-600 dark:text-slate-300 leading-8">
                VarsityHub was created to help students organise
                academic responsibilities more effectively through
                one simple and modern interface.
              </p>

            </section>

            {/* DASHBOARD */}
            <motion.div
              id="dashboard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8"
            >

              <h1 className="text-4xl font-bold text-slate-800 dark:text-white">
                Student Dashboard
              </h1>

              <p className="text-slate-500 dark:text-slate-300 mt-3">
                Track assignments, quizzes and study progress.
              </p>

            </motion.div>

            {/* DASHBOARD CARDS */}
            <section className="grid grid-cols-1 md:grid-cols-4 gap-4">

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-blue-100 rounded-2xl p-5"
              >
                <h3 className="font-semibold">
                  Assignments
                </h3>

                <p className="text-3xl font-bold mt-2">
                  6
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-purple-100 rounded-2xl p-5"
              >
                <h3 className="font-semibold">
                  Quizzes
                </h3>

                <p className="text-3xl font-bold mt-2">
                  3
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-green-100 rounded-2xl p-5"
              >
                <h3 className="font-semibold">
                  Modules
                </h3>

                <p className="text-3xl font-bold mt-2">
                  5
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-orange-100 rounded-2xl p-5"
              >
                <h3 className="font-semibold">
                  Progress
                </h3>

                <p className="text-3xl font-bold mt-2">
                  72%
                </p>
              </motion.div>

            </section>

            {/* ASSIGNMENTS */}
            <section
              id="assignments"
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
                      Due: 25 May 2026
                    </p>
                  </div>

                  <span className="bg-red-500 text-white px-4 py-2 rounded-xl text-sm">
                    Urgent
                  </span>
                </div>

              </div>

            </section>

            {/* STUDY PLANNER */}
            <section
              id="planner"
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8"
            >

              <h2 className="text-2xl font-semibold mb-6 dark:text-white">
                Study Planner
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-2xl">

                  <h3 className="font-semibold dark:text-white mb-3">
                    Monday
                  </h3>

                  <div className="bg-white dark:bg-slate-600 p-3 rounded-xl dark:text-white">
                    Programming Revision
                  </div>

                </div>

              </div>

            </section>

            {/* QUIZ */}
            <section
              id="quiz"
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8"
            >

              <h2 className="text-2xl font-semibold mb-6 dark:text-white">
                Interactive Quiz
              </h2>

              <div className="space-y-3">

                <button className="w-full text-left bg-slate-100 dark:bg-slate-700 dark:text-white p-4 rounded-xl">
                  A. To increase confusion
                </button>

                <button className="w-full text-left bg-slate-100 dark:bg-slate-700 dark:text-white p-4 rounded-xl">
                  B. To improve user interaction and efficiency
                </button>

              </div>

            </section>

            {/* GROUPS */}
            <section
              id="groups"
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8"
            >

              <h2 className="text-2xl font-semibold mb-6 dark:text-white">
                Study Groups
              </h2>

              <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl p-4">

                <h3 className="font-semibold dark:text-white">
                  Programming Study Group
                </h3>

                <p className="text-slate-600 dark:text-slate-300 mt-2">
                  12 members • Friday 15:00
                </p>

                <button className="mt-4 bg-slate-900 text-white px-5 py-2 rounded-xl">
                  Join Discussion
                </button>

              </div>

            </section>

            {/* RESOURCES */}
            <section
              id="resources"
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8"
            >

              <h2 className="text-2xl font-semibold mb-6 dark:text-white">
                Study Resources
              </h2>

              <div className="space-y-4">

                <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-2xl dark:text-white">
                  Programming Notes PDF
                </div>

                <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-2xl dark:text-white">
                  Database Tutorial Video
                </div>

              </div>

            </section>

            {/* ACCESSIBILITY */}
            <section
              id="accessibility"
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8"
            >

              <h2 className="text-2xl font-semibold mb-6 dark:text-white">
                Accessibility Settings
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between items-center bg-slate-100 dark:bg-slate-700 p-4 rounded-2xl">

                  <span className="dark:text-white">
                    High Contrast Mode
                  </span>

                  <button className="bg-slate-900 text-white px-4 py-2 rounded-xl">
                    Enable
                  </button>

                </div>

              </div>

            </section>

            {/* CONTACT */}
            <section
              id="contact"
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8"
            >

              <h2 className="text-3xl font-bold dark:text-white mb-6">
                Contact Us
              </h2>

              <div className="space-y-4 max-w-xl">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-2xl p-4 dark:bg-slate-700 dark:text-white"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border rounded-2xl p-4 dark:bg-slate-700 dark:text-white"
                />

                <textarea
                  placeholder="Message"
                  rows="5"
                  className="w-full border rounded-2xl p-4 dark:bg-slate-700 dark:text-white"
                />

                <button className="bg-slate-900 text-white px-6 py-3 rounded-2xl hover:bg-slate-700">
                  Send Message
                </button>

              </div>

            </section>

          </div>

        )}

      </div>

    </div>
  )
}