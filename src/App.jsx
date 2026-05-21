import { useState } from "react"
import { motion } from "framer-motion"
import {
  FaMoon,
  FaSun,
  FaUserGraduate,
  FaHome,
  FaBook,
  FaUsers,
  FaEnvelope,
  FaCog,
} from "react-icons/fa"

export default function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")

  const [showCreateAccount, setShowCreateAccount] = useState(false)

  const [highContrast, setHighContrast] = useState(false)
  const [textSize, setTextSize] = useState("text-base")

  const [contactMessage, setContactMessage] = useState("")
  const [messageSent, setMessageSent] = useState(false)

  const [joinedGroup, setJoinedGroup] = useState(false)
  const [loadingGroup, setLoadingGroup] = useState(false)

  const [selectedQuiz, setSelectedQuiz] = useState("")

  const [selectedModule, setSelectedModule] = useState("")

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

  const handleContact = () => {
    if (contactMessage.trim() !== "") {
      setMessageSent(true)
      setContactMessage("")
    }
  }

  const handleJoinGroup = () => {
    setLoadingGroup(true)

    setTimeout(() => {
      setLoadingGroup(false)
      setJoinedGroup(true)
    }, 2000)
  }

  const quizOptions = [
    "A. To increase confusion",
    "B. To improve user interaction and efficiency",
    "C. To reduce accessibility",
    "D. To increase complexity",
  ]

  return (
    <div className={darkMode ? "dark" : ""}>

      <div
        className={`min-h-screen p-6 transition-all duration-500
        ${highContrast
            ? "bg-black text-white"
            : "bg-slate-100 dark:bg-slate-900"}
        ${textSize}`}
      >

        {/* NAVBAR */}
        <nav className="bg-slate-900 dark:bg-slate-800 text-white p-4 rounded-3xl shadow-lg flex justify-between items-center mb-8">

          <div className="flex items-center gap-3">
            <FaUserGraduate className="text-2xl" />
            <h1 className="text-2xl font-bold">VarsityHub</h1>
          </div>

          {/* ICONS AFTER LOGIN */}
          {loggedIn && (
            <div className="hidden md:flex gap-6 text-xl">

              <button title="Home">
                <FaHome />
              </button>

              <button title="Modules">
                <FaBook />
              </button>

              <button title="Groups">
                <FaUsers />
              </button>

              <button title="Contact">
                <FaEnvelope />
              </button>

              <button title="Settings">
                <FaCog />
              </button>

            </div>
          )}

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

              {loginError && (
                <p className="text-red-500 text-sm font-medium">
                  {loginError}
                </p>
              )}

              <button
                onClick={handleLogin}
                className="w-full bg-slate-900 text-white rounded-2xl p-4 font-semibold hover:bg-slate-700"
              >
                Login
              </button>

              <div className="flex justify-between items-center text-sm mt-4">

                <button
                  onClick={() => setShowCreateAccount(!showCreateAccount)}
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

              {/* CREATE ACCOUNT */}
              {showCreateAccount && (

                <div className="mt-8 bg-slate-100 dark:bg-slate-700 p-6 rounded-2xl space-y-4">

                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 rounded-xl"
                  />

                  <input
                    type="text"
                    placeholder="Surname"
                    className="w-full p-3 rounded-xl"
                  />

                  <input
                    type="text"
                    placeholder="Student Email"
                    className="w-full p-3 rounded-xl"
                  />

                  <input
                    type="text"
                    placeholder="Contact Number"
                    className="w-full p-3 rounded-xl"
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 rounded-xl"
                  />

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full p-3 rounded-xl"
                  />

                  <button
                    className="w-full bg-slate-900 text-white p-3 rounded-xl"
                    onClick={() => alert("Account created successfully")}
                  >
                    Create Account
                  </button>

                </div>

              )}

            </div>

          </motion.div>

        ) : (

          <div className="space-y-8">

            {/* HOME PAGE */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">

              <h1 className="text-4xl font-bold dark:text-white">
                Student Dashboard
              </h1>

              <p className="text-slate-500 dark:text-slate-300 mt-3">
                Track assignments, quizzes, collaboration and academic progress.
              </p>

            </section>

            {/* DASHBOARD CARDS */}
            <section className="grid grid-cols-1 md:grid-cols-4 gap-4">

              <motion.div whileHover={{ scale: 1.05 }} className="bg-blue-100 rounded-2xl p-5">
                <h3 className="font-semibold">Assignments</h3>
                <p className="text-3xl font-bold mt-2">6</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="bg-purple-100 rounded-2xl p-5">
                <h3 className="font-semibold">Quizzes</h3>
                <p className="text-3xl font-bold mt-2">5</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="bg-green-100 rounded-2xl p-5">
                <h3 className="font-semibold">Modules</h3>
                <p className="text-3xl font-bold mt-2">5</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="bg-orange-100 rounded-2xl p-5">
                <h3 className="font-semibold">Progress</h3>
                <p className="text-3xl font-bold mt-2">72%</p>
              </motion.div>

            </section>

            {/* ABOUT US */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-4 dark:text-white">
                About Us
              </h2>

              <p className="text-slate-600 dark:text-slate-300">
                VarsityHub helps students manage assignments, quizzes,
                collaboration and academic planning in one platform.
              </p>

            </section>

            {/* MODULES */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-6 dark:text-white">
                Modules
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {[
                  "Human Computer Interaction",
                  "Information Technology Research",
                  "Business Analysis",
                  "Programming Logic & Design",
                  "IT Risk Management",
                ].map((module) => (

                  <button
                    key={module}
                    onClick={() => setSelectedModule(module)}
                    className="bg-slate-100 dark:bg-slate-700 p-4 rounded-2xl dark:text-white hover:bg-blue-100"
                  >
                    {module}
                  </button>

                ))}

              </div>

              {selectedModule && (

                <div className="mt-6 bg-blue-100 p-5 rounded-2xl">

                  <h3 className="font-bold text-lg">
                    {selectedModule}
                  </h3>

                  <p className="mt-2">
                    Access notes, assignments, quizzes and learning materials for this module.
                  </p>

                </div>

              )}

            </section>

            {/* ASSIGNMENTS */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-6 dark:text-white">
                Assignment Tracker
              </h2>

              <div className="space-y-4">

                <div className="bg-red-100 p-4 rounded-2xl">
                  HCIN6222 Prototype Submission — Due 25 May 2026
                </div>

                <div className="bg-yellow-100 p-4 rounded-2xl">
                  Research Proposal — Due 28 May 2026
                </div>

                <div className="bg-blue-100 p-4 rounded-2xl">
                  Business Analysis Report — Due 30 May 2026
                </div>

              </div>

            </section>

            {/* QUIZZES */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-6 dark:text-white">
                Interactive Quiz
              </h2>

              <h3 className="font-semibold mb-4 dark:text-white">
                What is the purpose of usability in interface design?
              </h3>

              <div className="space-y-3">

                {quizOptions.map((option) => (

                  <button
                    key={option}
                    onClick={() => setSelectedQuiz(option)}
                    className={`w-full text-left p-3 rounded-xl border
                    ${selectedQuiz === option
                        ? "bg-green-300"
                        : "bg-white dark:bg-slate-700 dark:text-white"}`}
                  >
                    {option}
                  </button>

                ))}

              </div>

              {selectedQuiz && (

                <p className="mt-4 font-semibold text-green-600">
                  You selected: {selectedQuiz}
                </p>

              )}

            </section>

            {/* GROUPS */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-6 dark:text-white">
                Study Group Collaboration
              </h2>

              <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-2xl">

                <h3 className="font-semibold dark:text-white">
                  Programming Study Group
                </h3>

                <p className="mt-2 dark:text-slate-300">
                  12 members • Friday 15:00
                </p>

                <button
                  onClick={handleJoinGroup}
                  className="mt-4 bg-slate-900 text-white px-5 py-2 rounded-xl"
                >
                  Join Group
                </button>

                {loadingGroup && (
                  <p className="mt-3 text-blue-500">
                    Joining group...
                  </p>
                )}

                {joinedGroup && (
                  <p className="mt-3 text-green-600 font-semibold">
                    Joined group successfully.
                  </p>
                )}

              </div>

            </section>

            {/* CONTACT */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-6 dark:text-white">
                Contact Us
              </h2>

              <textarea
                placeholder="Write your message..."
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full border rounded-2xl p-4 h-32 dark:bg-slate-700 dark:text-white"
              />

              <button
                onClick={handleContact}
                className="mt-4 bg-slate-900 text-white px-6 py-3 rounded-xl"
              >
                Send Message
              </button>

              {messageSent && (
                <p className="mt-4 text-green-600 font-semibold">
                  Message sent successfully.
                </p>
              )}

            </section>

            {/* ACCESSIBILITY */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8 mb-10">

              <h2 className="text-2xl font-bold mb-6 dark:text-white">
                Accessibility Settings
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between items-center bg-slate-100 dark:bg-slate-700 p-4 rounded-2xl">

                  <span className="dark:text-white">
                    High Contrast Mode
                  </span>

                  <button
                    onClick={() => setHighContrast(!highContrast)}
                    className="bg-slate-900 text-white px-4 py-2 rounded-xl"
                  >
                    {highContrast ? "Enabled" : "Enable"}
                  </button>

                </div>

                <div className="flex justify-between items-center bg-slate-100 dark:bg-slate-700 p-4 rounded-2xl">

                  <span className="dark:text-white">
                    Increase Text Size
                  </span>

                  <button
                    onClick={() => setTextSize("text-xl")}
                    className="bg-slate-900 text-white px-4 py-2 rounded-xl"
                  >
                    Adjust
                  </button>

                </div>

              </div>

            </section>

          </div>

        )}

      </div>

    </div>
  )
}