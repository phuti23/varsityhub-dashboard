import { useState } from "react"
import { motion } from "framer-motion"
import {
  FaMoon,
  FaSun,
  FaUserGraduate,
  FaBook,
  FaTasks,
  FaChartLine,
  FaQuestionCircle,
  FaCog,
  FaUsers,
  FaHome,
  FaEnvelope,
} from "react-icons/fa"

export default function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")

  const [page, setPage] = useState("home")

  const [messageSent, setMessageSent] = useState(false)

  const [highContrast, setHighContrast] = useState(false)
  const [textSize, setTextSize] = useState(false)

  const [joinedGroup, setJoinedGroup] = useState(false)

  const [quizAnswer, setQuizAnswer] = useState("")

  const [uploadedNote, setUploadedNote] = useState("")
  const [uploadedAssignment, setUploadedAssignment] = useState("")

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
      setJoinedGroup(true)
    }, 1500)
  }

  const handleMessage = () => {
    setMessageSent(true)
  }

  const renderPage = () => {

    if (page === "home") {
      return (
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

          {/* CARDS */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-4">

            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => setPage("assignments")}
              className="bg-blue-100 rounded-2xl p-5 cursor-pointer"
            >
              <FaTasks className="text-3xl mb-3" />
              <h3 className="font-semibold">Assignments</h3>
              <p className="text-3xl font-bold mt-2">6</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => setPage("quizzes")}
              className="bg-purple-100 rounded-2xl p-5 cursor-pointer"
            >
              <FaQuestionCircle className="text-3xl mb-3" />
              <h3 className="font-semibold">Quizzes</h3>
              <p className="text-3xl font-bold mt-2">3</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => setPage("modules")}
              className="bg-green-100 rounded-2xl p-5 cursor-pointer"
            >
              <FaBook className="text-3xl mb-3" />
              <h3 className="font-semibold">Modules</h3>
              <p className="text-3xl font-bold mt-2">4</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => setPage("progress")}
              className="bg-orange-100 rounded-2xl p-5 cursor-pointer"
            >
              <FaChartLine className="text-3xl mb-3" />
              <h3 className="font-semibold">Progress</h3>
              <p className="text-3xl font-bold mt-2">72%</p>
            </motion.div>

          </section>

        </div>
      )
    }

    if (page === "modules") {
      return (
        <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-6 dark:text-white">
            Modules
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="bg-slate-100 dark:bg-slate-700 p-5 rounded-2xl dark:text-white">
              <h3 className="font-bold">HCIN6222</h3>
              <p>Human Computer Interaction</p>
            </div>

            <div className="bg-slate-100 dark:bg-slate-700 p-5 rounded-2xl dark:text-white">
              <h3 className="font-bold">IRIT7311</h3>
              <p>Information Technology Research</p>
            </div>

            <div className="bg-slate-100 dark:bg-slate-700 p-5 rounded-2xl dark:text-white">
              <h3 className="font-bold">PRLD5121</h3>
              <p>Programming Logic & Design</p>
            </div>

            <div className="bg-slate-100 dark:bg-slate-700 p-5 rounded-2xl dark:text-white">
              <h3 className="font-bold">ITRM7311</h3>
              <p>IT Risk Management</p>
            </div>

          </div>

        </section>
      )
    }

    if (page === "assignments") {
      return (
        <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-6 dark:text-white">
            Assignments
          </h2>

          <div className="space-y-4">

            <div className="bg-red-100 p-5 rounded-2xl">
              <h3 className="font-bold">HCIN6222 Prototype</h3>
              <p>Due: 25 May 2026</p>
            </div>

            <div className="bg-yellow-100 p-5 rounded-2xl">
              <h3 className="font-bold">IRIT7311 Research Proposal</h3>
              <p>Due: 28 May 2026</p>
            </div>

            <div className="bg-blue-100 p-5 rounded-2xl">
              <h3 className="font-bold">PRLD5121 Programming Task</h3>
              <p>Due: 30 May 2026</p>
            </div>

          </div>

          {/* Upload Assignment */}
          <div className="mt-8">

            <h3 className="text-xl font-bold mb-3 dark:text-white">
              Upload Assignment
            </h3>

            <input
              type="file"
              onChange={(e) =>
                setUploadedAssignment(e.target.files[0]?.name)
              }
              className="w-full p-3 border rounded-xl bg-white"
            />

            {uploadedAssignment && (
              <p className="text-green-500 mt-3">
                Uploaded: {uploadedAssignment}
              </p>
            )}

          </div>

        </section>
      )
    }

    if (page === "quizzes") {
      return (
        <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-6 dark:text-white">
            Module Quizzes
          </h2>

          <div className="space-y-8">

            {/* QUIZ 1 */}
            <div className="bg-slate-100 dark:bg-slate-700 p-6 rounded-2xl">

              <h3 className="font-bold text-lg dark:text-white">
                HCIN6222 Quiz
              </h3>

              <p className="mt-4 dark:text-white">
                What is usability?
              </p>

              <div className="space-y-3 mt-4">

                <button
                  onClick={() => setQuizAnswer("Correct Answer")}
                  className="w-full bg-white p-3 rounded-xl"
                >
                  Improving user interaction
                </button>

                <button
                  onClick={() => setQuizAnswer("Wrong Answer")}
                  className="w-full bg-white p-3 rounded-xl"
                >
                  Increasing confusion
                </button>

              </div>

            </div>

            {/* QUIZ 2 */}
            <div className="bg-slate-100 dark:bg-slate-700 p-6 rounded-2xl">

              <h3 className="font-bold text-lg dark:text-white">
                PRLD5121 Quiz
              </h3>

              <p className="mt-4 dark:text-white">
                What does HTML stand for?
              </p>

              <div className="space-y-3 mt-4">

                <button
                  onClick={() => setQuizAnswer("Correct Answer")}
                  className="w-full bg-white p-3 rounded-xl"
                >
                  HyperText Markup Language
                </button>

                <button
                  onClick={() => setQuizAnswer("Wrong Answer")}
                  className="w-full bg-white p-3 rounded-xl"
                >
                  HighText Machine Language
                </button>

              </div>

            </div>

          </div>

          {quizAnswer && (
            <p className="mt-6 text-green-500 font-bold">
              {quizAnswer}
            </p>
          )}

        </section>
      )
    }

    if (page === "progress") {
      return (
        <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-6 dark:text-white">
            Academic Progress
          </h2>

          <div className="space-y-4">

            <div className="bg-green-100 p-5 rounded-2xl">
              HCIN6222 — 80%
            </div>

            <div className="bg-blue-100 p-5 rounded-2xl">
              IRIT7311 — 70%
            </div>

            <div className="bg-yellow-100 p-5 rounded-2xl">
              PRLD5121 — 75%
            </div>

            <div className="bg-purple-100 p-5 rounded-2xl">
              ITRM7311 — 65%
            </div>

          </div>

        </section>
      )
    }

    if (page === "groups") {
      return (
        <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-6 dark:text-white">
            Study Groups
          </h2>

          <div className="bg-slate-100 dark:bg-slate-700 p-6 rounded-2xl">

            <h3 className="font-bold dark:text-white">
              Programming Study Group
            </h3>

            <p className="mt-2 dark:text-white">
              12 Members • Friday 15:00
            </p>

            <button
              onClick={handleJoinGroup}
              className="mt-5 bg-slate-900 text-white px-5 py-3 rounded-xl"
            >
              Join Group
            </button>

            {joinedGroup && (
              <p className="text-green-500 mt-4 font-bold">
                Joined Group Successfully
              </p>
            )}

          </div>

        </section>
      )
    }

    if (page === "settings") {
      return (
        <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-6 dark:text-white">
            Accessibility Settings
          </h2>

          <div className="space-y-4">

            <button
              onClick={() => setHighContrast(!highContrast)}
              className="w-full bg-slate-100 dark:bg-slate-700 p-5 rounded-2xl dark:text-white"
            >
              {highContrast
                ? "High Contrast Enabled"
                : "Enable High Contrast"}
            </button>

            <button
              onClick={() => setTextSize(!textSize)}
              className="w-full bg-slate-100 dark:bg-slate-700 p-5 rounded-2xl dark:text-white"
            >
              {textSize
                ? "Large Text Enabled"
                : "Increase Text Size"}
            </button>

          </div>

        </section>
      )
    }

    if (page === "about") {
      return (
        <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-6 dark:text-white">
            About Us
          </h2>

          <p className="text-slate-600 dark:text-slate-300 leading-8">
            VarsityHub is a student academic management platform designed
            to help students manage assignments, quizzes, study schedules,
            collaboration and productivity in one system.
          </p>

        </section>
      )
    }

    if (page === "contact") {
      return (
        <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-6 dark:text-white">
            Contact Us
          </h2>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border rounded-2xl"
            />

            <textarea
              placeholder="Your Message"
              className="w-full p-4 border rounded-2xl h-40"
            ></textarea>

            <button
              onClick={handleMessage}
              className="bg-slate-900 text-white px-6 py-3 rounded-2xl"
            >
              Send Message
            </button>

            {messageSent && (
              <p className="text-green-500 font-bold">
                Message Sent Successfully
              </p>
            )}

          </div>

        </section>
      )
    }
  }

  return (
    <div className={darkMode ? "dark" : ""}>

      <div
        className={`min-h-screen p-6 transition-all duration-500 ${
          highContrast
            ? "bg-black text-white"
            : "bg-slate-100 dark:bg-slate-900"
        } ${textSize ? "text-xl" : ""}`}
      >

        {/* NAVBAR */}
        <nav className="bg-slate-900 dark:bg-slate-800 text-white p-4 rounded-3xl shadow-lg flex justify-between items-center mb-8">

          <div className="flex items-center gap-3">
            <FaUserGraduate className="text-2xl" />
            <h1 className="text-2xl font-bold">VarsityHub</h1>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-white text-slate-900 px-4 py-2 rounded-xl"
          >
            {darkMode ? (
              <div className="flex items-center gap-2">
                <FaSun />
                Light Mode
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <FaMoon />
                Dark Mode
              </div>
            )}
          </button>

        </nav>

        {!loggedIn ? (

          /* LOGIN */
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

              {/* CREATE ACCOUNT */}
              <div className="bg-slate-100 dark:bg-slate-700 p-5 rounded-2xl mt-6">

                <h3 className="font-bold mb-4 dark:text-white">
                  Create Account
                </h3>

                <div className="space-y-3">

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

                </div>

              </div>

            </div>

          </motion.div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

            {/* SIDEBAR */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-6 h-fit">

              <div className="space-y-4">

                <button
                  onClick={() => setPage("home")}
                  className="flex items-center gap-3 w-full bg-slate-100 dark:bg-slate-700 dark:text-white p-4 rounded-2xl"
                >
                  <FaHome />
                  Home
                </button>

                <button
                  onClick={() => setPage("modules")}
                  className="flex items-center gap-3 w-full bg-slate-100 dark:bg-slate-700 dark:text-white p-4 rounded-2xl"
                >
                  <FaBook />
                  Modules
                </button>

                <button
                  onClick={() => setPage("assignments")}
                  className="flex items-center gap-3 w-full bg-slate-100 dark:bg-slate-700 dark:text-white p-4 rounded-2xl"
                >
                  <FaTasks />
                  Assignments
                </button>

                <button
                  onClick={() => setPage("quizzes")}
                  className="flex items-center gap-3 w-full bg-slate-100 dark:bg-slate-700 dark:text-white p-4 rounded-2xl"
                >
                  <FaQuestionCircle />
                  Quizzes
                </button>

                <button
                  onClick={() => setPage("progress")}
                  className="flex items-center gap-3 w-full bg-slate-100 dark:bg-slate-700 dark:text-white p-4 rounded-2xl"
                >
                  <FaChartLine />
                  Progress
                </button>

                <button
                  onClick={() => setPage("groups")}
                  className="flex items-center gap-3 w-full bg-slate-100 dark:bg-slate-700 dark:text-white p-4 rounded-2xl"
                >
                  <FaUsers />
                  Study Groups
                </button>

                <button
                  onClick={() => setPage("settings")}
                  className="flex items-center gap-3 w-full bg-slate-100 dark:bg-slate-700 dark:text-white p-4 rounded-2xl"
                >
                  <FaCog />
                  Settings
                </button>

                <button
                  onClick={() => setPage("about")}
                  className="flex items-center gap-3 w-full bg-slate-100 dark:bg-slate-700 dark:text-white p-4 rounded-2xl"
                >
                  <FaUserGraduate />
                  About Us
                </button>

                <button
                  onClick={() => setPage("contact")}
                  className="flex items-center gap-3 w-full bg-slate-100 dark:bg-slate-700 dark:text-white p-4 rounded-2xl"
                >
                  <FaEnvelope />
                  Contact Us
                </button>

              </div>

            </div>

            {/* MAIN CONTENT */}
            <div className="md:col-span-4">
              {renderPage()}
            </div>

          </div>

        )}

      </div>

    </div>
  )
}