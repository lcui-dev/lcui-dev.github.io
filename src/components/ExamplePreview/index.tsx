import React from "react";
import Window from "../Window";
import ExampleEditor from "../ExampleEditor";
import styles from "./index.module.css";

function ExamplePreview({ editorContent, windowTitle, windowContent }) {
  return (
    <div className={styles.pack}>
      <div className={styles.editor}>
        <ExampleEditor>{editorContent}</ExampleEditor>
      </div>
      <Window title={windowTitle} className={styles.output}>
        {windowContent}
      </Window>
    </div>
  );
}

export default ExamplePreview;
