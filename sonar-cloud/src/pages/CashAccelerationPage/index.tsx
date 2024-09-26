import React, { useState } from "react";
import CashAccelerationTemplate from "../../components/templates/CashAccelerationTemplate";
import TabGroup from "../../components/organisms/TabGroup";
import ContractsTable from "../../components/organisms/ContractsTable";
import CashKicksTable from "../../components/organisms/CashKickTable";

const CashAccelerationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("contracts");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const tabGroup = (
    <TabGroup
      tabs={[
        { label: "My Contracts", value: "contracts" },
        { label: "My Cash Kicks", value: "cashKicks" },
      ]}
      activeTab={activeTab}
      onTabChange={handleTabChange}
    />
  );

  const tableContent =
    activeTab === "contracts" ? <ContractsTable /> : <CashKicksTable />;

  return (
    <CashAccelerationTemplate
      title="Cash Acceleration"
      infoIcon={<span> ⓘ</span>}
      tabGroup={tabGroup}
      tableContent={tableContent}
    />
  );
};

export default CashAccelerationPage;
