"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Bug } from "lucide-react";
import classNames from "classnames";
import { Box, Container, Flex } from "@radix-ui/themes";

const Navbar = () => {
  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Issues", href: "/issues" },
  ];

  const pathname = usePathname();
  const { status, data } = useSession();

  return (
    <nav className="border-b px-5 mb-3 py-5">
      <Container>
        <Flex justify="between">
          <Box>
            <Flex gap="3" align={"center"}>
              <Link href="/">
                <Bug size={21} />
              </Link>
              <ul className="flex space-x-6">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      className={classNames(
                        "hover:text-zinc-800 transition-colors",
                        {
                          "text-zinc-900": pathname === link.href,
                          "text-zinc-500": pathname !== link.href,
                        }
                      )}
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Flex>
          </Box>
          <Box>
            {status === "authenticated" && (
              <Link href="/api/auth/signout">Sign out</Link>
            )}
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">Sign in</Link>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
