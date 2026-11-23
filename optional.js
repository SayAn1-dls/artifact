/* Optional Days ("Add Option") answers, shaped like the dashboard form:
   option name · extra days (number) · additional price ₹ · what the extra days include · OR choice group · option images.
   price null = the PDF says "priced on request", so there is no number to enter. */
window.OPTIONAL = {
  "thailand": { note: "No optional extensions in the PDF. Leave Optional Days empty.", items: [] },
  "japan-fuji-osaka": { note: "No optional extensions in the PDF. Its add-ons (Kaiyukan, LEGOLAND, luggage forwarding) are tickets, not extra days. Leave Optional Days empty.", items: [] },

  "vietnam-new-year": {
    note: "All from the PDF’s “Optional Add-ons”, which are priced on request. Don’t add the All-Inclusive (with flights) package here: it is a flights upgrade, not extra days.",
    items: [
      { name: "Pre-Trip: 2D/1N Sapa", days: "2", price: null, group: "Pre-trip north add-on",
        desc: "Arrive early. Mountain air, rice terraces & hill-tribe villages." },
      { name: "Pre-Trip: 3D/2N Ha Giang Loop", days: "3", price: null, group: "Pre-trip north add-on",
        desc: "Arrive early. Mountain passes by motorbike." },
      { name: "Pre-Trip: 2D/1N Cao Bang", days: "2", price: null, group: "Pre-trip north add-on",
        desc: "Arrive early. Waterfalls and quiet northern valleys." },
      { name: "Pre-Trip: 6D/5N Ultimate North Tour", days: "6", price: null, group: "Pre-trip north add-on",
        desc: "Arrive early. All three (Sapa, Ha Giang Loop, Cao Bang), Hanoi to Hanoi." },
      { name: "Post-Trip: Phu Quoc Island", days: "3", price: null, group: "",
        desc: "3–4 days on Phu Quoc Island — white sand & island resorts." }
    ]
  },

  "sri-lanka": {
    note: "One add-on in the PDF, quoted on request.",
    items: [
      { name: "Dambulla Cave Temple (UNESCO)", days: null, price: null, group: "",
        desc: "Extension north of Kandy, to the UNESCO-listed Dambulla Cave Temple." }
    ]
  },

  "vietnam-in-depth": {
    note: "One extension in the PDF, priced on request based on your flight out of Saigon.",
    items: [
      { name: "+1 Night · Ho Chi Minh City Extension", days: "1", price: null, group: "",
        desc: "Not ready to leave? Stay one more night. Cu Chi Tunnels tour: crawl through the underground wartime tunnel network. Saigon River dinner cruise: optional. Overnight in Ho Chi Minh City · next-day transfer to the airport." }
    ]
  },

  "bali": {
    note: "From the PDF’s “Add-ons (optional)”. The PDF gives no prices. “Watersports at Nusa Dua” is an activity, not extra days, so it is left out.",
    items: [
      { name: "Add an extra day in Bali", days: "1", price: null, group: "",
        desc: "Take your Bali trip to the next level with one more day in Bali." },
      { name: "Labuan Bajo – 3D/2N island adventure", days: "3", price: null, group: "Post-trip island extension",
        desc: "A 3D/2N island adventure in Labuan Bajo." },
      { name: "Jakarta – 3D/2N city escape", days: "3", price: null, group: "Post-trip island extension",
        desc: "A 3D/2N city escape in Jakarta." },
      { name: "Raja Ampat – 3D/2N luxury island stay", days: "3", price: null, group: "Post-trip island extension",
        desc: "A 3D/2N luxury island stay in Raja Ampat." }
    ]
  },

  "japan-group": {
    note: "One add-on in the PDF. It uses the open Day 5, so it adds no extra days; enter 0 if the field allows it, otherwise skip this option and mention it in the FAQ only.",
    items: [
      { name: "Day 5 · Hiroshima detour", days: "0", price: null, group: "",
        desc: "Shinkansen Kyoto → Hiroshima (~2 hours 30 mins via Nozomi Shinkansen). Visit Hiroshima Peace Memorial Park & Atomic Bomb Dome, lunch & exploration, ferry to Miyajima Island and Itsukushima Shrine’s Floating Torii Gate, then the Shinkansen back to Kyoto. Optional tour — not included in cost." }
    ]
  }
};
