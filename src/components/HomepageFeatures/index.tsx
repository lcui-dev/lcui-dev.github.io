import React from "react";
import styles from "./styles.module.css";

export default function HomepageFeatures(): JSX.Element {
  const features = [
    [
      "Portable UI library",
      "UI library has few dependencies and no system API dependencies.",
    ],
    [
      "Small Graphics Library",
      "Provide basic graphics processing capabilities for UI rendering.",
    ],
    [
      "Platform APIs",
      "Provide platform related APIs, such as window management, message loop, clipboard, etc.",
    ],
    [
      "Router",
      "define routes, map them to widgets, and display the appropriate widget based on the URL.",
    ],
    [
      "I18n",
      "Configure translated text in multiple languages and freely switch languages at runtime.",
    ],
    [
      "Window Mapping",
      "Map widget to the system window so that its content can be synchronized to the window.",
    ],
    ["Preset Widgets", "Text, TextEdit, Button, ScrollBar, etc."],
    ["CSS Support", "Parse CSS, select styles, and calculate styles."],
    ["XML Support", "Declare User Interface with XML."],
  ];

  return (
    <section>
      <div className="container">
        <h2 className="text--center">What's in LCUI?</h2>
        <p className="text--center description margin-bottom--lg">
          The libraries you need to make the UI.
        </p>
        <div className={styles.features}>
          {features.map(([title, description]) => (
            <div key={title} className={styles.feature}>
              <div className={styles.card}>
                <h3>{title}</h3>
                <div className="text--muted">{description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
