import React from "react";

import { BlogConfig } from "../components/Config/BlogsConfig";
import { Markdown } from "../components/Markdown";
import { Divider, List, ListItem } from "@mui/material";

export const FamilyBlogList = () => {
  const blogsList = BlogConfig.blogs;

  return (
    <List>
      {blogsList.map((mdFile, index) => (
        <React.Fragment key={index}>
          <ListItem
            style={{ backgroundColor: index % 2 === 0 ? "lightgrey" : "white" }}
          >
            <Markdown file={mdFile.md} />
          </ListItem>
          {index !== blogsList.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};
