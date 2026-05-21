import { useState } from "react"
import { motion } from "framer-motion"

import {
  FaMoon,
  FaSun,
  FaUserGraduate,
  FaHome,
  FaBook,
  FaTasks,
  FaChartLine,
  FaQuestionCircle,
  FaUsers,
  FaCog,
  FaEnvelope
} from "react-icons/fa"

export default function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")

  const [showCreateAccount, setShowCreateAccount] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)

  const [currentPage, setCurrentPage] = useState("home")

  const [highContrast, setHighContrast] = useState(false)
  const [largeText, setLargeText] = useState(false)

  const [groupLoading, setGroupLoading] = useState(false)
  const [groupJoined, setGroupJoined] = useState(false)

  const [messageSent, setMessageSent] = useState(false)

  const [selectedAnswer, setSelectedAnswer] = useState("")

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

  const joinGroup = () => {

    setGroupLoading(true)

    setTimeout(() => {
      setGroupLoading(false)
      setGroupJoined(true)
    }, 2000)
  }

  return (

    <div className={`${darkMode ? "dark" : ""}`}>

      <div className={`min-h-screen transition-all duration-500 p-6

      ${darkMode
        ? "bg-slate-900 text-white"
        : "bg-slate-100 text-slate-900"}

      ${highContrast ? "contrast-150" : ""}

      ${largeText ? "text-lg" : "text-base"}
      
      `}>

        {/* NAVBAR */}

        <nav className="bg-slate-900 text-white p-4 rounded-3xl shadow-lg flex justify-between items-center mb-8">

          <div className="flex items-center gap-3">
            <FaUserGraduate className="text-2xl" />
            <h1 className="text-2xl font-bold">
              VarsityHub
            </h1>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-white text-slate-900 p-3 rounded-xl"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

        </nav>

        {/* LOGIN */}

        {!loggedIn ? (

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-10 mt-10"
          >

            <h1 className="text-4xl font-bold text-center dark:text-white mb-4">
              Welcome to VarsityHub
            </h1>

            <p className="text-center text-slate-500 dark:text-slate-300 mb-8">
              Your All-in-One Student Success Platform
            </p>

            <div className="space-y-4">

              <input
                type="email"
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
                  onClick={() =>
                    setShowCreateAccount(!showCreateAccount)
                  }
                  className="text-blue-500 hover:underline"
                >
                  Create Account
                </button>

                <button
                  onClick={() =>
                    setShowForgotPassword(!showForgotPassword)
                  }
                  className="text-blue-500 hover:underline"
                >
                  Forgot Password?
                </button>

              </div>

              {/* CREATE ACCOUNT */}

              {showCreateAccount && (

                <div className="bg-slate-700 p-6 rounded-3xl mt-6 space-y-4">

                  <h2 className="text-2xl font-bold text-white">
                    Create Account
                  </h2>

                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-4 rounded-2xl"
                  />

                  <input
                    type="text"
                    placeholder="Surname"
                    className="w-full p-4 rounded-2xl"
                  />

                  <input
                    type="email"
                    placeholder="Student Email"
                    className="w-full p-4 rounded-2xl"
                  />

                  <input
                    type="text"
                    placeholder="Contact Number"
                    className="w-full p-4 rounded-2xl"
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-4 rounded-2xl"
                  />

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full p-4 rounded-2xl"
                  />

                  <button
                    className="w-full bg-slate-900 text-white p-4 rounded-2xl font-semibold"
                    onClick={() =>
                      alert("Account created successfully")
                    }
                  >
                    Create Account
                  </button>

                </div>

              )}

              {/* FORGOT PASSWORD */}

              {showForgotPassword && (

                <div className="bg-slate-700 p-6 rounded-3xl mt-6 space-y-4">

                  <h2 className="text-2xl font-bold text-white">
                    Reset Password
                  </h2>

                  <input
                    type="email"
                    placeholder="Enter Student Email"
                    className="w-full p-4 rounded-2xl"
                  />

                  <button
                    className="w-full bg-slate-900 text-white p-4 rounded-2xl font-semibold"
                    onClick={() =>
                      alert("Password reset link sent")
                    }
                  >
                    Send Reset Link
                  </button>

                </div>

              )}

            </div>

          </motion.div>

        ) : (

          <div>

            {/* MENU */}

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">

              <button
                onClick={() => setCurrentPage("home")}
                className="bg-blue-100 p-5 rounded-2xl flex flex-col items-center gap-2"
              >
                <FaHome />
                Home
              </button>

              <button
                onClick={() => setCurrentPage("modules")}
                className="bg-green-100 p-5 rounded-2xl flex flex-col items-center gap-2"
              >
                <FaBook />
                Modules
              </button>

              <button
                onClick={() => setCurrentPage("assignments")}
                className="bg-red-100 p-5 rounded-2xl flex flex-col items-center gap-2"
              >
                <FaTasks />
                Assignments
              </button>

              <button
                onClick={() => setCurrentPage("progress")}
                className="bg-orange-100 p-5 rounded-2xl flex flex-col items-center gap-2"
              >
                <FaChartLine />
                Progress
              </button>

              <button
                onClick={() => setCurrentPage("quiz")}
                className="bg-purple-100 p-5 rounded-2xl flex flex-col items-center gap-2"
              >
                <FaQuestionCircle />
                Quizzes
              </button>

              <button
                onClick={() => setCurrentPage("groups")}
                className="bg-pink-100 p-5 rounded-2xl flex flex-col items-center gap-2"
              >
                <FaUsers />
                Groups
              </button>

              <button
                onClick={() => setCurrentPage("settings")}
                className="bg-yellow-100 p-5 rounded-2xl flex flex-col items-center gap-2"
              >
                <FaCog />
                Settings
              </button>

              <button
                onClick={() => setCurrentPage("contact")}
                className="bg-cyan-100 p-5 rounded-2xl flex flex-col items-center gap-2"
              >
                <FaEnvelope />
                Contact
              </button>

            </div>

            {/* HOME */}

            {currentPage === "home" && (

              <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg">

                <h1 className="text-4xl font-bold mb-4 dark:text-white">
                  Student Dashboard
                </h1>

                <p className="dark:text-slate-300">
                  Welcome to VarsityHub Student Platform.
                </p>

              </section>

            )}

            {/* MODULES */}

            {currentPage === "modules" && (

              <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg">

                <h2 className="text-3xl font-bold mb-6 dark:text-white">
                  Modules
                </h2>

                <div className="space-y-4">

                  <div className="bg-slate-100 p-5 rounded-2xl">
                    HCIN6222 — Human Computer Interaction
                  </div>

                  <div className="bg-slate-100 p-5 rounded-2xl">
                    IRIT7311 — Information Technology Research
                  </div>

                  <div className="bg-slate-100 p-5 rounded-2xl">
                    BUSA7321 — Business Analysis
                  </div>

                  <div className="bg-slate-100 p-5 rounded-2xl">
                    ITRM7311 — IT Risk Management
                  </div>

                </div>

              </section>

            )}

            {/* ASSIGNMENTS */}

            {currentPage === "assignments" && (

              <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg">

                <h2 className="text-3xl font-bold mb-6 dark:text-white">
                  Assignments
                </h2>

                <div className="space-y-4">

                  <div className="bg-red-100 p-5 rounded-2xl">
                    HCIN6222 Prototype Submission
                  </div>

                  <div className="bg-yellow-100 p-5 rounded-2xl">
                    IRIT7311 Research Proposal
                  </div>

                </div>

                <div className="mt-8">

                  <h3 className="text-2xl font-semibold mb-4 dark:text-white">
                    Upload Notes / Assignments
                  </h3>

                  <input
                    type="file"
                    className="mb-4"
                  />

                  <button
                    className="bg-slate-900 text-white px-6 py-3 rounded-2xl"
                    onClick={() =>
                      alert("Document uploaded successfully")
                    }
                  >
                    Upload
                  </button>

                </div>

              </section>

            )}

            {/* PROGRESS */}

            {currentPage === "progress" && (

              <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg">

                <h2 className="text-3xl font-bold mb-6 dark:text-white">
                  Academic Progress
                </h2>

                <div className="space-y-4">

                  <div className="bg-green-100 p-5 rounded-2xl">
                    Human Computer Interaction — 85%
                  </div>

                  <div className="bg-blue-100 p-5 rounded-2xl">
                    Information Technology Research — 72%
                  </div>

                </div>

              </section>

            )}

            {/* QUIZZES */}

            {currentPage === "quiz" && (

              <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg">

                <h2 className="text-3xl font-bold mb-6 dark:text-white">
                  Interactive Quiz
                </h2>

                <div className="bg-slate-100 p-6 rounded-2xl">

                  <h3 className="text-xl font-semibold mb-2">
                    Module:
                    HCIN6222 — Human Computer Interaction
                  </h3>

                  <p className="mb-6">
                    What is the purpose of usability?
                  </p>

                  <div className="space-y-3">

                    {[
                      "To increase confusion",
                      "To improve user interaction",
                      "To reduce accessibility",
                      "To increase complexity"
                    ].map((option) => (

                      <button
                        key={option}
                        onClick={() =>
                          setSelectedAnswer(option)
                        }
                        className={`w-full text-left p-4 rounded-xl border

                        ${selectedAnswer === option
                          ? "bg-green-200"
                          : "bg-white"}

                        `}
                      >
                        {option}
                      </button>

                    ))}

                  </div>

                  {selectedAnswer && (

                    <p className="mt-6 text-green-600 font-semibold">
                      You selected:
                      {" "}
                      {selectedAnswer}
                    </p>

                  )}

                </div>

              </section>

            )}

            {/* GROUPS */}

            {currentPage === "groups" && (

              <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg">

                <h2 className="text-3xl font-bold mb-6 dark:text-white">
                  Study Groups
                </h2>

                <div className="bg-slate-100 p-6 rounded-2xl">

                  <h3 className="text-xl font-semibold">
                    Programming Study Group
                  </h3>

                  <p className="mt-2">
                    12 Members • Friday 15:00
                  </p>

                  <button
                    onClick={joinGroup}
                    className="mt-6 bg-slate-900 text-white px-6 py-3 rounded-2xl"
                  >
                    Join Group
                  </button>

                  {groupLoading && (

                    <p className="mt-4 text-blue-600">
                      Joining group...
                    </p>

                  )}

                  {groupJoined && (

                    <p className="mt-4 text-green-600 font-semibold">
                      Joined group successfully
                    </p>

                  )}

                </div>

              </section>

            )}

            {/* SETTINGS */}

            {currentPage === "settings" && (

              <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg">

                <h2 className="text-3xl font-bold mb-6 dark:text-white">
                  Accessibility Settings
                </h2>

                <div className="space-y-4">

                  <button
                    onClick={() =>
                      setHighContrast(!highContrast)
                    }
                    className="bg-slate-900 text-white px-6 py-3 rounded-2xl"
                  >
                    {highContrast
                      ? "High Contrast Enabled"
                      : "Enable High Contrast"}
                  </button>

                  <button
                    onClick={() =>
                      setLargeText(!largeText)
                    }
                    className="bg-slate-900 text-white px-6 py-3 rounded-2xl"
                  >
                    {largeText
                      ? "Large Text Enabled"
                      : "Increase Text Size"}
                  </button>

                </div>

              </section>

            )}

            {/* CONTACT */}

            {currentPage === "contact" && (

              <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg">

                <h2 className="text-3xl font-bold mb-6 dark:text-white">
                  Contact Us
                </h2>

                <div className="space-y-4">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border p-4 rounded-2xl"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-4 rounded-2xl"
                  />

                  <textarea
                    placeholder="Message"
                    className="w-full border p-4 rounded-2xl h-40"
                  />

                  <button
                    onClick={() =>
                      setMessageSent(true)
                    }
                    className="bg-slate-900 text-white px-6 py-3 rounded-2xl"
                  >
                    Send Message
                  </button>

                  {messageSent && (

                    <p className="text-green-600 font-semibold">
                      Message sent successfully
                    </p>

                  )}

                </div>

              </section>

            )}

          </div>

        )}

      </div>

    </div>
  )
}