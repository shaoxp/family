import FlightIcon from "@mui/icons-material/Flight";
import CelebrationIcon from "@mui/icons-material/Celebration";
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
