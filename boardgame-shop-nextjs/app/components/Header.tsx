import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <section className="flex justify-content p-5 space-x-4">
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/games">About</Link>
      </div>
      <div>
        <Link href="/about">About</Link>
      </div>
      <div>
        <Link href="/shop">Shop</Link>
      </div>
      <div>
        <Link href="/blog">Blog</Link>
      </div>
    </section>
  );
};

export default Header;