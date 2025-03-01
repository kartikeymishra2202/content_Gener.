"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Auth from "./Auth";

// const navItems = [
//   { name: "Home", href: "#" },
//   { name: "About", href: "#about" },
//   { name: "Services", href: "#services" },
//   { name: "Team", href: "#team" },
//   { name: "Pricing", href: "#pricing" },
//   { name: "Contact", href: "#contact" },
//   { name: "Auth", href: "#auth" },
// ];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-600">
          Content Generator
        </Link>
        <div className="hidden md:flex space-x-6">
          {/* {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-purple-600 hover:text-red-500"
            >
              {item.name}
            </Link>
          ))} */}
          <Auth />
        </div>
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden">
          {/* {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))} */}
          <Auth />
        </div>
      )}
    </header>
  );
}
