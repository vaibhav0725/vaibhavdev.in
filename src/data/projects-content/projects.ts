interface ProjectInter {
    image:string;
    title: string;
    description: string;
    tags: { name: string; icon: string }[];
}

export const projects:ProjectInter[] = [
    {
        image:'/quickbuy2.png',
        title: "QuickBuy",
        description: "A basic template for an e-commerce website.",
        tags: [
            { name: "React", icon: "react" },
            { name: "Next.js", icon: "nextjs2" },
            { name: "Tailwind", icon: "tailwindcss" }
        ]
    }
]