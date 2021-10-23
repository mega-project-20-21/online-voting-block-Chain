const urls = "http://localhost:3000/sigup";
document.querySelector("#from2").addEventListener("submit", (e) => {
  e.preventDefault();
  axios
    .post(urls, {
      userid: document.getElementById("email").value,
      password: document.getElementById("password").value,
    })
    .then((e) => {
      console.log(e);
      window.localStorage.setItem("userinfo", JSON.stringify(e.data));
      window.location.href = "/howtovote";
    })
    .catch((e) => {
      alert("try again");
    });
});
