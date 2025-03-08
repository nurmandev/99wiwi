import { useState } from "react";

const useTabSwitcher = (defaultTab: string) => {
  const [currentTab, setCurrentTab] = useState<string>(defaultTab);

  const isTabActive = (tabName: string) => currentTab === tabName;

  const switchTab = (tabName: string) => {
    setCurrentTab(tabName);
  };

  return { currentTab, isTabActive, switchTab };
};

export default useTabSwitcher;
