import React from "react";

export function Footer() {
  return (
    <div className="mt-2 text-center">
      <p className="text-xs text-gray-500">
        © {new Date().getFullYear()} Quranic Arabic Indonesia
      </p>
    </div>
  );
}
