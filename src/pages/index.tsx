import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { translate } from "@docusaurus/Translate";
import Icon from "@site/src/components/Icon";
import {
  faArrowRight,
  faCheck,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageWidgets from "@site/src/components/HomepageWidgets";
import HomepageExample from "@site/src/components/HomepageExample";
import HomepageAdvancedExample from "@site/src/components/HomepageAdvancedExample";
import styles from "./index.module.css";

function CopyInput({ className, value }: { className: string; value: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (copied) {
        setCopied(false);
      }
    }, 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  return (
    <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
      <div className={clsx(styles.input, className)}>
        <input type="text" value={value} readOnly />
        <div className={styles.copy}>
          {copied ? (
            <Icon icon={faCheck} />
          ) : (
            <Icon icon={faClipboard} />
          )}
        </div>
      </div>
    </CopyToClipboard>
  );
}

function HomepageHeader() {
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container text--center">
        <h1
          className="hero__title"
          dangerouslySetInnerHTML={{ __html: translate({ id: "home.title" }) }}
        ></h1>
        <p className="hero__subtitle">
          {translate({
            id: "home.subtitle",
            message:
              "An open source UI toolkit for building cross-platform desktop apps.",
          })}
        </p>
        <div className={styles.buttons}>
          <CopyInput
            className="margin-right--sm"
            value="npx lcui create my-lcui-app"
          />
          <Link
            className="button button--primary button--lg"
            to="/docs/introduction"
          >
            {translate({ id: "home.get_started", message: "Get Started" })}
            <Icon icon={faArrowRight} className="margin-left--sm" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`${translate({ id: "site.title" })} - ${translate({
        id: "site.tagline",
      })}`}
      description={translate({ id: "site.description" })}
    >
      <div className="container margin-top--md">
        <div
          className="alert alert--warning"
          role="alert"
          dangerouslySetInnerHTML={{
            __html: translate({
              id: "site.notice",
              message:
                "<b>Warning:</b> The website is still under development and the content needs to be adjusted",
            }),
          }}
        />
      </div>
      <HomepageHeader />
      <main className="homepage-main">
        <HomepageFeatures />
        <HomepageExample />
        <HomepageAdvancedExample />
        <HomepageWidgets />
        {/* TODO: add template section */}
        {/* TODO: add showcase section */}
        {/* TODO: add guides section */}
      </main>
    </Layout>
  );
}
