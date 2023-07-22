import React from "react";
import { translate } from "@docusaurus/Translate";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";
import CSource from "!!raw-loader!./todolist.c";
import XmlSource from "!!raw-loader!./todolist.xml";
import CssSource from "!!raw-loader!./todolist.css";
import TodoList from "../TodoList";
import ExamplePreview from "../ExamplePreview";

export default function HomepageAdvancedExample() {
  return (
    <section>
      <div className="container">
        <h2 className="text--center">
          {translate({
            id: "home.example2.title",
            message: "Add interactivity wherever you need it",
          })}
        </h2>
        <p className="text--center description margin-bottom--lg margin-top--lg">
          {translate({
            id: "home.example2.description",
            message: `The widgets in LCUI are event driven. You can add event handlers to
    widgets in response to interactions, and then make some content or
    style changes in the event handlers.`,
          })}
        </p>
        <ExamplePreview
          highlightMap={{
            0: {
              5: ".app",
              6: ".header",
              7: ".title",
              8: ".tools",
              9: ".count",
              10: ".task-filters",
              11: ".task-filter:eq(0)",
              12: ".task-filter:eq(1)",
              13: ".task-filter:eq(2)",
              14: ".task-filters",
              15: ".tools",
              16: ".header",
              17: ".task-input",
              18: ".task-list",
              19: ".app",
            },
          }}
          editorContent={
            <Tabs>
              <TabItem
                value="xml"
                label="todolist.xml"
                className="auto-highlight"
                default
              >
                <CodeBlock language="xml" showLineNumbers>
                  {XmlSource}
                </CodeBlock>
              </TabItem>
              <TabItem value="css" label="todolist.css">
                <CodeBlock language="css" showLineNumbers>
                  {CssSource}
                </CodeBlock>
              </TabItem>
              <TabItem value="c" label="todolist.c">
                <CodeBlock language="c" showLineNumbers>
                  {CSource}
                </CodeBlock>
              </TabItem>
            </Tabs>
          }
          windowTitle="Todo list"
          windowContent={<TodoList />}
        />
      </div>
    </section>
  );
}
