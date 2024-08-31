"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Bug } from "lucide-react";
import classNames from "classnames";
import {
  Avatar,
  Container,
  DropdownMenu,
  Flex,
  Skeleton,
} from "@radix-ui/themes";

const Navbar = () => {
  return (
    <nav className="border-b px-5 mb-3 py-4">
      <Container>
        <Flex align={"center"} justify="between">
          <Flex gap="3" align={"center"}>
            <Link href="/">
              <Bug size={21} />
            </Link>
            <NavLinks />
          </Flex>
          <AuthStatus />
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;

const NavLinks = () => {
  const pathname = usePathname();

  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className={classNames("nav-link", {
              "!text-zinc-900": pathname === link.href,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const AuthStatus = () => {
  const { status, data } = useSession();

  if (status === "unauthenticated")
    return <Link href="/api/auth/signin">Sign in</Link>;

  if (status === "loading") return <Skeleton width="3rem" />;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Avatar
          className="cursor-pointer"
          size={"2"}
          src={data!.user!.image!}
          fallback={data!.user!.name![0]}
          alt="Profile image"
          radius="full"
          referrerPolicy="no-referrer"
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>{data!.user?.email}</DropdownMenu.Label>
        <DropdownMenu.Item>
          <Link href="/api/auth/signout">Sign out</Link>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
