"use client";
import { CodeBlock } from "@/components/codeblock"
import { Container } from "@/components/container"
export default function SingleSnippet() {
    const code = `// Define an interface for a User
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

// Create a class to manage users
class UserManager {
    private users: User[] = [];

    async addUser(user: User): Promise<void> {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.users.push(user);
        console.log(\`Added user: \${user.name}\`);
    }

    async getUsers(): Promise<User[]> {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        return this.users;
    }
}

// Example usage
async function main() {
    const userManager = new UserManager();
    
    // Add some users
    await userManager.addUser({
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        isActive: true
    });

    await userManager.addUser({
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        isActive: true
    });

    // Get and display all users
    const users = await userManager.getUsers();
    console.log("All users:", users);
}

// Run the example
main().catch(console.error);`;
    return (
        <div className="min-h-screen flex items-start justify-start">
            <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
                <h1 className="text-primary text-2xl md:text-4xl tracking-tight font-bold">Snippet</h1>
                <p className="text-secondary text-sm md:text-base pt-3">I am a software engineer, I love to code and build things.</p>
                <CodeBlock language="typescript" code={code}/>
            </Container>
        </div>
    )
}