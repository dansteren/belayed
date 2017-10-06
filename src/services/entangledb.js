export async function query(query) {
  return new Promise((resolve, reject) => {
    resolve({
      participants: ["Best Friend", "You"],
      messages: [
        {
          sender: "You",
          timeSent: 1507249095704,
          text: "Do you want to go climbing"
        },
        {
          sender: "You",
          timeSent: 1507249105704,
          text: "I can bring the gear"
        },
        {
          sender: "Best Friend",
          timeSent: 1507249115704,
          text: "Yeah, what time were you thinking?"
        },
        {
          sender: "You",
          timeSent: 1507249125704,
          text: "How bout this saturday?"
        },
        {
          sender: "Best Friend",
          timeSent: 1507249135704,
          text: "Sounds good! :)"
        }
      ]
    });
  });
}
