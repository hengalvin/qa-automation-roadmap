import { ApiResponse, User } from "./types";

export function successResponse<T>(data: T): ApiResponse<T> {
    return {
        success: true,
        data: data
    };
}

export function errorResponse(message: string): ApiResponse<null> {
  return {
    success: false,
    data: null,
    error: message,
  };
}

export function validateUser(user: User): boolean {
    const validRoles = ["admin", "user", "guest"];

    return (
        typeof user.id === "number" &&
        user.name.trim() !== "" &&
        user.email.includes("@") &&
        validRoles.includes(user.role) &&
        typeof user.isActive === "boolean"
    );
}