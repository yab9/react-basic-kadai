import React from "react";

export function Footer({ siteTitle = "サイト名未設定", currentYear = new Date().getFullYear() }) {
  return (
    <footer>
      <p>&copy; {currentYear}{siteTitle}</p>
    </footer>
  );
}