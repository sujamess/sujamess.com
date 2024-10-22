import Link from "next/link";
import WebRing from "./WebRing";
// import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/core/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/core/components/ui/DropdownMenu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  return (
    <div className="px-4 md:px-0 self-center grid grid-cols-2 lg:grid-cols-3 w-full h-16 items-center">
      {/* Logo */}
      <div className="flex gap-x-2">
        <div className="lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <HamburgerMenuIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/blogs">Blogs</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/gists">Gists</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/projects">Projects</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>sujamess</div>
      </div>
      {/* Menus */}
      <div className="hidden lg:flex lg:space-x-4">
        <Button variant="ghost" asChild>
          <Link href="/">Home</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/blogs">Blogs</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/gists">Gists</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/projects">Projects</Link>
        </Button>
      </div>
      {/* End */}
      <div className="flex space-x-4 justify-end items-center">
        {/* <ThemeToggle /> */}
        <WebRing />
      </div>
    </div>
  );
}
