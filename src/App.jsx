import { useState } from "react"
import { motion } from "framer-motion"
import {
  FaMoon,
  FaSun,
  FaUserGraduate,
  FaBook,
  FaTasks,
  FaChartLine,
  FaCog,
  FaUsers,
  FaHome,
  FaEnvelope,
} from "react-icons/fa"

export default function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  const [activePage, setActivePage] = useState("home")

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")

  const [showRegister, setShowRegister] = useState(false)

  const [messageSent, setMessageSent] = useState(false)
  const [groupJoined, setGroupJoined] = useState(false)

  const [contrastEnabled, setContrastEnabled] = useState(false)

  const [selectedQuiz, setSelectedQuiz] = useState("")

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

  const handleJoinGroup = () => {
    setTimeout(() => {
      setGroupJoined(true)
    }, 1500)
  }

  return (
    <div className={darkMode ? "dark" : ""}>

      <div className="min-h-screen bg-slate-100 dark:bg-slate-900 transition-all duration-500">

        {/* NAVBAR */}
        <nav className="bg-slate-900 dark:bg-slate-800 text-white p-5 flex justify-between items-center shadow-lg">

          <div className="flex items-center gap-3">
            <FaUserGraduate className="text-3xl" />
            <h1 className="text-2xl font-bold">
              VarsityHub
            </h1>
          </div>

          <div className="flex items-center gap-4">

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-white text-black px-4 py-2 rounded-xl"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>

          </div>

        </nav>

        {/* LOGIN */}
        {!loggedIn ? (

          <div className="p-6">

            {!showRegister ? (

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-xl mx-auto bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-10 mt-16"
              >

                <h1 className="text-4xl font-bold text-center dark:text-white mb-4">
                  Welcome to VarsityHub
                </h1>

                <p className="text-center text-slate-500 dark:text-slate-300 mb-8">
                  Student Academic Management Platform
                </p>

                <div className="space-y-4">

                  <input
                    type="email"
                    placeholder="Student Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-4 border rounded-2xl dark:bg-slate-700 dark:text-white"
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-4 border rounded-2xl dark:bg-slate-700 dark:text-white"
                  />

                  {loginError && (
                    <p className="text-red-500 font-medium">
                      {loginError}
                    </p>
                  )}

                  <button
                    onClick={handleLogin}
                    className="w-full bg-slate-900 text-white p-4 rounded-2xl"
                  >
                    Login
                  </button>

                  <div className="flex justify-between">

                    <button
                      onClick={() => setShowRegister(true)}
                      className="text-blue-500"
                    >
                      Create Account
                    </button>

                    <button
                      onClick={() => alert("Password reset link sent")}
                      className="text-blue-500"
                    >
                      Forgot Password?
                    </button>

                  </div>

                </div>

              </motion.div>

            ) : (

              <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-lg mt-10">

                <h1 className="text-3xl font-bold mb-8 dark:text-white">
                  Create Account
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <input
                    type="text"
                    placeholder="Name"
                    className="p-4 border rounded-2xl dark:bg-slate-700 dark:text-white"
                  />

                  <input
                    type="text"
                    placeholder="Surname"
                    className="p-4 border rounded-2xl dark:bg-slate-700 dark:text-white"
                  />

                  <input
                    type="email"
                    placeholder="Student Email"
                    className="p-4 border rounded-2xl dark:bg-slate-700 dark:text-white"
                  />

                  <input
                    type="text"
                    placeholder="Contact Number"
                    className="p-4 border rounded-2xl dark:bg-slate-700 dark:text-white"
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    className="p-4 border rounded-2xl dark:bg-slate-700 dark:text-white"
                  />

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="p-4 border rounded-2xl dark:bg-slate-700 dark:text-white"
                  />

                </div>

                <button
                  onClick={() => {
                    alert("Account created successfully")
                    setShowRegister(false)
                  }}
                  className="w-full mt-6 bg-slate-900 text-white p-4 rounded-2xl"
                >
                  Register
                </button>

              </div>

            )}

          </div>

        ) : (

          <div className="flex">

            {/* SIDEBAR */}
            <div className="w-72 bg-slate-900 min-h-screen text-white p-6">

              <div className="space-y-4">

                <button
                  onClick={() => setActivePage("home")}
                  className="flex items-center gap-3 w-full hover:bg-slate-700 p-3 rounded-xl"
                >
                  <FaHome />
                  Home
                </button>

                <button
                  onClick={() => setActivePage("modules")}
                  className="flex items-center gap-3 w-full hover:bg-slate-700 p-3 rounded-xl"
                >
                  <FaBook />
                  Modules
                </button>

                <button
                  onClick={() => setActivePage("assignments")}
                  className="flex items-center gap-3 w-full hover:bg-slate-700 p-3 rounded-xl"
                >
                  <FaTasks />
                  Assignments
                </button>

                <button
                  onClick={() => setActivePage("quiz")}
                  className="flex items-center gap-3 w-full hover:bg-slate-700 p-3 rounded-xl"
                >
                  <FaBook />
                  Quizzes
                </button>

                <button
                  onClick={() => setActivePage("progress")}
                  className="flex items-center gap-3 w-full hover:bg-slate-700 p-3 rounded-xl"
                >
                  <FaChartLine />
                  Progress
                </button>

                <button
                  onClick={() => setActivePage("groups")}
                  className="flex items-center gap-3 w-full hover:bg-slate-700 p-3 rounded-xl"
                >
                  <FaUsers />
                  Groups
                </button>

                <button
                  onClick={() => setActivePage("contact")}
                  className="flex items-center gap-3 w-full hover:bg-slate-700 p-3 rounded-xl"
                >
                  <FaEnvelope />
                  Contact Us
                </button>

                <button
                  onClick={() => setActivePage("settings")}
                  className="flex items-center gap-3 w-full hover:bg-slate-700 p-3 rounded-xl"
                >
                  <FaCog />
                  Settings
                </button>

              </div>

            </div>

            {/* CONTENT */}
            <div className="flex-1 p-8">

              {/* HOME */}
              {activePage === "home" && (

                <div className="space-y-6">

                  <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg">

                    <h1 className="text-4xl font-bold dark:text-white">
                      Student Dashboard
                    </h1>

                    <p className="text-slate-500 dark:text-slate-300 mt-4">
                      Welcome back student.
                    </p>

                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                    <div className="bg-blue-100 p-6 rounded-2xl">
                      <h2 className="font-bold">Assignments</h2>
                      <p className="text-3xl font-bold mt-3">6</p>
                    </div>

                    <div className="bg-green-100 p-6 rounded-2xl">
                      <h2 className="font-bold">Modules</h2>
                      <p className="text-3xl font-bold mt-3">4</p>
                    </div>

                    <div className="bg-yellow-100 p-6 rounded-2xl">
                      <h2 className="font-bold">Quizzes</h2>
                      <p className="text-3xl font-bold mt-3">12</p>
                    </div>

                    <div className="bg-purple-100 p-6 rounded-2xl">
                      <h2 className="font-bold">Progress</h2>
                      <p className="text-3xl font-bold mt-3">72%</p>
                    </div>

                  </div>

                </div>

              )}

              {/* MODULES */}
              {activePage === "modules" && (

                <div className="space-y-6">

                  <div className="bg-white dark:bg-slate-800 rounded-3xl p-8">

                    <h1 className="text-3xl font-bold dark:text-white mb-6">
                      Modules
                    </h1>

                    <div className="space-y-4">

                      <div className="bg-slate-100 p-5 rounded-2xl">
                        HCIN6222 — Human Computer Interaction
                      </div>

                      <div className="bg-slate-100 p-5 rounded-2xl">
                        IRIT7311 — Information Technology Research
                      </div>

                      <div className="bg-slate-100 p-5 rounded-2xl">
                        PRLD5121 — Programming Logic & Design
                      </div>

                      <div className="bg-slate-100 p-5 rounded-2xl">
                        DBMS6211 — Database Management Systems
                      </div>

                    </div>

                  </div>

                </div>

              )}

              {/* ASSIGNMENTS */}
              {activePage === "assignments" && (

                <div className="space-y-6">

                  <div className="bg-white dark:bg-slate-800 rounded-3xl p-8">

                    <h1 className="text-3xl font-bold dark:text-white mb-6">
                      Assignments & Notes
                    </h1>

                    <div className="space-y-4">

                      <div className="bg-red-100 p-5 rounded-2xl">
                        HCIN6222 Prototype Assignment
                      </div>

                      <div className="bg-yellow-100 p-5 rounded-2xl">
                        Programming Logic Assignment
                      </div>

                    </div>

                    <div className="mt-8 space-y-4">

                      <input
                        type="file"
                        className="w-full border p-4 rounded-2xl dark:bg-slate-700 dark:text-white"
                      />

                      <button
                        onClick={() => alert("Document uploaded successfully")}
                        className="bg-slate-900 text-white px-6 py-3 rounded-2xl"
                      >
                        Upload Notes / Assignment
                      </button>

                    </div>

                  </div>

                </div>

              )}

              {/* QUIZ */}
              {activePage === "quiz" && (

                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8">

                  <h1 className="text-3xl font-bold dark:text-white mb-6">
                    Interactive Quizzes
                  </h1>

                  <div className="space-y-4">

                    <button
                      onClick={() => setSelectedQuiz("Option A Selected")}
                      className="w-full bg-slate-100 p-4 rounded-2xl text-left"
                    >
                      A. Increase confusion
                    </button>

                    <button
                      onClick={() => setSelectedQuiz("Option B Selected")}
                      className="w-full bg-slate-100 p-4 rounded-2xl text-left"
                    >
                      B. Improve usability
                    </button>

                    <button
                      onClick={() => setSelectedQuiz("Option C Selected")}
                      className="w-full bg-slate-100 p-4 rounded-2xl text-left"
                    >
                      C. Reduce accessibility
                    </button>

                  </div>

                  {selectedQuiz && (
                    <p className="mt-6 text-green-600 font-bold">
                      {selectedQuiz}
                    </p>
                  )}

                </div>

              )}

              {/* PROGRESS */}
              {activePage === "progress" && (

                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8">

                  <h1 className="text-3xl font-bold dark:text-white mb-6">
                    Academic Progress
                  </h1>

                  <div className="space-y-4">

                    <div className="bg-green-100 p-5 rounded-2xl">
                      HCIN6222 — 80%
                    </div>

                    <div className="bg-blue-100 p-5 rounded-2xl">
                      Programming Logic — 70%
                    </div>

                    <div className="bg-yellow-100 p-5 rounded-2xl">
                      Database Systems — 66%
                    </div>

                  </div>

                </div>

              )}

              {/* GROUPS */}
              {activePage === "groups" && (

                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8">

                  <h1 className="text-3xl font-bold dark:text-white mb-6">
                    Study Groups
                  </h1>

                  <div className="bg-slate-100 p-5 rounded-2xl">

                    <h2 className="font-bold">
                      Programming Study Group
                    </h2>

                    <p className="mt-2">
                      12 members • Friday 15:00
                    </p>

                    <button
                      onClick={handleJoinGroup}
                      className="mt-4 bg-slate-900 text-white px-6 py-3 rounded-xl"
                    >
                      Join Group
                    </button>

                    {groupJoined && (
                      <p className="text-green-600 font-bold mt-4">
                        Joined group successfully
                      </p>
                    )}

                  </div>

                </div>

              )}

              {/* CONTACT */}
              {activePage === "contact" && (

                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8">

                  <h1 className="text-3xl font-bold dark:text-white mb-6">
                    Contact Us
                  </h1>

                  <div className="space-y-4">

                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full border p-4 rounded-2xl"
                    />

                    <textarea
                      placeholder="Message"
                      className="w-full border p-4 rounded-2xl h-40"
                    />

                    <button
                      onClick={() => setMessageSent(true)}
                      className="bg-slate-900 text-white px-6 py-3 rounded-xl"
                    >
                      Send Message
                    </button>

                    {messageSent && (
                      <p className="text-green-600 font-bold">
                        Message sent successfully
                      </p>
                    )}

                  </div>

                </div>

              )}

              {/* SETTINGS */}
              {activePage === "settings" && (

                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8">

                  <h1 className="text-3xl font-bold dark:text-white mb-6">
                    Accessibility Settings
                  </h1>

                  <div className="space-y-4">

                    <button
                      onClick={() => setContrastEnabled(!contrastEnabled)}
                      className="bg-slate-900 text-white px-6 py-3 rounded-xl"
                    >
                      Enable High Contrast
                    </button>

                    {contrastEnabled && (
                      <p className="text-green-600 font-bold">
                        High Contrast Enabled
                      </p>
                    )}

                  </div>

                </div>

              )}

            </div>

          </div>

        )}

      </div>

    </div>
  )
}