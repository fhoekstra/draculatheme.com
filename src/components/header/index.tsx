import "./index.scss";

import * as Icon from "react-feather";

import Link from "next/link";
import navItems from "../../lib/navItems";
import { usePathname } from "next/navigation";

const Header = () => {
  let pathname = usePathname() || "/";

  return (
    <header className="header">
      <div className="container">
        <div className="brand-wrapper">
          <span className="brand">Dracula</span>
          <span className="route">Theme</span>
        </div>
        <div className="search-wrapper">
          <input
            type="search"
            name="global-search"
            id="global-search"
            placeholder="Search for a theme"
          />
          <span className="icon">
            <Icon.Search />
          </span>
        </div>
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
