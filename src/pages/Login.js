export default function Login() {
  return (
    <div>
      <form action="validate" method="post">
        <h2>Welcome to TuneHUB</h2>
        <h5>
          <i>Log in or sign up with your Email Id</i>
        </h5>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required="required"
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required="required"
        />
        <br />
        <br />
        <button value="LOGIN">Login</button>
      </form>
    </div>
  );
}
