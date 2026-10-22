import { getActiveUsers } from "./users"

export interface User {
    id: number,
    name: string,
    email: string,
    role: Role
    isActive: boolean
}

export type Role = "admin" | "user" | "guest"

const sampleUser: User = {
    id: 1,
    name: 'Anas',
    email: 'anas@gmail.com',
    role: 'admin',
    isActive: true
}

const user2: User = {
    id: 2,
    name: 'alvin',
    email: 'alvin@gmail.com',
    role: 'user',
    isActive: true
}

const user3: User = {
    id: 3,
    name: 'lisen',
    email: 'lisen@gmail.com',
    role: 'guest',
    isActive: false
}

const users: User[] = [sampleUser, user2, user3]

function findUserById(id: number): User | undefined {
    return users.find((user) => user.id === id)
}

function printUserName(user: User| undefined): void {
    if(!user){
        console.log('User not found')
        return
    }
    console.log(user.name)

}

function getActiveUsers1(): User[] {
    return users.filter((user) => user.isActive)
}

export interface SuccessResponse<T> {
    success: true
    data: T
}

export interface ErrorResponse {
    success: false, 
    data: null,
    error: string
}

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse

function successResponse<T>(data: T): ApiResponse<T> {
    return {
        success: true,
        data
    }
}

function errorResponse(error: string): ErrorResponse {
    return {
        success: false,
        data: null,
        error
    }
}

function getUserResponse(id: number): ApiResponse<User> {
    const user = findUserById(id)
    if(!user){
        return errorResponse('User not found')
    }
    return successResponse(user)
}

function printApiResponse(response: ApiResponse<User>): void {
    console.log(response.success ? response.data.name : response.error)
}

printApiResponse(getUserResponse(2))
printApiResponse(getUserResponse(999))

type TestStatus = 'passed' | 'failed' | 'skipped'

interface TestResult {
    id: number, 
    testName: string, 
    status: TestStatus,
    durationMs: number,
    errorMessage?: string
}

const passedTest: TestResult = {
    id: 1, 
    testName: 'test no 1', 
    status: 'passed',
    durationMs: 120,
}

const failedTest: TestResult = {
    id: 2, 
    testName: 'test no 2', 
    status: 'failed',
    durationMs: 321,
    errorMessage: 'test has failed'
}

const testResults: TestResult[] = [passedTest, failedTest]

function getFailedTests(results: TestResult[]): TestResult[] {
    return results.filter((result) => result.status === 'failed')
}

const failedTests = getFailedTests(testResults)

console.log(failedTests)