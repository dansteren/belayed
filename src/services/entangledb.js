export const UserQuery = `
  User(id){
    conversations
  }
`;

export const ConversationQuery = `
  Conversation(id){
    participants,
    messages
  }
`;

const mockConversations = [
  {
    id: "001",
    participants: ["Best Friend", "You"],
    messages: [
      {
        sender: "You",
        timeSent: 1507249095704,
        text:
          "Do you want to go climbing? I was thinking this saturday would be a good time. What do you think?"
      },
      { sender: "You", timeSent: 1507250105704, text: "I can bring the gear" },
      {
        sender: "Best Friend",
        timeSent: 1507251758591,
        text: "Yeah, what time were you thinking?"
      },
      {
        sender: "You",
        timeSent: 1507252125704,
        text: "How bout this saturday?"
      },
      {
        sender: "Best Friend",
        timeSent: 1507253135704,
        text: "Sounds good! :)"
      },
      {
        sender: "You",
        timeSent: 1507353135704,
        text: ":)"
      },
      {
        sender: "Best Friend",
        timeSent: 1507453135704,
        text: ":) :)"
      },
      {
        sender: "You",
        timeSent: 1507553135704,
        text: "uh..."
      },
      {
        sender: "Best Friend",
        timeSent: 1507653135704,
        text: ":D"
      },
      {
        sender: "You",
        timeSent: 1507753135704,
        text: "Did I miss something? You're starting to freak me out"
      },
      {
        sender: "Best Friend",
        timeSent: 1507853135704,
        text: "alkjfahsdlfkjahsdfk"
      },
      {
        sender: "You",
        timeSent: 1507953135704,
        text: "Nevermind, the whole things off."
      }
    ]
  },
  {
    id: "002",
    participants: ["Other Guy", "You"],
    messages: [
      {
        sender: "You",
        timeSent: 1507254095704,
        text: "I don't have much to say to you"
      },
      { sender: "You", timeSent: 1507255105704, text: "me neither" },
      { sender: "Other Guy", timeSent: 1507256115704, text: "Ok, bye!" },
      { sender: "You", timeSent: 1507257125704, text: "See ya!" }
    ]
  }
];

export async function query(query) {
  return new Promise((resolve, reject) => {
    switch (query) {
      case UserQuery:
        resolve({
          conversations: mockConversations
        });
        break;
      case ConversationQuery:
        resolve(mockConversations[0]);
        break;
      default:
        break;
    }
  });
}

export async function getConversation(id) {
  return mockConversations.filter(c => c.id === id)[0];
}
