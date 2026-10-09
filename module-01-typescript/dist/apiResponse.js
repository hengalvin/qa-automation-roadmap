"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successResponse = successResponse;
exports.errorResponse = errorResponse;
exports.validateUser = validateUser;
function successResponse(data) {
    return {
        success: true,
        data: data
    };
}
function errorResponse(message) {
    return {
        success: false,
        data: null,
        error: message,
    };
}
function validateUser(user) {
    const validRoles = ["admin", "user", "guest"];
    return (typeof user.id === "number" &&
        user.name.trim() !== "" &&
        user.email.includes("@") &&
        validRoles.includes(user.role) &&
        typeof user.isActive === "boolean");
}
