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
    const authToken = 'fdsfasdfjadgoagfs' //generate authToken

    return [200, {authToken, user: testUser}] as const;
}

