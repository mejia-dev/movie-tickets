// Define global variables

let cinemaTicketBox = new TicketBox;
const firstReleaseMovies = ["Movie Name A"]


// Business Logic for Ticket

function Ticket(movieName, timeOfDay, buyerAge) {
  this.movieName = movieName;
  this.timeOfDay = timeOfDay;
  this.buyerAge = buyerAge;
}


// Business Logic for TicketBox

function TicketBox() {
  this.tickets = {};
  this.currentId = 0;
}

TicketBox.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

TicketBox.prototype.addTicket = function(ticket) {
  ticket.id = this.assignId();
  this.tickets[ticket.id] = ticket;
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
    basePrice -= 1;
  }
  return basePrice;
}

// UI Logic

function formSubmissionHandler(event) {
  event.preventDefault();
  const selectedShowtime = document.querySelector('input[name="showtime"]:checked').value;
  const userAge = parseInt(document.getElementById("userAge").value);
  const movieName = document.getElementById("movieName").value;
  let newTicket = new Ticket(movieName, selectedShowtime, userAge);
  newTicket.price = calculateTicketPrice(newTicket); 
  console.log("New Ticket Price: " + newTicket.price)
  console.log("New Ticket: " + newTicket)
  cinemaTicketBox.addTicket(newTicket);
  console.log("Cinema Ticket Box: " + cinemaTicketBox)
};


window.addEventListener("load", function() {
  this.document.getElementById("ticketSelector").addEventListener("submit",formSubmissionHandler);
});