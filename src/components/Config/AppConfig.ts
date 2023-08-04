import { FirstFirstListType } from "../Data/Types";

export const AppConfig = {
  listColor: {
    [FirstFirstListType.UrgentImportant]: { bgColor: "red" },
    [FirstFirstListType.NoUrgentImportant]: { bgColor: "green" },
    [FirstFirstListType.UrgentNoImportant]: { bgColor: "yellow" },
    [FirstFirstListType.NoUrgentNoImportant]: { bgColor: "blue" },
  },
};
