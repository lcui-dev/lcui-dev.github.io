import React, { useState } from "react";
import classNames from "classnames";
import { translate } from "@docusaurus/Translate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import Checkbox from "./Checkbox";
import Switch from "./Switch";
import Radio from "./Radio";
import Dropdown from "./Dropdown";
import Message from "./Message";
import "./lc-design.css";
import styles from "./style.module.css";

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
      name: translate({
        id: "home.widgets.checkbox.name",
        message: "Checkbox",
      }),
      description: translate({
        id: "home.widgets.checkbox.description",
        message:
          "Make multiple selections in a set of options, or mark the status of an option.",
      }),
    },
    {
      preview: <SwitchPreview />,
      name: translate({
        id: "home.widgets.switch.name",
        message: "Switch",
      }),
      description: translate({
        id: "home.widgets.switch.description",
        message: "Represent the switching between two states or on-off state.",
      }),
    },
    {
      preview: <RadioPreview />,
      name: translate({
        id: "home.widgets.radio.name",
        message: "Radio",
      }),
      description: translate({
        id: "home.widgets.radio.description",
        message: "Select one of a set of options.",
      }),
    },
    {
      preview: <DropdownPreview />,
      name: translate({
        id: "home.widgets.dropdown.name",
        message: "Dropdown",
      }),
      description: translate({
        id: "home.widgets.dropdown.description",
        message:
          "Toggle contextual overlays for displaying lists of links and more with the LCUI dropdown widget.",
      }),
    },
    {
      preview: <MessagePreview />,
      name: translate({
        id: "home.widgets.message.name",
        message: "Message",
      }),
      description: translate({
        id: "home.widgets.message.description",
        message:
          "Display global messages as feedback in response to user operations.",
      }),
    },
    {
      preview: <ModalPreview />,
      name: translate({
        id: "home.widgets.modal.name",
        message: "Modal",
      }),
      description: translate({
        id: "home.widgets.modal.description",
        message:
          "Use modal widget to add dialogs to your application for lightboxes, user notifications, or completely custom content.",
      }),
    },
  ];

  return (
    <section>
      <div className="container">
        <h2 className="text--center">
          {translate({
            id: "home.widgets.title",
            message: "Make the user interface more modern",
          })}
        </h2>
        <p className="text--center description">
          {translate({
            id: "home.widgets.description",
            message: "We provide a modern widget library to meet your needs",
          })}
        </p>
        <ul className={styles.widgets}>
          {widgets.map((w) => (
            <li key={w.name} className={styles.widget}>
              <div className={styles.widgetPreview}>{w.preview}</div>
              <h3>{w.name}</h3>
              <div>{w.description}</div>
            </li>
          ))}
        </ul>
        <div className="text--center margin-top--lg">
          <a
            className="button button--outline button--primary"
            href="https://github.com/lcui-dev/lc-design/tree/develop/docs/components"
            target="_blank"
          >
            {translate({
              id: "home.widgets.btn_explore",
              message: "Explore UI widgets",
            })}
            <FontAwesomeIcon
              icon={faExternalLink}
              className="margin-left--sm"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
