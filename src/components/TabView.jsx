import { useState } from "react";

function TabView() {
  const [activeTab, setActiveTab] = useState(0);

  const tabHeaders = [
    { label: "Tab 1", target: "tab1" },
    { label: "Tab 2", target: "tab2" },
    { label: "Tab 3", target: "tab3" },
  ];

  const tabContents = [
    {
      id: "tab1",
      heading: "Tab 1 Content",
      text: "This is the content for Tab 1.",
    },
    {
      id: "tab2",
      heading: "Tab 2 Content",
      text: "This is the content for Tab 2.",
    },
    {
      id: "tab3",
      heading: "Tab 3 Content",
      text: "This is the content for Tab 3.",
    },
  ];

  function showTab(index) {
    setActiveTab(index);
  }

  return (
    <div className="tab-view">
      <div className="tab-container">
        <div className="tab-header">
          {tabHeaders.map((header, index) => (
            <button
              key={index}
              className={
                activeTab === index ? "tab-button active" : "tab-button"
              }
              onClick={() => showTab(index)}
              data-target={`#${header.target}`}>
              {header.label}
            </button>
          ))}
        </div>
        <div className="tab-content-container">
          {tabContents.map((content, index) => (
            <div
              key={index}
              className={
                activeTab === index ? "tab-content active" : "tab-content"
              }
              id={content.id}>
              <h2>{content.heading}</h2>
              <p>{content.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { TabView };
