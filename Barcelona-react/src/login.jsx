function Login({ onLogin }) {
  return (
    <section className="login-page">
      <div className="login-box">
        <h1>login</h1>

        <input
          type="text"
          placeholder="username"
        />

        <input
          type="password"
          placeholder="password"
        />

        <button onClick={onLogin}>
          Masuk
        </button>
      </div>
    </section>
  )
}

export default Login