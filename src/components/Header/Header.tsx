import Link from 'next/link';
import Image from 'next/image';
export function Header() {
  return (
    <header className="bg-white">
      <div className="container mx-auto border-b mt-[63px] ">
        <Link href="/" className="flex items-center gap-3 mb-[65px] ">
          <Image src="/logo.png" alt="ACME Institute" width={322} height={58} />
        </Link>
        <div className="text-sm font-bold mb-[20px]">- BLOG</div>
      </div>

      <div className="container mx-auto flex items-center py-[60px]">
        <h1 className="text-4xl font-bold">Blog edukacyjny</h1>
      </div>
    </header>
  );
}
