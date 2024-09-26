import React from "react";
import { Box } from "@mui/material";
import { TabButton } from "../../molecules/TabButton/index";

export interface TabGroupProps {
  tabs: { label: string; value: string }[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabGroup: React.FC<TabGroupProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => {
  return (
    <Box display="flex" gap={1}>
      {tabs.map((tab) => (
        <TabButton
          key={tab.value}
          active={tab.value === activeTab}
          onClick={() => onTabChange(tab.value)}
        >
          {tab.label}
        </TabButton>
      ))}
    </Box>
  );
};

export default TabGroup;
