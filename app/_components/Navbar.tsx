'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/smp_pomosda-removebg-preview.png"
import { ThemeToggle } from "@/components/ui/themeToggle";
import { authClient } from "@/lib/auth-client";
import { buttonVariants } from "@/components/ui/button";
import { UserDropdown } from "./UserDropdown";
import clsx from "clsx";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
];

export function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Image src={Logo} alt="Logo" className="size-9" />
          <span className="font-semibold tracking-tight text-lg">
            SMPLMS
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-between">

          {/* Menu */}
          <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "px-3 py-1.5 text-sm rounded-lg transition",
                  pathname === item.href
                    ? "bg-white shadow text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">

            {/* Search (optional premium feel) */}
            <div className="hidden lg:flex">
              <input
                placeholder="Cari..."
                className="border rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Theme */}
            <ThemeToggle />

            {/* Auth */}
            {isPending ? null : session ? (
              <UserDropdown
                email={session.user.email}
                name={session.user.name}
                image={session.user.image || ""}
              />
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/login"
                  className={buttonVariants({ variant: "secondary" })}
                >
                  Login
                </Link>
                <Link
                  href="/login"
                  className={buttonVariants()}
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}