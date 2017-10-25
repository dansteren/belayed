import { people } from "./people";
import { weekdays } from "./weekdays";
import { conversations } from "./conversations";

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

export async function query(query) {
  return new Promise((resolve, reject) => {
    switch (query) {
      case UserQuery:
        resolve({ conversations });
        break;
      case ConversationQuery:
        resolve(conversations[0]);
        break;
      default:
        break;
    }
  });
}

export async function getConversation(id) {
  return new Promise((resolve, reject) => {
    resolve(conversations.filter(c => c.id === id)[0]);
  });
}

export async function getUser(userId) {
  return new Promise((resolve, reject) => {
    resolve(people.filter(person => person.id === userId)[0]);
  });
}

export async function getWeekdays() {
  return new Promise((resolve, reject) => {
    resolve(weekdays);
  });
}

export async function getCurrentUserId() {
  return new Promise((resolve, reject) => {
    resolve("89568a74-671d-41b9-83bb-578025ee9d57");
  });
}
