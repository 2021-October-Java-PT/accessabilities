export default function Login() {
  return `
    <form action="action_page.php" method="post>
    <div class="avi-container">
    <img src="" alt="Avatar" class="avatar">
    </div>

    <div class="input-container">
        <label for="user-name"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="user-name" required>

        <label for="pswrd"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="pswrd" required>

        <button type="submit">Login</button>
        <label><input type="checkbox" checked="checked" name="remember"> Remember me </label>
        </div>

        <div class="login-footer" style="background-color:#800033">
            <button tpe="button" class="cancelbtn">Cancel</button>
            <br></br>
            <span > Sign up Here! </span>
            <span class="pswrd">Forgot <a href="#">password?</a></span>
        </div>
    </form>
    `;
}
