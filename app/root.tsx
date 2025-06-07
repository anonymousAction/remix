import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
  NavLink,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

import "./tailwind.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Islamic AI Guidance" },
    { name: "description", content: "Islamic AI-based guidance for people around the world" },
    { name: "theme-color", content: "#22c55e" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Lateef:wght@200;300;400;500;600;700;800&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
  },
];

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-primary-600 text-2xl font-lateef font-bold">Islamic AI Guidance</span>
            </Link>
          </div>
          <nav className="flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary-600 border-b-2 border-primary-500 px-1 pt-1 font-medium" 
                  : "text-gray-500 hover:text-primary-600 px-1 pt-1 font-medium"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/ask" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary-600 border-b-2 border-primary-500 px-1 pt-1 font-medium" 
                  : "text-gray-500 hover:text-primary-600 px-1 pt-1 font-medium"
              }
            >
              Ask
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary-600 border-b-2 border-primary-500 px-1 pt-1 font-medium" 
                  : "text-gray-500 hover:text-primary-600 px-1 pt-1 font-medium"
              }
            >
              About
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Islamic AI Guidance. All rights reserved.
          </p>
          <p className="text-center text-xs text-gray-400 mt-2">
            This AI is in development. For critical religious issues, always refer to trusted human scholars.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen islamic-pattern-bg">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

