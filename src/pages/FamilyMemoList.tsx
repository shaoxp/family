import React, { useMemo } from "react";

import { MemosConfig } from "../components/Config/MemosConfig";
import { Markdown } from "../components/Markdown";
import { Divider, List, ListItem } from "@mui/material";
import { useParams } from "react-router-dom";

export const FamilyMemoList = () => {
  const { tag } = useParams();
  const memosList = useMemo(() => {
    let memosList = MemosConfig.memos;
    if (tag) {
      memosList = memosList.filter(
        (memo) => memo.tags.filter((t) => t === tag).length > 0
      );
    }
    return memosList;
  }, [tag]);

  return (
    <List>
      {memosList.map((mdFile, index) => (
        <React.Fragment key={index}>
          <ListItem
            style={{ backgroundColor: index % 2 === 0 ? "lightgrey" : "white" }}
          >
            <Markdown file={`${mdFile.md}`} />
          </ListItem>
          {index !== memosList.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};
