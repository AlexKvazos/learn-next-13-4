import NextLink from "next/link";

export type NavigationLink = {
  label: string;
  href: string;
};

const navigationLinks: Array<NavigationLink> = [
  { label: "Home", href: "/" },
  { label: "Users", href: "/users" },
];

export default function Navigation() {
  return (
    <div>
      <nav className="list-none flex py-4 space-x-4">
        {navigationLinks.map((link, index) => (
          <li key={index}>
            <NextLink
              className="bg-gray-100 py-2 px-4 rounded-md"
              href={link.href}
              prefetch={false}
            >
              {link.label}
            </NextLink>
          </li>
        ))}
      </nav>
    </div>
  );
}
