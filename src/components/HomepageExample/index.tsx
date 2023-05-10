import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";
import CSource from "!!raw-loader!./todolist.c";
import XmlSource from "!!raw-loader!./todolist.xml";
import CssSource from "!!raw-loader!./todolist.css";
import TodoList from "./TodoList";

export default function HomepageExample() {
  return (
    <section>
      <div className="container">
        <h2>Create user interfaces from widgets</h2>
        <p>
          LCUI lets you build user interfaces out of individual pieces called
          widgets. Create your own LCUI widgets like Thumbnail, LikeButton, and
          Video. Then combine them into entire screens, pages, and apps.
        </p>
        <Tabs>
          <TabItem value="xml" label="todolist.xml" default>
            <CodeBlock language="xml">
              {XmlSource}
            </CodeBlock>
          </TabItem>
          <TabItem value="css" label="todolist.css">
            <CodeBlock language="css">{CssSource}</CodeBlock>
          </TabItem>
          <TabItem value="c" label="todolist.c">
            <CodeBlock language="c">{CSource}</CodeBlock>
          </TabItem>
        </Tabs>
        <TodoList />
      </div>
    </section>
  );
}
