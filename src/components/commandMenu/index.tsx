import "./index.scss";

import * as Icon from "react-feather";

import { useEffect, useState } from "react";

import { Command } from "cmdk";

const CommandMenu = () => {
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
        <Command.Input />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>

          <Command.Group heading="Letters">
            <Command.Item>a</Command.Item>
            <Command.Item>b</Command.Item>
            <Command.Separator />
            <Command.Item>c</Command.Item>
          </Command.Group>

          <Command.Item>Apple</Command.Item>
        </Command.List>
      </Command.Dialog>
    </>
  );
};

export default CommandMenu;
