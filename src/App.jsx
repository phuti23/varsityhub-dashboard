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
  FaTasks,
  FaChartLine,
  FaQuestionCircle,
} from "react-icons/fa"

export default function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")

  const [page, setPage] = useState("home")

  const [highContrast, setHighContrast] = useState(false)
  const [largeText, setLargeText] = useState(false)

  const [contactMessage, setContactMessage] = useState("")
  const [messageSent, setMessageSent] = useState(false)

  const [selectedQuiz, setSelectedQuiz] = useState("")

  const [joinedGroup, setJoinedGroup] = useState(false)
  const [loadingGroup, setLoadingGroup] = useState(false)

  const [showCreateAccount, setShowCreateAccount] = useState(false)

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

    setLoadingGroup(true)

    setTimeout(() => {
      setLoadingGroup(false)
      setJoinedGroup(true)
    }, 2000)
  }

  const handleMessage = () => {

    if (contactMessage !== "") {
      setMessageSent(true)
      setContactMessage("")
    }
  }

  const renderPage = () => {

    switch (page) {

      case "home":
        return (
          <div className="space-y-8">

            <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg">

              <h1 className="text-4xl font-bold dark:text-white">
                Student Dashboard
              </h1>

              <p className="mt-3 text-slate-500 dark:text-slate-300">
                Welcome to VarsityHub Student Portal.
              </p>

            </section>

            <section className="grid grid-cols-1 md:grid-cols-4 gap-4">

              <button
                onClick={() => setPage("assignments")}
                className="bg-blue-100 rounded-2xl p-5 hover:scale-105 transition"
              >
                <h3 className="font-semibold">Assignments</h3>
                <p className="text-3xl font-bold mt-2">6</p>
              </button>

              <button
                onClick={() => setPage("quizzes")}
                className="bg-purple-100 rounded-2xl p-5 hover:scale-105 transition"
              >
                <h3 className="font-semibold">Quizzes</h3>
                <p className="text-3xl font-bold mt-2">5</p>
              </button>

              <button
                onClick={() => setPage("modules")}
                className="bg-green-100 rounded-2xl p-5 hover:scale-105 transition"
              >
                <h3 className="font-semibold">Modules</h3>
                <p className="text-3xl font-bold mt-2">5</p>
              </button>

              <button
                onClick={() => setPage("progress")}
                className="bg-orange-100 rounded-2xl p-5 hover:scale-105 transition"
              >
                <h3 className="font-semibold">Progress</h3>
                <p className="text-3xl font-bold mt-2">72%</p>
              </button>

            </section>

          </div>
        )

      case "assignments":
        return (
          <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg">

            <h2 className="text-3xl font-bold mb-6 dark:text-white">
              Assignments
            </h2>

            <div className="space-y-4">

              <div className="bg-red-100 p-4 rounded-2xl">
                HCIN6222 Prototype Submission — Due 25 May
              </div>

              <div className="bg-yellow-100 p-4 rounded-2xl">
                Research Proposal — Due 28 May
              </div>

              <div className="bg-blue-100 p-4 rounded-2xl">
                Business Analysis Report — Due 30 May
              </div>

            </div>

          </section>
        )

      case "quizzes":
        return (
          <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg">

            <h2 className="text-3xl font-bold mb-6 dark:text-white">
              Interactive Quizzes
            </h2>

            <div className="space-y-3">

              {[
                "A. To increase confusion",
                "B. To improve user interaction and efficiency",
                "C. To reduce accessibility",
                "D. To increase complexity",
              ].map((quiz) => (

                <button
                  key={quiz}
                  onClick={() => setSelectedQuiz(quiz)}
                  className={`w-full text-left p-4 rounded-xl border
                  ${selectedQuiz === quiz
                      ? "bg-green-300"
                      : "bg-slate-100 dark:bg-slate-700 dark:text-white"}`}
                >
                  {quiz}
                </button>

              ))}

            </div>

            {selectedQuiz && (

              <p className="mt-5 text-green-600 font-semibold">
                You selected: {selectedQuiz}
              </p>

            )}

          </section>
        )

      case "modules":
        return (
          <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg">

            <h2 className="text-3xl font-bold mb-6 dark:text-white">
              Modules
            </h2>

            <div className="space-y-4">

              <div className="bg-slate-100 dark:bg-slate-700 p-5 rounded-2xl dark:text-white">
                Human Computer Interaction
              </div>

              <div className="bg-slate-100 dark:bg-slate-700 p-5 rounded-2xl dark:text-white">
                Information Technology Research
              </div>

              <div className="bg-slate-100 dark:bg-slate-700 p-5 rounded-2xl dark:text-white">
                Business Analysis
              </div>

              <div className="bg-slate-100 dark:bg-slate-700 p-5 rounded-2xl dark:text-white">
                Programming Logic & Design
              </div>

            </div>

          </section>
        )

      case "progress":
        return (
          <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg">

            <h2 className="text-3xl font-bold mb-6 dark:text-white">
              Academic Progress
            </h2>

            <div className="space-y-4">

              <div className="bg-green-100 p-4 rounded-2xl">
                ✔ Completed 4 Assignments
              </div>

              <div className="bg-blue-100 p-4 rounded-2xl">
                ✔ Attended 6 Study Sessions
              </div>

              <div className="bg-yellow-100 p-4 rounded-2xl">
                ✔ Scored 85% Average Quiz Mark
              </div>

            </div>

          </section>
        )

      case "groups":
        return (
          <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg">

            <h2 className="text-3xl font-bold mb-6 dark:text-white">
              Study Groups
            </h2>

            <div className="bg-slate-100 dark:bg-slate-700 p-5 rounded-2xl">

              <h3 className="font-bold dark:text-white">
                Programming Study Group
              </h3>

              <p className="mt-2 dark:text-slate-300">
                Friday • 15:00 • 12 Members
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
        )

      case "contact":
        return (
          <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg">

            <h2 className="text-3xl font-bold mb-6 dark:text-white">
              Contact Us
            </h2>

            <textarea
              placeholder="Write your message..."
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
              className="w-full h-40 border rounded-2xl p-4 dark:bg-slate-700 dark:text-white"
            />

            <button
              onClick={handleMessage}
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
        )

      case "settings":
        return (
          <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg">

            <h2 className="text-3xl font-bold mb-6 dark:text-white">
              Settings
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between items-center bg-slate-100 dark:bg-slate-700 p-4 rounded-2xl">

                <span className="dark:text-white">
                  Theme Mode
                </span>

                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="bg-slate-900 text-white px-4 py-2 rounded-xl"
                >
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </button>

              </div>

              <div className="flex justify-between items-center bg-slate-100 dark:bg-slate-700 p-4 rounded-2xl">

                <span className="dark:text-white">
                  High Contrast
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
                  Large Text
                </span>

                <button
                  onClick={() => setLargeText(!largeText)}
                  className="bg-slate-900 text-white px-4 py-2 rounded-xl"
                >
                  {largeText ? "Enabled" : "Enable"}
                </button>

              </div>

            </div>

          </section>
        )

      default:
        return null
    }
  }

  return (

    <div className={darkMode ? "dark" : ""}>

      <div
        className={`min-h-screen p-6 transition-all duration-500
        ${darkMode
            ? "bg-slate-900 text-white"
            : "bg-slate-100 text-black"}
        ${highContrast ? "contrast-150" : ""}
        ${largeText ? "text-xl" : "text-base"}
        `}
      >

        {/* NAVBAR */}
        <nav className="bg-slate-900 dark:bg-slate-800 text-white p-4 rounded-3xl shadow-lg flex justify-between items-center mb-8">

          <div className="flex items-center gap-3">
            <FaUserGraduate className="text-2xl" />
            <h1 className="text-2xl font-bold">
              VarsityHub
            </h1>
          </div>

          {loggedIn && (

            <div className="flex gap-5 text-xl">

              <button onClick={() => setPage("home")}>
                <FaHome />
              </button>

              <button onClick={() => setPage("assignments")}>
                <FaTasks />
              </button>

              <button onClick={() => setPage("quizzes")}>
                <FaQuestionCircle />
              </button>

              <button onClick={() => setPage("modules")}>
                <FaBook />
              </button>

              <button onClick={() => setPage("progress")}>
                <FaChartLine />
              </button>

              <button onClick={() => setPage("groups")}>
                <FaUsers />
              </button>

              <button onClick={() => setPage("contact")}>
                <FaEnvelope />
              </button>

              <button onClick={() => setPage("settings")}>
                <FaCog />
              </button>

            </div>

          )}

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

              {loginError && (
                <p className="text-red-500 text-sm font-medium">
                  {loginError}
                </p>
              )}

              <button
                onClick={handleLogin}
                className="w-full bg-slate-900 text-white rounded-2xl p-4 font-semibold"
              >
                Login
              </button>

              <div className="flex justify-between text-sm">

                <button
                  onClick={() => setShowCreateAccount(!showCreateAccount)}
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

              {showCreateAccount && (

                <div className="mt-6 bg-slate-100 dark:bg-slate-700 p-6 rounded-2xl space-y-4">

                  <input type="text" placeholder="Name" className="w-full p-3 rounded-xl" />
                  <input type="text" placeholder="Surname" className="w-full p-3 rounded-xl" />
                  <input type="text" placeholder="Student Email" className="w-full p-3 rounded-xl" />
                  <input type="text" placeholder="Contact Number" className="w-full p-3 rounded-xl" />
                  <input type="password" placeholder="Password" className="w-full p-3 rounded-xl" />
                  <input type="password" placeholder="Confirm Password" className="w-full p-3 rounded-xl" />

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

          renderPage()

        )}

      </div>

    </div>
  )
}