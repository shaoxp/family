import React, { useEffect, useMemo } from "react";

import { BlogConfig } from "../components/Config/BlogsConfig";
import { Markdown } from "../components/Markdown";
import { Divider, List, ListItem } from "@mui/material";
import { useParams } from "react-router-dom";

export const FamilyBlogList = () => {
  const { tag } = useParams();
  const blogsList = useMemo(() => {
    let blogsList = BlogConfig.blogs;
    if (tag) {
      blogsList = blogsList.filter(
        (blog) => blog.tags.filter((t) => t === tag).length > 0
      );
    }
    return blogsList;
  }, [tag]);

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
