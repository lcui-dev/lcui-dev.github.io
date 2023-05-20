import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";
import CSource from "!!raw-loader!./todolist.c";
import XmlSource from "!!raw-loader!./todolist.xml";
import CssSource from "!!raw-loader!./todolist.css";
import ExamplePreview from "../ExamplePreview";
import { TaskItem } from "../TodoList";

export default function HomepageExample() {
  const list = [
    {
      id: 1,
      name: "Download LCUI source code",
      status: "completed",
    },
    {
      id: 2,
      name: "Build LCUI",
      status: "completed",
    },
    {
      id: 3,
      name: "Read LCUI tutorials",
      status: "active",
    },
    {
      id: 4,
      name: "Create my LCUI application",
      status: "active",
    },
  ] as const;
  return (
    <section>
      <div className="container">
        <h2 className="text--center">Create user interfaces from widgets</h2>
        <p className="text--center description margin-bottom--lg margin-top--lg">
          LCUI lets you build user interfaces out of individual pieces called
          widgets. Create your own LCUI widgets and combine them into entire
          screens, pages, and apps.
        </p>
        <ExamplePreview
          highlightMap={{
            0: {
              5: ".task-item:eq(0)",
              6: ".task-item:eq(0) .task-status",
              7: ".task-item:eq(0) .task-name",
              8: ".task-item:eq(0) .task-delete",
              9: ".task-item:eq(0)",
              10: ".task-item:eq(1)",
              11: ".task-item:eq(1) .task-status",
              12: ".task-item:eq(1) .task-name",
              13: ".task-item:eq(1) .task-delete",
              14: ".task-item:eq(1)",
              15: ".task-item:eq(2)",
              16: ".task-item:eq(2) .task-status",
              17: ".task-item:eq(2) .task-name",
              18: ".task-item:eq(2) .task-delete",
              19: ".task-item:eq(2)",
              20: ".task-item:eq(3)",
              21: ".task-item:eq(3) .task-status",
              22: ".task-item:eq(3) .task-name",
              23: ".task-item:eq(3) .task-delete",
              24: ".task-item:eq(3)",
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
          windowTitle="Todo List"
          windowContent={
            <>
              {list.map((item) => (
                <TaskItem key={item.id} item={item} />
              ))}
            </>
          }
        />
      </div>
    </section>
  );
}
