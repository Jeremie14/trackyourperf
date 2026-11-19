import './App.css'

function App() {
  return (
      <div className="app">
          <header className="navbar">
              <div className="navbar-top">
                  <h1 className="navbar-title">
                      Track your performance
                  </h1>

                  <button
                      className="profile-button"
                      type="button"
                      aria-label="Profil"
                  >
                      <svg
                          width="26"
                          height="26"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                      >
                          <circle cx="12" cy="8" r="4" />
                          <path d="M4 21v-2a8 8 0 0 1 16 0v2" />
                      </svg>
                  </button>
              </div>

              <div className="navbar-bottom">
                  {/* Future dropdown menus */}
              </div>
          </header>

          <main className="main-content">
              {/* Future dashboard content */}
          </main>
      </div>
  )
}

export default App
