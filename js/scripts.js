// Define global variables

let cinemaTicketBox = new TicketBox;
const firstReleaseMovies = ["Movie Name A"]


// Business Logic for Ticket

function Ticket(movieName, isFirstRelease, timeOfDay, buyerAge) {
  this.movieName = movieName;
  this.isFirstRelease = isFirstRelease;
  this.timeOfDay = timeOfDay;
  this.buyerAge = buyerAge;
}


// Business Logic for TicketBox

function TicketBox() {
  this.tickets = {};
}

TicketBox.prototype.addTicket = function(ticket) {
  this.tickets += ticket;
}


// Business Logic

function calculateTicketPrice(ticket) {
  let basePrice = 3;
  if (firstReleaseMovies.includes(ticket.movieName)) {
    basePrice += 1;
  }
  if (ticket.buyerAge > 65) {
    basePrice -= 1;
  }
  if (ticket.timeOfDay < "17:00") {
    basePrice += 1;
  }
  return basePrice;
}

// UI Logic

function formSubmissionHandler(event) {
  event.preventDefault();
  const selectedShowtime = document.querySelector('input[name="showtime"]:checked').value;
  const userAge = parseInt(document.getElementById("userAge").value);
  const movieName = document.getElementById("movieName").value;
};


window.addEventListener("load", function() {
  this.document.getElementById("ticketSelector").addEventListener("submit",formSubmissionHandler);
});