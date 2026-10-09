import { User } from "./types";

export const users: User[] = [
    {
        id: 1,
        name: "Alvin",
        email: "alvin@example.com",
        role: "admin",
        isActive: true,
    },
    {
        id: 2,
        name: "Sarah",
        email: "sarah@example.com",
        role: "user",
        isActive: true,
    },
    {
        id: 3,
        name: "David",
        email: "david@example.com",
        role: "guest",
        isActive: false,
    },
]


export function getUserById(id: number): User | undefined {
    return users.find((user) => user.id === id);
}

export function getActiveUsers(): User[] {
  return users.filter((user) => user.isActive);
}