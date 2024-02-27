import FlightIcon from "@mui/icons-material/Flight";
import FlagIcon from "@mui/icons-material/Flag";
import CurrencyYuanIcon from '@mui/icons-material/CurrencyYuan';

export const MemoTags = {
  travel: {
    icon: <FlightIcon />,
    name: "旅行",
  },
  event: {
    icon: <FlagIcon />,
    name: "事件",
  },
  invest:{
    icon:<CurrencyYuanIcon/>,
    name:"投资"
  }
};

export type MemoTagKeys = keyof typeof MemoTags;
