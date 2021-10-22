(() => {
  if (window.localStorage.getItem("userinfo") === undefined || null) {
    window.location.href = "/";
  }
  console.log("ok");
})();

function ok(data) {
  const user = JSON.parse(window.localStorage.getItem("userinfo"));
  const d = { ...data, ...user };
  console.log(d);
}
