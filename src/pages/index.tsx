import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageWidgets from "@site/src/components/HomepageWidgets";
import HomepageExample from "@site/src/components/HomepageExample";
import styles from "./index.module.css";

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
          <Link
            className="button button--primary button--lg"
            to="/docs/intro"
          >
            Get Started
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
        <HomepageWidgets />
      </main>
    </Layout>
  );
}
