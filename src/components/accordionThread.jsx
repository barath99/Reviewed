import React, { useState } from 'react';

function Accordion({ panels }) {
  const [activePanel, setActivePanel] = useState(null);

  const handleClick = panelId => {
    setActivePanel(panelId === activePanel ? null : panelId);
  };

  return (
    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
      {panels.map(panel => (
        <div key={panel.id}>
          <h2 id={`accordion-flush-heading-${panel.id}`}>
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
              onClick={() => handleClick(panel.id)}
              data-accordion-target={`#accordion-flush-body-${panel.id}`}
              aria-expanded={panel.id === activePanel}
              aria-controls={`accordion-flush-body-${panel.id}`}
            >
              <span>{panel.heading}</span>
              <svg data-accordion-icon className={`w-6 h-6 ${panel.id === activePanel ? 'rotate-180' : 'shrink-0'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id={`accordion-flush-body-${panel.id}`} className={` ${panel.id === activePanel ? '' : 'hidden'}`} aria-labelledby={`accordion-flush-heading-${panel.id}`}>
            <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
              {panel.body}"hello"
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;