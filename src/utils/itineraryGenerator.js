export function generateItinerary(destination, days) {
  const places = {
    Mysuru: ["Mysore Palace", "Brindavan Gardens", "Chamundi Hills"],
    Chennai: ["Marina Beach", "Fort St. George", "Kapaleeshwarar Temple"],
    Coimbatore: ["Marudamalai Temple", "VOC Park", "Siruvani Waterfalls"]
  };

  const selected = places[destination] || ["City Tour", "Local Market", "Famous Spot"];

  let itinerary = [];
  for (let i = 0; i < days; i++) {
    itinerary.push({
      day: i + 1,
      place: selected[i % selected.length]
    });
  }
  return itinerary;
}
