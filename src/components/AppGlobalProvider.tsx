import React, { createContext, useContext, useMemo, useState } from "react";

type SetStateFunc<T> = React.Dispatch<React.SetStateAction<T>>;

interface AppGlobalProviderContextProps {
  drawerOpen: boolean;
  setDrawerOpen: SetStateFunc<boolean>;
}

export const AppGlobalProviderContext = createContext<
  AppGlobalProviderContextProps | undefined
>(undefined);

export const AppGlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const globalState = useMemo(
    () => ({
      drawerOpen,
      setDrawerOpen,
    }),
    [drawerOpen]
  );

  return (
    <AppGlobalProviderContext.Provider value={globalState}>
      {children}
    </AppGlobalProviderContext.Provider>
  );
};

export function useAppGlobalProviderContext(): AppGlobalProviderContextProps {
  const value = useContext(AppGlobalProviderContext);
  return value!;
}
