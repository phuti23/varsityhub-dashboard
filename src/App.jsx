import { useState } from "react"
import { motion } from "framer-motion"
import { FaMoon, FaSun, FaUserGraduate } from "react-icons/fa"

export default function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    if (email && password) {
      setLoggedIn(true)
    } else {
      alert("Please enter email and password")
    }
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

              <input
                type="email"
                placeholder="Student Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-2xl p-4 dark:bg-slate-700 dark:text-white"
              />

              <p className="text-red-500 text-sm">
                Please enter a valid student email.
              </p>

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-2xl p-4 dark:bg-slate-700 dark:text-white"
              />

              <p className="text-red-500 text-sm">
                Password must contain at least 8 characters.
              </p>

              <button
                onClick={handleLogin}
                className="w-full bg-slate-900 text-white rounded-2xl p-4 font-semibold hover:bg-slate-700"
              >
                Login
              </button>

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

            {/* MOTIVATION */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                Motivational Reminder
              </h2>

              <div className="bg-slate-100 dark:bg-slate-700 p-5 rounded-2xl">

                <p className="text-slate-600 dark:text-slate-300">
                  Stay focused and complete small tasks daily for academic success.
                </p>

              </div>

            </section>

            {/* MODULES */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-semibold mb-6 dark:text-white">
                Registered Modules
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-2xl dark:text-white">
                  HCIN6222 — Human Computer Interaction
                </div>

                <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-2xl dark:text-white">
                  IRIT7311 — Information Technology Research
                </div>

                <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-2xl dark:text-white">
                  BUSA7321 — Business Analysis
                </div>

                <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-2xl dark:text-white">
                  PRLD5121 — Programming Logic & Design
                </div>

                <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-2xl dark:text-white">
                  ITRM7311 — IT Risk Management
                </div>

              </div>

            </section>

            {/* ASSIGNMENT TRACKER */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">

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

                <div className="flex justify-between items-center bg-yellow-100 rounded-2xl p-4">

                  <div>
                    <h3 className="font-semibold">
                      IRIT7311 Research Proposal
                    </h3>

                    <p className="text-sm text-slate-600">
                      Due: 28 May 2026
                    </p>
                  </div>

                  <span className="bg-yellow-500 text-white px-4 py-2 rounded-xl text-sm">
                    Pending
                  </span>

                </div>

                <div className="flex justify-between items-center bg-blue-100 rounded-2xl p-4">

                  <div>
                    <h3 className="font-semibold">
                      BUSA7321 Business Analysis Report
                    </h3>

                    <p className="text-sm text-slate-600">
                      Due: 30 May 2026
                    </p>
                  </div>

                  <span className="bg-blue-500 text-white px-4 py-2 rounded-xl text-sm">
                    In Progress
                  </span>

                </div>

              </div>

            </section>

            {/* STUDY PLANNER */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-semibold mb-6 dark:text-white">
                Study Planner
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-2xl">

                  <h3 className="font-semibold dark:text-white mb-3">
                    Monday
                  </h3>

                  <div className="bg-white dark:bg-slate-600 p-3 rounded-xl mb-2 dark:text-white">
                    Programming Revision
                  </div>

                  <div className="bg-white dark:bg-slate-600 p-3 rounded-xl dark:text-white">
                    Database Practice Quiz
                  </div>

                </div>

                <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-2xl">

                  <h3 className="font-semibold dark:text-white mb-3">
                    Tuesday
                  </h3>

                  <div className="bg-white dark:bg-slate-600 p-3 rounded-xl mb-2 dark:text-white">
                    UI Design Research
                  </div>

                  <div className="bg-white dark:bg-slate-600 p-3 rounded-xl dark:text-white">
                    Group Study Session
                  </div>

                </div>

                <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-2xl">

                  <h3 className="font-semibold dark:text-white mb-3">
                    Wednesday
                  </h3>

                  <div className="bg-white dark:bg-slate-600 p-3 rounded-xl mb-2 dark:text-white">
                    Quiz Preparation
                  </div>

                  <div className="bg-white dark:bg-slate-600 p-3 rounded-xl dark:text-white">
                    Assignment Planning
                  </div>

                </div>

              </div>

            </section>

            {/* QUIZ */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-semibold mb-6 dark:text-white">
                Interactive Quiz
              </h2>

              <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-6">

                <h3 className="font-semibold text-lg dark:text-white mb-4">
                  What is the purpose of usability in interface design?
                </h3>

                <div className="space-y-3">

                  <button className="w-full text-left bg-white dark:bg-slate-600 dark:text-white border rounded-xl p-3">
                    A. To increase confusion
                  </button>

                  <button className="w-full text-left bg-white dark:bg-slate-600 dark:text-white border rounded-xl p-3">
                    B. To improve user interaction and efficiency
                  </button>

                  <button className="w-full text-left bg-white dark:bg-slate-600 dark:text-white border rounded-xl p-3">
                    C. To reduce accessibility
                  </button>

                  <button className="w-full text-left bg-white dark:bg-slate-600 dark:text-white border rounded-xl p-3">
                    D. To increase complexity
                  </button>

                </div>

              </div>

            </section>

            {/* STUDY GROUPS */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-semibold mb-6 dark:text-white">
                Study Group Collaboration
              </h2>

              <div className="space-y-4">

                <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl p-4">

                  <h3 className="font-semibold dark:text-white">
                    Programming Study Group
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 mt-1">
                    12 members • Next Session: Friday 15:00
                  </p>

                  <button className="mt-4 bg-slate-900 text-white px-5 py-2 rounded-xl">
                    Join Discussion
                  </button>

                </div>

              </div>

            </section>

            {/* RESOURCE HUB */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">

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

                <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-2xl dark:text-white">
                  IT Risk Management Guide
                </div>

              </div>

            </section>

            {/* ACCESSIBILITY */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8 mb-10">

              <h2 className="text-2xl font-semibold mb-6 dark:text-white">
                Accessibility Settings
              </h2>

              <div className="space-y-4 max-w-lg">

                <div className="flex justify-between items-center bg-slate-100 dark:bg-slate-700 p-4 rounded-2xl">

                  <span className="dark:text-white">
                    High Contrast Mode
                  </span>

                  <button className="bg-slate-900 text-white px-4 py-2 rounded-xl">
                    Enable
                  </button>

                </div>

                <div className="flex justify-between items-center bg-slate-100 dark:bg-slate-700 p-4 rounded-2xl">

                  <span className="dark:text-white">
                    Increase Text Size
                  </span>

                  <button className="bg-slate-900 text-white px-4 py-2 rounded-xl">
                    Adjust
                  </button>

                </div>

                <div className="flex justify-between items-center bg-slate-100 dark:bg-slate-700 p-4 rounded-2xl">

                  <span className="dark:text-white">
                    Keyboard Navigation
                  </span>

                  <button className="bg-slate-900 text-white px-4 py-2 rounded-xl">
                    Active
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
