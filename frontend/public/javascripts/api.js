/* this file code by parag and Tejas */
const urls = "http://localhost:3000/";
document.querySelector("#from").addEventListener("submit", (e) => {
  e.preventDefault();
  axios
    .post(urls, {
      userid: document.getElementById("email").value,
      password: document.getElementById("password").value,
    })
    .then((e) => {
      window.localStorage.setItem("userinfo", e.data);
    })
    .catch((e) => {
      alert("try angen");
    });
});
