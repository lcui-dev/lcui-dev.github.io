import clsx from "clsx";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import Window from "../Window";
import ExampleEditor from "../ExampleEditor";
import styles from "./index.module.scss";

function ExamplePreview({
  highlightMap,
  editorContent,
  windowTitle,
  windowContent,
}: {
  windowTitle: string;
  highlightMap: Record<string, Record<string, string>>;
  windowContent: React.ReactNode;
  editorContent: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>();
  const [boxVisible, setBoxVisible] = useState(false);
  const [boxStyle, setBoxStyle] = useState<CSSProperties>({});

  useEffect(() => {
    function getElementIndex(el: HTMLElement) {
      return el && Array.from(el.parentElement.children).findIndex(
        (child) => child === el
      )
    }

    function findElement(ctx: HTMLElement, selector: string) {
      const target = selector.split(' ').reduce((parent, childSelector) => {
        const [mainSelector, status] = childSelector.split(':');
        if (status && status.startsWith('eq(')) {
          const index = status.substring(3, status.length - 1);
          return parent.querySelectorAll(mainSelector)[index];
        }
        return parent.querySelector(mainSelector);
      }, ctx);
      if (target !== ctx) {
        return target;
      }
      return null;
    }

    function getTabPanel(el: HTMLElement) {
      for (let target = el; target; target = target.parentElement) {
        if (target.getAttribute('role') === 'tabpanel') {
          return target;
        }
      }
      return null;
    }

    function autoHighlight(e: MouseEvent) {
      let target: HTMLElement;
      const container = ref.current.querySelector(".example-preview") as HTMLElement;

      setBoxVisible(false);
      for (
        target = e.target as HTMLElement;
        target && !target.classList.contains("token-line");
        target = target.parentElement as HTMLElement
      );
      if (!ref.current || !target) {
        return;
      }
      const index = getElementIndex(target);
      const panelIndex = getElementIndex(getTabPanel(target));
      const selector = highlightMap?.[panelIndex]?.[index + 1];
      const boxTarget = selector ? findElement(container, selector) : null;
      if (boxTarget) {
        const borderWidth = 1;
        const containerBox = container.getBoundingClientRect();
        const { left, top, width, height } = boxTarget.getBoundingClientRect();

        setBoxStyle({
          left: left - containerBox.left - borderWidth,
          top: top - containerBox.top - borderWidth,
          width,
          height,
        });
        setBoxVisible(true);
      }
    }

    ref.current?.addEventListener("mousemove", autoHighlight);
    return () => ref.current?.removeEventListener("mousemove", autoHighlight);
  }, [ref]);

  return (
    <div ref={ref} className={styles.pack}>
      <div className={styles.editor}>
        <ExampleEditor>{editorContent}</ExampleEditor>
      </div>
      <Window
        title={windowTitle}
        className={clsx(styles.output, "example-preview")}
      >
        {windowContent}
        {boxVisible && <div className={styles.box} style={boxStyle} />}
      </Window>
    </div>
  );
}

export default ExamplePreview;
