interface  User {
    id: number,
    email: string;
    role: string;
}

const testUser: User = {
    id: 1,
    email: 'test@gmail.com',
    role: 'admin'
}

export async function getUser() {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const authToken = generateAuthToken();

    return [200, {authToken, user: testUser}] as const;
}

export async  function login() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const authToken = generateAuthToken();
    return [200, {authToken, user: testUser}] as const;
}

function generateAuthToken() {
    return Math.random().toString(36).substring(2);
}