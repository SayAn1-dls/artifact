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
    note: "One optional extension in the PDF: “Want to Add More?” It is not part of the core package and is quoted separately on request.",
    items: [
      { name: "Dambulla Cave Temple (UNESCO)", days: null, price: null, group: "",
        desc: "An optional heritage extension for travellers who want to go deeper into Sri Lanka's Cultural Triangle. A cluster of cave shrines set into a great rock, their walls and ceilings covered in painted murals and lined with Buddha statues. Quiet, cool, and unlike anywhere else on this route. Dambulla sits north of Kandy, so we'll suggest the best way to work it in." }
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
  },
  "georgia": {
    note: "From the file's “Offbeat Extension — Wild Georgia” (3 extra days) and the New Year's Eve upgrade on Day 7. The luxury add-ons (ski day, helicopter, supra, photoshoot, spa) are activities, not extra days, so they are in Terms instead.",
    items: [
      { name: "Wild Georgia: Kakheti, Sighnaghi & Davit Gareja", days: "3", price: null, group: "",
        priceHint: "The file only says “Add ~$150–200 for the 3-day extension” (USD, per couple). Convert to ₹ or leave empty.",
        desc: "Extra Day 8 — Glamping in the Kakheti countryside: wine-estate glamping (Schuchmann Wines Chateau or Twins Wine Cellar), a private Qvevri cellar tasting of 6–8 wines, and an evening bonfire. Extra Day 9 — Alazani Valley: villages of stone tower houses, Alaverdi Cathedral, lunch at a local qvevri wine producer's home, and a night in Sighnaghi, the hilltop “City of Love”. Extra Day 10 — Davit Gareja: the 6th-century cave monastery on the Azerbaijan border, a cliff-trail walk and a hilltop picnic, then back to Tbilisi for one final evening." },
      { name: "New Year's Eve in Tbilisi (extra night)", days: "1", price: null, group: "",
        priceHint: "No price in the file. Ask the team, or leave empty.",
        desc: "Extend one night: Tbilisi celebrates New Year's Eve with extraordinary energy. The whole old city becomes a firework-lit street party." }
    ]
  }
};
