import React, { useState } from "react";
import { navlinks } from "./navlinks";

const DropdownMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (menuId: string) => {
    setActiveMenu(menuId);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className="relative group">
      <ul className="flex space-x-4">
        {navlinks.map((item) => (
          <li
            key={item.menuId}
            className={`relative group ${activeMenu === item.menuId ? "text-blue-500" : ""}`}
            onMouseEnter={() => handleMouseEnter(item.menuId)}
            onMouseLeave={handleMouseLeave}
          >
            {item.menuId}
            {activeMenu === item.menuId && (
              <ul
                className="absolute left-0 right-0 bg-white border border-gray-300 shadow-lg"
                style={{ minWidth: "100vw" }} // Force full width
              >
                {item.dropdownLinks?.map((link) => (
                  <li key={link} className="p-2">
                    {link}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
