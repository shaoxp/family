import { Box, Typography } from "@mui/material";
import { Markdown } from "../components/Markdown";
import { useParams } from "react-router-dom";

export const MdViewPage = () => {
  const params = useParams();
  const mdFile = params["*"];
  if (mdFile) {
    return (
      <Box p={2} m={1}>
        <Markdown file={`/${mdFile}`}></Markdown>
      </Box>
    );
  } else {
    return <Typography>"Wrong path!"</Typography>;
  }
};
