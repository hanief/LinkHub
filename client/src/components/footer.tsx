import React from "react";

export function Footer() {
  return (
    <div className="mt-2 text-center">
      <p className="text-xs text-gray-500">
        © {new Date().getFullYear()} LinkHub • 
        <a href="#" className="text-primary hover:underline ml-1">
          Update profile
        </a>
      </p>
    </div>
  );
}
