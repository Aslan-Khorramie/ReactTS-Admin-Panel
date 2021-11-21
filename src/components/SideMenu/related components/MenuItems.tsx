import React, { memo } from "react";
import { ListItem, ListItemIcon } from "@material-ui/core";
import { useHistory } from "react-router";

interface MenuItemsProps {
  isOpen: boolean;
  setOpen(open: boolean): void;
}
function MenuItems(props: MenuItemsProps) {
  const { isOpen = false, setOpen } = props;
  const route = useHistory();
  return (
    <>
      <ListItem
        button
        onClick={() => {
          if (isOpen) {
            route.push("/dashboard");
          } else {
            setOpen(true);
          }
        }}
      >
        <ListItemIcon>icon</ListItemIcon>
        dashboard
      </ListItem>
      <ListItem button onClick={() => route.push("/item2")}>
        <ListItemIcon>icon</ListItemIcon>
        item2
      </ListItem>
    </>
  );
}

export default memo(MenuItems);
