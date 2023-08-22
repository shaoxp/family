import * as React from "react";
import { useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Diversity1Icon from "@mui/icons-material/Diversity1";

import { MemosConfig } from "../Config/MemosConfig";
import { MemoTagKeys, MemoTags } from "../Config/AppUIConfigs";
import { List } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export const MainListItems = () => {
  const navigate = useNavigate();
  const memoTags = new Set(MemosConfig.memos.flatMap((memo) => memo.tags));
  const items = [...memoTags].map((tag) => {
    const tagConfig = MemoTags[tag as MemoTagKeys];

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
      <ListItemButton onClick={() => navigate("/md/mds/文曲星奖")}>
        <ListItemIcon>
          <EmojiEventsIcon />
        </ListItemIcon>
        <ListItemText primary="文曲星奖" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/md/mds/家族成员")}>
        <ListItemIcon>
          <Diversity1Icon />
        </ListItemIcon>
        <ListItemText primary="家族成员" />
      </ListItemButton>
    </React.Fragment>
  );
};
