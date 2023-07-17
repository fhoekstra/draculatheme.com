import "./index.scss";

import * as Icon from "react-feather";

import { useEffect, useState } from "react";

import { Command } from "cmdk";
import { useRouter } from "next/navigation";

const CommandMenu = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div className="search-wrapper">
        <input
          type="search"
          name="global-search"
          id="global-search"
          placeholder="Search for a theme"
          onClick={() => setOpen(true)}
        />
        <span className="icon search">
          <Icon.Search />
        </span>
        <span className="icon cmdk">
          <Icon.Command />
          <span>K</span>
        </span>
      </div>
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
      >
        <div className="cmd-input-wrapper">
          <Command.Input placeholder="Search for a theme" />
          <span className="icon search">
            <Icon.Search />
          </span>
        </div>
        <Command.List>
          <Command.Empty>
            <span className="icon inline">
              <Icon.Paperclip />
            </span>
            <span>No results found.</span>
          </Command.Empty>
          <Command.Group heading="Pages">
            <Command.Item
              onSelect={() => {
                router.push("/");
                setOpen((open) => !open);
              }}
            >
              <span className="icon inline">
                <Icon.Coffee />
              </span>
              <span>Browse themes</span>
            </Command.Item>
            <Command.Item
              onSelect={(value) => {
                router.push(`/${value}`);
                setOpen((open) => !open);
              }}
            >
              <span className="icon inline">
                <Icon.Info />
              </span>
              <span>Why Dracula?</span>
            </Command.Item>
            <Command.Item
              onSelect={(value) => {
                router.push(`/${value}`);
                setOpen((open) => !open);
              }}
            >
              <span className="icon inline">
                <Icon.BookOpen />
              </span>
              <span>About</span>
            </Command.Item>
            <Command.Item
              onSelect={(value) => {
                router.push(`/${value}`);
                setOpen((open) => !open);
              }}
            >
              <span className="icon inline">
                <Icon.Rss />
              </span>
              <span>Blog</span>
            </Command.Item>
            <Command.Item
              onSelect={(value) => {
                router.push(`/${value}`);
                setOpen((open) => !open);
              }}
            >
              <span className="icon inline">
                <Icon.Star />
              </span>
              <span>Contribute</span>
            </Command.Item>
            <Command.Item
              onSelect={(value) => {
                router.push(`/${value}`);
                setOpen((open) => !open);
              }}
            >
              <span className="icon inline">
                <Icon.ShoppingCart />
              </span>
              <span>Shop</span>
            </Command.Item>
          </Command.Group>
          <Command.Group heading="Dracula PRO">
            <Command.Item
              onSelect={(value) => {
                router.push(`/${value}`);
                setOpen((open) => !open);
              }}
            >
              <span className="icon inline">
                <Icon.ShoppingBag />
              </span>
              <span>Get PRO</span>
            </Command.Item>
            <Command.Item
              onSelect={(value) => {
                router.push(`/${value}`);
                setOpen((open) => !open);
              }}
            >
              <span className="icon inline">
                <Icon.Tag />
              </span>
              <span>Changelog</span>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  );
};

export default CommandMenu;
