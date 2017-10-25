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
        timeSent: 1507646812000,
        text:
          "Do you want to go climbing? I was thinking this saturday would be a good time. What do you think?"
      },
      { sender: "You", timeSent: 1508501940000, text: "I can bring the gear" },
      {
        sender: "Best Friend",
        timeSent: 1508502900000,
        text: "Yeah, what time were you thinking?"
      },
      {
        sender: "You",
        timeSent: 1508503320000,
        text: "How bout this saturday?"
      },
      {
        sender: "Best Friend",
        timeSent: 1508503440000,
        text: "Sounds good! :)"
      },
      {
        sender: "You",
        timeSent: 1508503500000,
        text: ":)"
      },
      {
        sender: "Best Friend",
        timeSent: 1508504460000,
        text: ":) :)"
      },
      {
        sender: "You",
        timeSent: 1508505840000,
        text: "uh..."
      },
      {
        sender: "Best Friend",
        timeSent: 1508507220000,
        text: ":D"
      },
      {
        sender: "You",
        timeSent: 1508508780000,
        text: "Did I miss something? You're starting to freak me out"
      },
      {
        sender: "Best Friend",
        timeSent: 1508508900000,
        text: "alkjfahsdlfkjahsdfk"
      },
      {
        sender: "You",
        timeSent: 1508899987921,
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
        timeSent: 1508510700000,
        text: "I don't have much to say to you"
      },
      { sender: "Other Guy", timeSent: 1508510760000, text: "me neither" },
      { sender: "You", timeSent: 1508510784000, text: "Ok, bye!" },
      { sender: "Other Guy", timeSent: 1508510812000, text: "See ya!" }
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

export async function getUser(userId) {
  return {
    id: userId,
    createdAt: 123456789123,
    updatedAt: 123456789123,
    firstName: "Tanner",
    lastName: "Ellsworth",
    indoorGrade: "ELEVEN_B",
    outdoorGrade: "NINE",
    hasRope: false,
    hasBelayDevice: false,
    hasQuickdraws: false,
    hasRunners: false,
    hasChalk: false,
    hasHarness: true,
    hasShoes: true,
    hasHelmet: false,
    preferredArea: {
      name: "Rock Canyon"
    },
    preferredGym: {
      name: "The Quarry"
    }
  };
}
