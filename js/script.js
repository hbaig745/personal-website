var menu_button = document.getElementById("menu");
menu_button.addEventListener("mouseover", menuAnimation);
menu_button.addEventListener("mouseout", menuAnimationReset);

function menuAnimation() {
  var line = document.getElementById("menu-line1");
  line.style.backgroundPosition = "right bottom";
  var line = document.getElementById("menu-line2");
  line.style.backgroundPosition = "right bottom";
  var line = document.getElementById("menu-line3");
  line.style.backgroundPosition = "right bottom";
}

function menuAnimationReset() {
  var line = document.getElementById("menu-line1");
  line.style.backgroundPosition = "left bottom";
  var line = document.getElementById("menu-line2");
  line.style.backgroundPosition = "left bottom";
  var line = document.getElementById("menu-line3");
  line.style.backgroundPosition = "left bottom";
}

// function from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function submitData() {
  let email = document.getElementById("email");
  let confirmemail = document.getElementById("confirmemail");
  let chosen_date = document.getElementById("date").value;
  date = new Date(String(chosen_date));
  let current_date = new Date();

  if (email.value === confirmemail.value) {
    if (current_date < date) {
      let name = document.getElementById("name").value;
      let project = document.getElementById("project").value;
      let duration = document.getElementById("duration").value;
      let number = document.getElementById("number").value;
      let contact = document.getElementById("contact").value;
      let description = document.getElementById("description").value;

      alert(
        "To: 230412350@aston.ac.uk\nRequesting availability on " +
          chosen_date +
          " for " +
          duration +
          " hours. Description of meeting is " +
          description +
          ". Preferred Contact is " +
          contact +
          ".\nFrom " +
          name +
          " at " +
          email.value +
          " and " +
          number
      );
    } else {
      alert("Date needs to be at least 1 day in advance.");
    }
  } else {
    alert("Emails do not match.");
  }
}
