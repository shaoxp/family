import * as React from "react";
import { useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Diversity1Icon from "@mui/icons-material/Diversity1";

import { BlogConfig } from "../Config/BlogsConfig";
import { BlogTagKeys, BlogTags } from "../Config/AppUIConfigs";
import { List } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export const MainListItems = () => {
  const navigate = useNavigate();
  const blogTags = new Set(BlogConfig.blogs.flatMap((blog) => blog.tags));
  const items = [...blogTags].map((tag) => {
    const tagConfig = BlogTags[tag as BlogTagKeys];

    return (
      <ListItemButton onClick={() => navigate(`/mem/${tag}`)}>
        <ListItemIcon>{tagConfig.icon}</ListItemIcon>
        <ListItemText primary={tagConfig.name} />
      </ListItemButton>
    );
  });

  return (
    <React.Fragment>
      <ListItemButton onClick={() => navigate(`/`)}>
        <ListItemIcon>
          <AutoStoriesIcon />
        </ListItemIcon>
        <ListItemText primary="所有" />
      </ListItemButton>
      <List component="div" disablePadding>
        {items}
      </List>
    </React.Fragment>
  );
};

export const SecondaryListItems = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader> */}
      <ListItemButton onClick={() => navigate("/md/mds/文曲星奖.md")}>
        <ListItemIcon>
          <EmojiEventsIcon />
        </ListItemIcon>
        <ListItemText primary="文曲星奖" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/md/mds/家族成员.md")}>
        <ListItemIcon>
          <Diversity1Icon />
        </ListItemIcon>
        <ListItemText primary="家族成员" />
      </ListItemButton>
    </React.Fragment>
  );
};
