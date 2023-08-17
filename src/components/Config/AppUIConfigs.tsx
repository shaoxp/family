import FlightIcon from "@mui/icons-material/Flight";
import FlagIcon from "@mui/icons-material/Flag";

export const MemoTags = {
  travel: {
    icon: <FlightIcon />,
    name: "旅行",
  },
  event: {
    icon: <FlagIcon />,
    name: "事件",
  },
};

export type MemoTagKeys = keyof typeof MemoTags;
