const signupFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#username-input-signup");
  const passwordEl = document.querySelector("#password-input-signup");

  // const response = await fetch("/api/user", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     username: usernameEl.value,
  //     password: passwordEl.value,
  //   }),
  //   headers: { "Content-Type": "application/json" },
  // });

  // if (response.ok) {
  //   document.location.replace("/dashboard");
  // } else {
  //   console.log(response);
  //   alert("Failed to sign up");
  // }

  fetch("/api/user", {
    method: "post",
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then(function () {
      console.log("am i working?");
      document.location.replace("/dashboard");
    })
    .catch((err) => console.log(err));
};

document.querySelector("#signup-form").addEventListener("submit", signupFormHandler);
