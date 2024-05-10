var buttonColours = ["red", "blue", "green", "yellow"]

//For Different Game Level
var i = 1

var gamePattern = []

var userClickedPattern = []

function nextSequence1() {
  // generate a new random number between 0 and 3
  var randomNumber = Math.floor(Math.random() * 4)

  //use the randomNumber to select a random colour from the buttonColours array.
  var randomChosenColour = buttonColours[randomNumber]

  //Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
  gamePattern.push(randomChosenColour)

  nextSequence(randomChosenColour)
}

// Handler function for button clicks
$(".btn").click(function () {
  // Get the id of the clicked button
  var userChosenColour = $(this).attr("id")

  userClickedPattern.push(userChosenColour)
  nextSequence(userChosenColour)

  if (userClickedPattern.length == gamePattern.length) {
    check()
  }
})

function check() {
  // Convert arrays to strings and compare them
  if (JSON.stringify(gamePattern) === JSON.stringify(userClickedPattern)) {
    i++
    // Call yourFunction after a delay of 600 milliseconds
    setTimeout(function () {
      $("h1").text("Level" + "  " + i)
    }, 600)

    userClickedPattern = []
    // Call yourFunction after a delay of 1000 milliseconds (1 second)
    setTimeout(function () {
      nextSequence1()
    }, 1000)
  } else {
    $("h1").text("Game Over,Press Any Key to Restart")
    $("#wrong_sound")[0].play()
    gamePattern = []
    userClickedPattern = []
    i = 1
  }
}

function nextSequence(color) {
  //to hold id of button
  var button = $("#" + color)
  switch (color) {
    case "red":
      $("#red_sound")[0].play()
      // decrease the opacity of the button to 0.5 over a duration of 100 milliseconds.
      button.animate({ opacity: 0.2 }, 200, function () {
        // Animation complete, increase opacity back to original
        button.animate({ opacity: 1 }, 200)
      })
      break
    case "blue":
      $("#blue_sound")[0].play()
      button.animate({ opacity: 0.2 }, 200, function () {
        button.animate({ opacity: 1 }, 200)
      })
      break
    case "green":
      $("#green_sound")[0].play()
      button.animate({ opacity: 0.2 }, 200, function () {
        button.animate({ opacity: 1 }, 200)
      })
      break
    case "yellow":
      $("#yellow_sound")[0].play()
      button.animate({ opacity: 0.2 }, 200, function () {
        button.animate({ opacity: 1 }, 200)
      })
      break
  }
}

$(document).keydown(function (event) {
  nextSequence1()
  $("h1").text("Level 1")
})
