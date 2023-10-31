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
  if (ticket.isFirstRelease === true) {
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