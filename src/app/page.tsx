import { Container } from "@/components/container";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
        <h1 className="text-primary text-2xl md:text-4xl tracking-tight font-bold">Hello There</h1>
        <p className="text-secodary text-sm md:text-base pt-4">I am a software engineer, I love to code and build things.</p>
      </Container>
    </div>
  );
}
