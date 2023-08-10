import FlightIcon from "@mui/icons-material/Flight";
import CelebrationIcon from "@mui/icons-material/Celebration";

export const BlogTags = {
  travel: {
    icon: <FlightIcon />,
    name: "Travel",
  },
  event: {
    icon: <CelebrationIcon />,
    name: "Event",
  },
};

export type BlogTagKeys = keyof typeof BlogTags;
