function App() {
  return (
    <div className="container mt-5">

      {/* Heading */}
      <h2 className="text-center mb-4">
        Bootstrap UI Design Experiment
      </h2>

      {/* Card Component */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Student Login</h5>
          <p className="card-text">
            This form is created using Bootstrap components.
          </p>
        </div>
      </div>

      {/* Form Component */}
      <form>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        {/* Button Component */}
        <button className="btn btn-primary w-100">
          Login
        </button>
      </form>

    </div>
  )
}

export default App
