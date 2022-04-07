import React from "react";

interface ListItemIconProps {
  src: string;
}

const ListItemIcon: React.FC<ListItemIconProps> = ({ src }) => (
  <img className="mr-4" src={src} alt="icon" />
);

export default ListItemIcon;
