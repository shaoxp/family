import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import AssignmentIcon from "@mui/icons-material/Assignment";

import { BlogConfig } from "../Config/BlogsConfig";
import { BlogTagKeys, BlogTags } from "../Config/AppUIConfigs";

export const mainListItems = () => {
  const blogTags = new Set(BlogConfig.blogs.flatMap((blog) => blog.tags));
  const items = [...blogTags].map((tag) => {
    const tagConfig = BlogTags[tag as BlogTagKeys];

    return (
      <ListItemButton>
        <ListItemIcon>{tagConfig.icon}</ListItemIcon>
        <ListItemText primary={tagConfig.name} />
      </ListItemButton>
    );
  });

  return <React.Fragment>{items}</React.Fragment>;
};

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
