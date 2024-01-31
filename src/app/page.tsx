import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="text-4xl font-bold mb-4" >Welcome to our home page!</div>
        <div className="text-xl mb-8" >Let's get started with our app.</div>
        <div className="flex items-center">
          <a href="/login" className="mb-4 mr-4">
            Register
          </a>
          <a href="/login" className="mb-4 mr-4">
            Login
          </a>
          <a href="/dashboard" className="mb-4">
            Get Started
          </a>
        </div>
      </div>
    </main>
  );
}
