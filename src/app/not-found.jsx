import Image from "next/image";

export default function NotFound() {
  return (
    <main className="w-full min-h-screen">
      <Image
        src="/not-found.png"
        width={1980}
        height={300}
        alt="Page Not Found"
        className="w-full h-auto object-contain"
      />
    </main>
  );
}