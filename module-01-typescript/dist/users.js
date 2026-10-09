"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
exports.getUserById = getUserById;
exports.getActiveUsers = getActiveUsers;
exports.users = [
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
];
function getUserById(id) {
    return exports.users.find((user) => user.id === id);
}
function getActiveUsers() {
    return exports.users.filter((user) => user.isActive);
}
