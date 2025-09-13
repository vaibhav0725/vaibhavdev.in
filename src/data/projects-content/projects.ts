interface ProjectInter {
    image: string;
    title: string;
    description: string;
    tags: { name: string; icon: string }[];
    link: string;
}
export const icons = {
    nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"
}

export const projects: ProjectInter[] = [
    {
        image: '/quickbuy.png',
        title: "QuickBuy",
        description: "A basic template for an e-commerce website.",
        tags: [
            { name: "React", icon: icons.react },
            { name: "Next.js", icon: icons.nextjs },
            { name: "Tailwind", icon: icons.tailwind }
        ],
        link: "https://ecom-quickzy.vercel.app"
    },
    {
        image: '/mindvault.png',
        title: "MindVault",
        description: "AI Notes Manager And Helper",
        tags: [
            { name: "React", icon: "react" },
            { name: "Next.js", icon: "nextjs2" },
            { name: "Tailwind", icon: "tailwindcss" }
        ],
        link: "https://mind-vault-three.vercel.app"
    },
    {
        image: '/noteshala.png',
        title: "NoteShala",
        description: "Initative for collection of study material for students and helper during exams",
        tags: [
            { name: "React", icon: "react" },
            { name: "Next.js", icon: "nextjs2" },
            { name: "Tailwind", icon: "tailwindcss" }
        ],
        link: "https://www.notesshaala.live/"
    },
    {
        image: '/handpose.png',
        title: "Hand Pose Recognizer",
        description: "Cool app that recognizes your hands and fingers",
        tags: [
            { name: "React", icon: "react" },
            { name: "Next.js", icon: "nextjs2" },
            { name: "Tailwind", icon: "tailwindcss" }
        ],
        link: "https://hand-pose-recog.netlify.app/"
    },
    {
        image: '/tictactoe.png',
        title: "Tic Tac Toe",
        description: "A simple and beautiful Tic-Tac-Toe game",
        tags: [
            { name: "React", icon: "react" },
            { name: "Next.js", icon: "nextjs2" },
            { name: "Tailwind", icon: "tailwindcss" }
        ],
        link: "https://toe-tic-tac-game.netlify.app/"
    }
]