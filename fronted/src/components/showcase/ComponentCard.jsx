import React, { useState } from "react";
import { motion } from "framer-motion";
import CodeBlock from "./CodeBlock";

const ComponentCard = ({ component }) => {
  const [activeTab, setActiveTab] = useState("preview");
  const [activeExample, setActiveExample] = useState(0);

  const {
    name,
    description,
    component: Component,
    props,
    code,
    examples,
    propsList,
  } = component;

  const renderComponent = () => {
    if (activeTab === "preview") {
      const currentProps =
        activeExample === 0 ? props : examples[activeExample - 1].props;
      return <Component {...currentProps} />;
    } else if (activeTab === "code") {
      return <CodeBlock code={code} />;
    } else if (activeTab === "props") {
      return (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-white/10">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                  Prop
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                  Default
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {propsList.map((prop, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white/5" : ""}>
                  <td className="px-4 py-3 text-sm font-medium text-white">
                    {prop.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-primary-300">
                    {prop.type}
                  </td>
                  <td className="px-4 py-3 text-sm text-white/70">
                    {prop.default}
                  </td>
                  <td className="px-4 py-3 text-sm text-white/70">
                    {prop.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card-gradient rounded-xl border border-white/10 overflow-hidden"
    >
      <div className="p-6 border-b border-white/10">
        <h2 className="text-2xl font-display font-semibold text-white mb-2">
          {name}
        </h2>
        <p className="text-white/70">{description}</p>
      </div>

      <div className="border-b border-white/10">
        <div className="flex overflow-x-auto">
          <button
            className={`px-4 py-3 font-medium text-sm ${
              activeTab === "preview"
                ? "text-white border-b-2 border-primary-500"
                : "text-white/60 hover:text-white/80"
            }`}
            onClick={() => setActiveTab("preview")}
          >
            Preview
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm ${
              activeTab === "code"
                ? "text-white border-b-2 border-primary-500"
                : "text-white/60 hover:text-white/80"
            }`}
            onClick={() => setActiveTab("code")}
          >
            Code
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm ${
              activeTab === "props"
                ? "text-white border-b-2 border-primary-500"
                : "text-white/60 hover:text-white/80"
            }`}
            onClick={() => setActiveTab("props")}
          >
            Props
          </button>
        </div>
      </div>

      {activeTab === "preview" && examples.length > 0 && (
        <div className="flex overflow-x-auto p-2 bg-secondary-900/50 border-b border-white/10">
          <button
            className={`px-3 py-1 text-xs rounded-md mr-2 ${
              activeExample === 0
                ? "bg-primary-600 text-white"
                : "bg-white/10 text-white/70 hover:bg-white/20"
            }`}
            onClick={() => setActiveExample(0)}
          >
            Default
          </button>
          {examples.map((example, index) => (
            <button
              key={index}
              className={`px-3 py-1 text-xs rounded-md mr-2 ${
                activeExample === index + 1
                  ? "bg-primary-600 text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
              onClick={() => setActiveExample(index + 1)}
            >
              {example.name}
            </button>
          ))}
        </div>
      )}

      <div className="p-6">{renderComponent()}</div>
    </motion.div>
  );
};

export default ComponentCard;
