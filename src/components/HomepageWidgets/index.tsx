import React, { useState } from "react";
import Checkbox from "./Checkbox";
import Switch from "./Switch";
import Radio from "./Radio";
import styles from "./style.module.css";
import "./lc-design.css";
import Dropdown from "./Dropdown";
import Message from "./Message";
import classNames from "classnames";

function CheckboxPreview() {
  return (
    <div>
      <div className="mb-1">
        <Checkbox>Checkbox</Checkbox>
      </div>
      <div className="mb-1">
        <Checkbox disabled>Disabled</Checkbox>
      </div>
      <div className="mb-1">
        <Checkbox disabled checked>
          Disabled Checked
        </Checkbox>
      </div>
    </div>
  );
}

function RadioPreview() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <div className="mb-1">
        <Radio checked={value == 0} onChecked={() => setValue(0)}>
          Option 1
        </Radio>
      </div>
      <div className="mb-1">
        <Radio checked={value == 1} onChecked={() => setValue(1)}>
          Option 2
        </Radio>
      </div>
      <div className="mb-1">
        <Radio disabled>Disabled</Radio>
      </div>
      <div className="mb-1">
        <Radio disabled checked>
          Disabled Checked
        </Radio>
      </div>
    </div>
  );
}

function SwitchPreview() {
  return (
    <div>
      <div className="mb-1">
        <Switch checked>Subscribe to weekly newsletter</Switch>
      </div>
      <div className="mb-1">
        <Switch checkedIcon="check" uncheckedIcon="close" checked>
          Icon
        </Switch>
      </div>
      <div className="mb-1">
        <Switch disabled>Disabled</Switch>
      </div>
      <div className="mb-1">
        <Switch disabled checked>
          Disabled Checked
        </Switch>
      </div>
    </div>
  );
}

function DropdownPreview() {
  return (
    <div className={styles.dropdown}>
      <Dropdown open trigger={<button className="btn">Dropdown button</button>}>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item disabled>Disabled action</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Separated link</Dropdown.Item>
      </Dropdown>
    </div>
  );
}

function MessagePreview() {
  return (
    <div>
      <Message type="success">Success message</Message>
      <Message type="info">Info message</Message>
      <Message type="warning">Warning message</Message>
      <Message type="error">Error message</Message>
    </div>
  );
}

function ModalPreview() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setShow(true)}>
        Launch demo modal
      </button>
      {show && <div className="modal-backdrop" />}
      <div className={classNames("modal", show && "show")}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal Title</h5>
              <button
                data-dismiss="modal"
                className="close"
                onClick={() => setShow(false)}
              >
                &#215;
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button className="btn" onClick={() => setShow(false)}>
                Close
              </button>
              <button className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function HomepageWidgets() {
  const widgets = [
    {
      preview: <CheckboxPreview />,
      name: "Checkbox",
      description:
        "Make multiple selections in a set of options, or mark the status of an option.",
    },
    {
      preview: <SwitchPreview />,
      name: "Switch",
      description:
        "Represent the switching between two states or on-off state.",
    },
    {
      preview: <RadioPreview />,
      name: "Radio",
      description: "Select one of a set of options.",
    },
    {
      preview: <DropdownPreview />,
      name: "Dropdown",
      description:
        "Toggle contextual overlays for displaying lists of links and more with the LCUI dropdown widget.",
    },
    {
      preview: <MessagePreview />,
      name: "Message",
      description:
        "Display global messages as feedback in response to user operations.",
    },
    {
      preview: <ModalPreview />,
      name: "Modal",
      description:
        "Use modal widget to add dialogs to your application for lightboxes, user notifications, or completely custom content.",
    },
  ];
  return (
    <section>
      <div className="container">
        <header className={styles.header}>
          <div className={styles.left}>
            <div>Cross-platform desktop UI</div>
            <h2>
              Modern UI paradigms. <br />
              Ready for desktop.
            </h2>
          </div>
          <a
            className="button button--outline button--primary"
            href="https://github.com/lcui-dev/lc-design/tree/develop/docs/components"
            target="_blank"
          >
            Explore UI widgets
          </a>
        </header>
        <ul className={styles.widgets}>
          {widgets.map((w) => (
            <li key={w.name} className={styles.widget}>
              <div className={styles.widgetPreview}>{w.preview}</div>
              <h3>{w.name}</h3>
              <div>{w.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
