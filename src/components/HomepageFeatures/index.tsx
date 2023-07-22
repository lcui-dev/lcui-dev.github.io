import { translate } from "@docusaurus/Translate";
import React from "react";
import styles from "./styles.module.css";

export default function HomepageFeatures(): JSX.Element {
  const features = [
    [
      translate({
        id: "home.features.ui.title",
        message: "Portable UI library",
      }),
      translate({
        id: "home.features.ui.description",
        message:
          "UI library has few dependencies and no system API dependencies.",
      }),
    ],
    [
      translate({
        id: "home.features.gl.title",
        message: "Small Graphics Library",
      }),
      translate({
        id: "home.features.gl.description",
        message:
          "Provide basic graphics processing capabilities for UI rendering.",
      }),
    ],
    [
      translate({
        id: "home.features.plat.title",
        message: "Platform APIs",
      }),
      translate({
        id: "home.features.plat.description",
        message:
          "Provide platform related APIs, such as window management, message loop, clipboard, etc.",
      }),
    ],
    [
      translate({
        id: "home.features.router.title",
        message: "Router",
      }),
      translate({
        id: "home.features.router.description",
        message:
          "define routes, map them to widgets, and display the appropriate widget based on the URL.",
      }),
    ],
    [
      translate({
        id: "home.features.i18n.title",
        message: "I18n",
      }),
      translate({
        id: "home.features.i18n.description",
        message:
          "Configure translated text in multiple languages and freely switch languages at runtime.",
      }),
    ],
    [
      translate({
        id: "home.features.window.title",
        message: "Window Mapping",
      }),
      translate({
        id: "home.features.window.description",
        message:
          "Map widget to the system window so that its content can be synchronized to the window.",
      }),
    ],
    [
      translate({
        id: "home.features.ui_widgets.title",
        message: "Preset Widgets",
      }),
      translate({
        id: "home.features.ui_widgets.description",
        message: "Text, TextEdit, Button, ScrollBar, etc.",
      }),
    ],
    [
      translate({
        id: "home.features.css.title",
        message: "CSS Support",
      }),
      translate({
        id: "home.features.css.description",
        message: "Parse CSS, select styles, and calculate styles.",
      }),
    ],
    [
      translate({
        id: "home.features.xml.title",
        message: "XML Support",
      }),
      translate({
        id: "home.features.xml.description",
        message: "Declare User Interface with XML.",
      }),
    ],
  ];

  return (
    <section>
      <div className="container">
        <h2 className="text--center">
          {translate({
            id: "home.features.title",
            message: "What's in LCUI?",
          })}
        </h2>
        <p className="text--center description margin-bottom--lg">
          {translate({
            id: "home.features.description",
            message: "The libraries you need to make the UI.",
          })}
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
