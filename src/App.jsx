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

  const [messageSent, setMessageSent] = useState(false)
  const [accessibilityEnabled, setAccessibilityEnabled] = useState(false)

  const [selectedModule, setSelectedModule] = useState("")
  const [joinedGroup, setJoinedGroup] = useState(false)

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

  const openModule = (moduleName) => {
    setSelectedModule(moduleName)
  }

  const sendMessage = () => {
    setMessageSent(true)
  }

  const joinGroup = () => {
    setJoinedGroup(true)
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

            <a href="#modules" className="hover:text-blue-300">
              Modules
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
                academic productivity.
              </p>

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
                VarsityHub was designed to help students manage
                academic responsibilities through one modern platform.
              </p>

            </section>

            {/* DASHBOARD */}
            <section
              id="dashboard"
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8"
            >

              <h1 className="text-4xl font-bold text-slate-800 dark:text-white">
                Student Dashboard
              </h1>

              <p className="text-slate-500 dark:text-slate-300 mt-3">
                Track assignments, quizzes and study progress.
              </p>

            </section>

            {/* MODULES */}
            <section
              id="modules"
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8"
            >

              <h2 className="text-2xl font-semibold mb-6 dark:text-white">
                Registered Modules
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <button
                  onClick={() => openModule("Human Computer Interaction")}
                  className="bg-slate-100 dark:bg-slate-700 p-4 rounded-2xl text-left dark:text-white hover:scale-105 transition-all"
                >
                  HCIN6222 — Human Computer Interaction
                </button>

                <button
                  onClick={() => openModule("Programming Logic")}
                  className="bg-slate-100 dark:bg-slate-700 p-4 rounded-2xl text-left dark:text-white hover:scale-105 transition-all"
                >
                  PRLD5121 — Programming Logic & Design
                </button>

              </div>

              {
                selectedModule && (
                  <div className="mt-6 bg-blue-100 p-5 rounded-2xl">

                    <h3 className="font-bold text-xl mb-2">
                      {selectedModule}
                    </h3>

                    <p>
                      Module opened successfully.
                    </p>

                    <button className="mt-4 bg-slate-900 text-white px-5 py-2 rounded-xl">
                      Access Module Content
                    </button>

                  </div>
                )
              }

            </section>

            {/* ASSIGNMENTS */}
            <section
              id="assignments"
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8"
            >

              <h2 className="text-2xl font-semibold mb-6 dark:text-white">
                Assignment Tracker
              </h2>

              <div className="bg-red-100 rounded-2xl p-4">

                <h3 className="font-semibold">
                  HCIN6222 Prototype Submission
                </h3>

                <p className="text-sm text-slate-600">
                  Due: 25 May 2026
                </p>

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

              <button className="w-full text-left bg-slate-100 dark:bg-slate-700 dark:text-white p-4 rounded-xl">
                B. To improve user interaction and efficiency
              </button>

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

                <button
                  onClick={joinGroup}
                  className="mt-4 bg-slate-900 text-white px-5 py-2 rounded-xl"
                >
                  Join Discussion
                </button>

                {
                  joinedGroup && (
                    <div className="mt-4 bg-green-100 p-4 rounded-xl">
                      You joined the study group successfully.
                    </div>
                  )
                }

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

              <div className="flex justify-between items-center bg-slate-100 dark:bg-slate-700 p-4 rounded-2xl">

                <span className="dark:text-white">
                  High Contrast Mode
                </span>

                <button
                  onClick={() => setAccessibilityEnabled(true)}
                  className="bg-slate-900 text-white px-4 py-2 rounded-xl"
                >
                  Enable
                </button>

              </div>

              {
                accessibilityEnabled && (
                  <div className="mt-4 bg-green-100 p-4 rounded-xl">
                    Accessibility mode enabled successfully.
                  </div>
                )
              }

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

                <button
                  onClick={sendMessage}
                  className="bg-slate-900 text-white px-6 py-3 rounded-2xl hover:bg-slate-700"
                >
                  Send Message
                </button>

                {
                  messageSent && (
                    <div className="bg-green-100 p-4 rounded-xl">
                      Message sent successfully.
                    </div>
                  )
                }

              </div>

            </section>

          </div>

        )}

      </div>

    </div>
  )
}