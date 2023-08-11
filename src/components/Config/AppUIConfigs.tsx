import FlightIcon from "@mui/icons-material/Flight";
import FlagIcon from "@mui/icons-material/Flag";

export const BlogTags = {
  travel: {
    icon: <FlightIcon />,
    name: "旅行",
  },
  event: {
    icon: <FlagIcon />,
    name: "事件",
  },
};

export type BlogTagKeys = keyof typeof BlogTags;
