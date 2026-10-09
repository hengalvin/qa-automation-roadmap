export interface User {
    id: number;
    name: string;
    email: string;
    role: "admin"|"user"|"guest";
    isActive: boolean;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}