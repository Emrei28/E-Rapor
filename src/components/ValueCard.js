"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ValueCard({ icon, title, desc, text, card, aos, delay }) {
  if (card) {
    return (
      <div
        className="p-6 rounded-xl shadow-md hover:shadow-xl transition bg-gray-50"
      >
        <FontAwesomeIcon icon={icon} className="text-sky-600 w-10 h-10 mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{desc}</p>
      </div>
    );
  }

  return (
    <div className="flex items-start" data-aos={aos} data-aos-delay={delay}>
      <FontAwesomeIcon icon={icon} className="text-sky-600 w-6 h-6 mr-3 mt-1" />
      <p>{text}</p>
    </div>
  );
}

