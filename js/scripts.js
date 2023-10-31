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

function calculateTicketPrice(movieName) {
  let basePrice = 3;
  if (movieName.isFirstRelease === true) {
    basePrice += 1;
  }
  if (movieName.buyerAge > 65) {
    basePrice -= 1;
  }
  if (movieName.timeOfDay === true) {
    basePrice += 1;
  }
  return basePrice;
}

// UI Logic