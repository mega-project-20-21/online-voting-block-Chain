const urls = "http://localhost:8000/";
$("#from").on("submit", function (e) {
  e.preventDefault();
  const email = $("#email")[0].value;
  const password = $("#password")[0].value;
  $.ajax({
    type: "Post",
    url: urls,
    data: { email, password },
    dataType: "JSON",
    success: function (response) {
      console.log(response);
    },
    error: (r) => {
      console.log(r);
    },
  });
});
