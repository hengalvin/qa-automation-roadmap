import { getUserById, getActiveUsers } from "./users";
import { errorResponse, successResponse, validateUser } from "./apiResponse";
import { User } from "./types";

async function fetchUser(id: number): Promise<User | undefined>{
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = getUserById(id);
      resolve(user);
    }, 1000);
  });
}

async function main() {
  try {
    const user = await fetchUser(3);

    if (!user) {
      const response = errorResponse("User not found");
      console.log(response);
      return;
    }

    if (!validateUser(user)) {
      const response = errorResponse("Invalid user data");
      console.log(response);
      return;
    }

    const response = successResponse(user);
    console.log(response);

    const activeUsers = getActiveUsers();
    console.log("Active users:", activeUsers);
  } catch (error) {
    const response = errorResponse("Unexpected error occurred");
    console.log(response);
  }
}

main();