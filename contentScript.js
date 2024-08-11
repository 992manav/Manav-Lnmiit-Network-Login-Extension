window.onload = function () {
  setTimeout(function () {
    const usernameInputElement = document.getElementById(
      "LoginUserPassword_auth_username"
    );
    const passwordInputElement = document.getElementById(
      "LoginUserPassword_auth_password"
    );

    if (usernameInputElement && passwordInputElement) {
      usernameInputElement.value = "your_username_here";
      passwordInputElement.value = "your_password_here";

      const loginButtonElement = document.getElementById(
        "UserCheck_Login_Button"
      );
      if (loginButtonElement) {
        loginButtonElement.click();
        console.log("hi");
      } else {
        console.log("Login button element not found.");
      }
    } else {
      console.log("Username or password input element not found.");
    }
  }, 3000);
};
