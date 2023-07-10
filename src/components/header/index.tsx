import "./index.scss";

import * as Icon from "react-feather";

import CommandMenu from "../commandMenu";
import Link from "next/link";
import navItems from "../../lib/navItems";
import { usePathname } from "next/navigation";

const Header = () => {
  let pathname = usePathname() || "/";

  return (
    <header className="header">
      <div className="container">
        <Link href={"/"}>
          <div className="brand-wrapper">
            <span className="brand">Dracula</span>
            <span className="route">Theme</span>
          </div>
        </Link>
        <CommandMenu />
        <nav className="nav">
          <ul>
            {Object.entries(navItems).map(([path, { title }], index) => {
              const isActive = path === pathname;
              return (
                <li key={index}>
                  <Link
                    key={path}
                    href={path}
                    className={`link ${path.replace("/", "")} ${
                      isActive ? "is-active" : ""
                    }`}
                  >
                    <span className="title">{title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
