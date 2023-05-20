import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
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
        <input type="text" value={value} />
        <div className={styles.copy}>
          {copied ? (
            <FontAwesomeIcon icon={faCheck} />
          ) : (
            <FontAwesomeIcon icon={faClipboard} />
          )}
        </div>
      </div>
    </CopyToClipboard>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container text--center">
        <h1 className="hero__title">
          The C library
          <br />
          for user interfaces
        </h1>
        <p className="hero__subtitle">
          {siteConfig.customFields.description as string}
        </p>
        <div className={styles.buttons}>
          <CopyInput
            className="margin-right--sm"
            value="npx create-lcui-app@latest"
          />
          <Link className="button button--primary button--lg" to="/docs/intro">
            Get Started
            <FontAwesomeIcon icon={faArrowRight} className="margin-left--sm" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="Description will go into a meta tag in <head />"
    >
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
