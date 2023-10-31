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