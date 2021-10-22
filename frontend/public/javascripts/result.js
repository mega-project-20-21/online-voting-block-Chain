var gun = Gun(["http://localhost:3000/gun"]);
const blocke = gun.get("block");
blocke.map().on((block, key) => {
  const k = gun.get(key);
  k.map().on((v) => {
    if (v.title) {
      document.getElementById(v.title).innerHTML = +1;
    }
  });
});
