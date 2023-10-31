Describe: Ticket(movieName, isFirstRelease, timeOfDay, buyerAge)

Test: "It will construct a new Ticket object"
Code: Ticket("Movie",false,13:30,12)
Expected Output: Ticket{ movieName: "Movie", isFirstRelease: false, timeOfDay: 13:30, buyerAge: 12 }


Describe: TicketBox()

Test: "It will construct a new TicketBox object"
Code: TicketBox()
Expected Output: TicketBox{}


Describe: TicketBox.prototype.addTicket(ticket)

Test: "It will add a Ticket object to a TicketBox object"
Code: TicketBox.addTicket(Ticket1)
Expected Output: TicketBox{ tickets: Ticket1; }


Describe: calculateTicketPrice(ticket)

Test: "It will evaluate the base price of a ticket to be three dollars"
Code: calculateTicketPrice(averageTicket);
Expected Output: 3

Test: "It will calculate the price of the ticket based on the first release status. If isFirstRelease is true, add 1 dollar to the price."
Code: calculateTicketPrice(firstReleaseMovie)
Expected Output: 4

Test: "It will calculate the price of the ticket based on buyer age. If buyer is over 65, reduce the price by 1 dollar."
Code: calculateTicketPrice(movieForSeniorCitizen)
Expected Output: 2

Test: "It will calculate the price of the ticket based on time of day. The price of the ticket is reduced by 1 dollar if the time of day is before 5pm"
Code: calculateTicketPrice(earlyDayMovie)
Expected Output: 2


Base ticket price: 3
-1 if buyerAge is over 65
+1 if movie is first release
-1 if before 17:00
