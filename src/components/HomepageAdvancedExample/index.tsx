import React from "react";
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
        <h2 className="text--center">Add interactivity wherever you need it</h2>
        <p className="text--center description margin-bottom--lg margin-top--lg">
          The widgets in LCUI are event driven. You can add event handlers to
          widgets in response to interactions, and then make some content or
          style changes in the event handlers.
        </p>
        <ExamplePreview
          editorContent={
            <Tabs>
              <TabItem value="xml" label="todolist.xml" default>
                <CodeBlock language="xml">{XmlSource}</CodeBlock>
              </TabItem>
              <TabItem value="css" label="todolist.css">
                <CodeBlock language="css">{CssSource}</CodeBlock>
              </TabItem>
              <TabItem value="c" label="todolist.c">
                <CodeBlock language="c">{CSource}</CodeBlock>
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
