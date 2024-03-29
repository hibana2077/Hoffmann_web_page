/*
 * @Author: hibana2077 hibana2077@gmail.com
 * @Date: 2024-03-02 13:55:58
 * @LastEditors: hibana2077 hibana2077@gmail.com
 * @LastEditTime: 2024-03-02 22:16:56
 * @FilePath: \Hoffmann_web_page\web\src\components\NavbarMenu.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu.tsx";
import { cn } from "../utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 rounded-2xl" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/enclosed-plant-breeding-system">
              Enclosed Plant Breeding System
            </HoveredLink>
            <HoveredLink href="/vertical-aero-farming-system">
              Vertical Aero Farming System
            </HoveredLink>
            <HoveredLink href="/family-micro-farming-system">
              Family Micro Farming System
            </HoveredLink>
            <HoveredLink href="/astro-farming">
              Astro Farming System
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Individual"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Education"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Enterprise"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Astro"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/education">
              Education
            </HoveredLink>
            <HoveredLink href="/individual">
              Individual
            </HoveredLink>
            <HoveredLink href="/enterprise">
              Enterprise
            </HoveredLink>
            <HoveredLink href="/astro">
              Astro
            </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
