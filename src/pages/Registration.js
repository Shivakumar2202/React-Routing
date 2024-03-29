export default function Registration() {
  return (
    <div>
      <form action="register" method="post">
        <h2>Registration Form</h2>
        <input
          id="in1"
          type="text"
          name="username"
          placeholder="User Name"
          required="required"
        />
        <br />
        <input
          id="in1"
          type="email"
          name="email"
          placeholder="Email"
          required="required"
        />
        <br />
        <input
          id="in1"
          type="password"
          name="password"
          placeholder="Password"
          required="required"
        />
        <br />

        <label id="l1">Gender:</label>
        <div>
          <label>
            <input type="radio" id="M" name="gender" value="Male" />
            Male
          </label>
          <label>
            <input type="radio" id="F" name="gender" value="Female" />
            Female
          </label>
          <label>
            <input type="radio" id="O" name="gender" value="Others" />
            Others
          </label>
        </div>
        <br />
        <label id="l1">Role:</label>
        <div>
          <label>
            <input type="radio" id="Admin" name="role" value="Admin" />
            Admin
          </label>
          <label>
            <input type="radio" id="Customer" name="role" value="Customer" />
            Customer
          </label>
        </div>
        <br />
        <label id="l1">Address:</label>
        <textarea name="address"></textarea>
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
