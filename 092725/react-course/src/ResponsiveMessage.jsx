import React from "react";

export default function ResponsiveMessage() {
  return (
    <div className="p-4">
      <p className="text-green-500 text-sm sm:hidden">
        Ви використовуєте мобільний пристрій
      </p>

      <p className="hidden sm:block text-blue-600 text-lg">
        Ви використовуєте десктоп
      </p>
    </div>
  );
}
