"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Bug } from "lucide-react";
import classNames from "classnames";
import { Box } from "@radix-ui/themes";

const Navbar = () => {
  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Issues", href: "/issues" },
  ];

  const pathname = usePathname();
  const { status, data } = useSession();

  return (
    <nav className="flex space-x-6 h-14 items-center border-b px-4 mb-3">
      <Link href="/">
        <Bug size={21} />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={classNames("hover:text-zinc-800 transition-colors", {
                "text-zinc-900": pathname === link.href,
                "text-zinc-500": pathname !== link.href,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Box>
        {status === "authenticated" && (
          <Link href="/api/auth/signout">Sign out</Link>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">Sign in</Link>
        )}
      </Box>
    </nav>
  );
};

export default Navbar;
