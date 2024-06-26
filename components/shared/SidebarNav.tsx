"use client";

import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const SidebarNav = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.svg"
            width={180}
            height={28}
            alt="Raphael AI"
          />
        </Link>

        <nav className="sidebar-nav">
          <ul className="sidebar-nav_elements">
            {navLinks.slice(0, 6).map((link) => {
              const isActive = link.route === pathname;

              return (
                <li
                  key={link.route}
                  className={`sidebar-nav_element group ${
                    isActive ? "bg-main-gradient text-white" : "text-gray-700"
                  }`}>
                  <Link className="sidebar-link" href={link.route}>
                    <Image
                      src={link.icon}
                      alt="Logo"
                      width={24}
                      height={24}
                      className={`${isActive && "brightness-200"}`}
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive ? "bg-main-gradient text-white" : "text-gray-700"
                    }`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt="Logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <div className="hidden flex-col w-full items-start gap-2 md:flex">
              <Button
                asChild
                className="button bg-main-gradient bg-cover w-full p-16-semibold whitespace-nowrap rounded-md transition-all">
                <Link href="/login">Login</Link>
              </Button>
              <Button
                asChild
                className="button w-full p-16-semibold whitespace-nowrap rounded-md transition-all"
                variant="outline">
                <Link href="/register">Register</Link>
              </Button>
            </div>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default SidebarNav;
