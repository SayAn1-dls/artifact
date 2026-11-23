/* "Manage Batches → New Batch" answers. A batch is one fixed departure date.
   None of the PDFs give seat counts, so Total Seats is always yours to set. */
window.BATCHES = {
  "thailand":        { verdict: "No batch needed", why: "Custom / private trip with no fixed dates in the PDF. Each booking picks its own dates.", items: [] },
  "sri-lanka":       { verdict: "No batch needed", why: "Private family journey. The PDF says the price is “based on your dates”, so there is no fixed departure.", items: [] },
  "japan-fuji-osaka":{ verdict: "No batch needed", why: "A private quote for one family. The PDF gives day numbers but no calendar dates.", items: [] },
  "bali":            { verdict: "No batch needed", why: "Customisable private trip with no dates in the PDF.", items: [] },
  "japan-group":     { verdict: "Dates not in PDF", why: "This is a group trip, so it should have batches, but the PDF gives no dates or seat count. Ask the team for the departure dates, then create one batch per departure.", items: [] },
  "vietnam-new-year":{ verdict: "1 batch", why: "The PDF dates each day: Day 3 is 24 Dec and Day 11 is 1 Jan, so Day 1 is 22 Dec.", items: [
    { start: "22/12/2026", end: "01/01/2027", seats: null, filled: "0", urgency: "", status: "upcoming",
      urgencyHint: "Leave blank to show the automatic “Only N seats left” badge. The PDF has no urgency line; its Festive Offer (book by 22 Nov) has expired." }
  ] },
  "vietnam-in-depth":{ verdict: "1 batch (already past)", why: "The PDF gives 5 – 13 Nov 2026. That departure has passed, so only add it if you want it on record; it won't take bookings.", items: [
    { start: "05/11/2026", end: "13/11/2026", seats: null, filled: "0", urgency: "", status: "completed",
      urgencyHint: "Leave blank.", statusHint: "Pick “completed” if the dropdown has it. If it only has “upcoming”, skip this batch rather than list a past date as upcoming." }
  ] }
};
