import { styled } from "@mui/material";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const StyledMarkdown = styled(ReactMarkdown)({
  "& img": {
    maxWidth: "100%",
    height: "auto",
  },
  "& table": {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  "& th, & td": {
    border: "1px solid #ddd",
    padding: "8px",
  },
  "& th": {
    backgroundColor: "#f2f2f2",
    textAlign: "left",
  },
});

export type MarkdownProps = {
  file: string;
};
export const Markdown = ({ file }: MarkdownProps) => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch(file)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, [file]);

  return (
    <div>
      <StyledMarkdown remarkPlugins={[gfm]} children={markdownContent} />
    </div>
  );
};
