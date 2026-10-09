"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
const apiResponse_1 = require("./apiResponse");
async function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const user = (0, users_1.getUserById)(id);
            resolve(user);
        }, 1000);
    });
}
async function main() {
    try {
        const user = await fetchUser(3);
        if (!user) {
            const response = (0, apiResponse_1.errorResponse)("User not found");
            console.log(response);
            return;
        }
        if (!(0, apiResponse_1.validateUser)(user)) {
            const response = (0, apiResponse_1.errorResponse)("Invalid user data");
            console.log(response);
            return;
        }
        const response = (0, apiResponse_1.successResponse)(user);
        console.log(response);
        const activeUsers = (0, users_1.getActiveUsers)();
        console.log("Active users:", activeUsers);
    }
    catch (error) {
        const response = (0, apiResponse_1.errorResponse)("Unexpected error occurred");
        console.log(response);
    }
}
main();
