const urls = "http://localhost:5000/";
$("#from").on("submit", function (e) {
  e.preventDefault();
  const email = $("#email")[0].value.toString();
  const password = $("#password")[0].value.toString();
  $.ajax({
    type: "Post",
    url: urls,
    data: JSON.stringify({ userid: email, password }),
    dataType: "application/json",
    success: function (response) {
      console.log(response);
    },
    error: (r) => {
      console.log(r);
    },
  });
});
