import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <pre className="bg-secondary-900 p-4 rounded-lg overflow-x-auto text-white/90 text-sm">
        <code>{code}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 rounded-md bg-secondary-800 hover:bg-secondary-700 transition-colors"
        aria-label="Copy code"
      >
        {copied ? (
          <FiCheck className="text-green-400" />
        ) : (
          <FiCopy className="text-white/70" />
        )}
      </button>
    </div>
  );
};

export default CodeBlock;
