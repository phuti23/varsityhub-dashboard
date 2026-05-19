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

        {/* Dashboard */}
        <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">
            Student Dashboard
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

            <motion.div whileHover={{ scale: 1.05 }} className="bg-blue-100 rounded-2xl p-4">
              <h3 className="font-semibold">Assignments</h3>
              <p className="text-3xl font-bold mt-2">10</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-purple-100 rounded-2xl p-4">
              <h3 className="font-semibold">Upcoming Quizzes</h3>
              <p className="text-3xl font-bold mt-2">5</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-green-100 rounded-2xl p-4">
              <h3 className="font-semibold">Modules</h3>
              <p className="text-3xl font-bold mt-2">5</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-orange-100 rounded-2xl p-4">
              <h3 className="font-semibold">Progress</h3>
              <p className="text-3xl font-bold mt-2">84%</p>
            </motion.div>

          </div>

          {/* Modules */}
          <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl p-5">
            <h3 className="font-semibold text-lg mb-3 dark:text-white">
              Registered Modules
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

              <div className="bg-white dark:bg-slate-600 p-4 rounded-xl dark:text-white">
                HCIN6222 — Human Computer Interaction
              </div>

              <div className="bg-white dark:bg-slate-600 p-4 rounded-xl dark:text-white">
                IRIT7311 — Information Technology Research
              </div>

              <div className="bg-white dark:bg-slate-600 p-4 rounded-xl dark:text-white">
                BUSA7321 — Business Analysis
              </div>

              <div className="bg-white dark:bg-slate-600 p-4 rounded-xl dark:text-white">
                PRLD5121 — Programming Logic & Design
              </div>

              <div className="bg-white dark:bg-slate-600 p-4 rounded-xl dark:text-white">
                ITRM7311 — IT Risk Management
              </div>

            </div>
          </div>
        </section>

        {/* Assignment Tracker */}
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
                  Due: 29 May 2026
                </p>
              </div>

              <span className="bg-yellow-500 text-white px-4 py-2 rounded-xl text-sm">
                Pending
              </span>
            </div>

            <div className="flex justify-between items-center bg-blue-100 rounded-2xl p-4">
              <div>
                <h3 className="font-semibold">
                  BUSA7321 Business Case Study
                </h3>

                <p className="text-sm text-slate-600">
                  Due: 05 June 2026
                </p>
              </div>

              <span className="bg-blue-500 text-white px-4 py-2 rounded-xl text-sm">
                In Progress
              </span>
            </div>

            <div className="flex justify-between items-center bg-green-100 rounded-2xl p-4">
              <div>
                <h3 className="font-semibold">
                  PRLD5121 Programming Assessment
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
        </section>

        {/* Quiz Section */}
        <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">
            Interactive Quizzes
          </h2>

          <div className="space-y-6">

            <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">
                HCI Quiz
              </h3>

              <p className="mb-4 dark:text-slate-200">
                What is the purpose of usability in interface design?
              </p>

              <div className="space-y-3">
                <button className="w-full text-left bg-white dark:bg-slate-600 border rounded-xl p-3 hover:bg-slate-200">
                  A. Increase confusion
                </button>

                <button className="w-full text-left bg-white dark:bg-slate-600 border rounded-xl p-3 hover:bg-green-200">
                  B. Improve interaction and efficiency
                </button>

                <button className="w-full text-left bg-white dark:bg-slate-600 border rounded-xl p-3 hover:bg-slate-200">
                  C. Reduce accessibility
                </button>

                <button className="w-full text-left bg-white dark:bg-slate-600 border rounded-xl p-3 hover:bg-slate-200">
                  D. Increase complexity
                </button>
              </div>
            </div>

            <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">
                Programming Logic Quiz
              </h3>

              <p className="mb-4 dark:text-slate-200">
                Which statement is used for decision making in programming?
              </p>

              <div className="space-y-3">
                <button className="w-full text-left bg-white dark:bg-slate-600 border rounded-xl p-3 hover:bg-slate-200">
                  A. Loop
                </button>

                <button className="w-full text-left bg-white dark:bg-slate-600 border rounded-xl p-3 hover:bg-green-200">
                  B. If Statement
                </button>

                <button className="w-full text-left bg-white dark:bg-slate-600 border rounded-xl p-3 hover:bg-slate-200">
                  C. Variable
                </button>

                <button className="w-full text-left bg-white dark:bg-slate-600 border rounded-xl p-3 hover:bg-slate-200">
                  D. Array
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Study Groups */}
        <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">
            Study Group Collaboration
          </h2>

          <div className="space-y-4">

            <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl p-4">
              <h3 className="font-semibold dark:text-white">
                HCIN6222 Study Group
              </h3>

              <p className="text-slate-600 dark:text-slate-300 mt-1">
                15 members • Friday 15:00
              </p>

              <button className="mt-4 bg-slate-900 text-white px-5 py-2 rounded-xl">
                Join Discussion
              </button>
            </div>

            <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl p-4">
              <h3 className="font-semibold dark:text-white">
                Programming Logic Group
              </h3>

              <p className="text-slate-600 dark:text-slate-300 mt-1">
                Shared notes and quiz challenges available.
              </p>

              <button className="mt-4 bg-slate-900 text-white px-5 py-2 rounded-xl">
                Open Group
              </button>
            </div>

          </div>
        </section>

        {/* Accessibility */}
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
    </div>
  )
}