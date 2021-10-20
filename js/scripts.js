$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    const food = $("input:radio[name=food]:checked").val();
    if (food == "hotdog")
      $("#food-output").text("You are a loser that likes hotdogs. Wow.");
  });
});
