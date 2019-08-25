import React from "react";
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Aside from "./aside";
import styles from "./layout.example.scss";

export default function() {
  const getLayoutContainerStyle = () => {
    return { height: "200px", width: "300px" };
  };
  return (
    <div>
      <h1>第一个例子</h1>
      <Layout style={getLayoutContainerStyle()}>
        <Header className={styles.header}>headerllzl</Header>
        <Content className={styles.content}>content</Content>
        <Footer className={styles.footer}>footer</Footer>
      </Layout>
      <h1>第二个例子</h1>
      <Layout style={getLayoutContainerStyle()}>
        <Header className={styles.header}>Header</Header>
        <Layout>
          <Aside className={styles.aside}>Aside</Aside>
          <Content className={styles.content}>content</Content>
        </Layout>
        <Footer className={styles.footer}>footer</Footer>
      </Layout>
      <h1>第三个例子</h1>
      <Layout style={getLayoutContainerStyle()}>
        <Header className={styles.header}>Header</Header>
        <Layout>
          <Content className={styles.content}>content</Content>
          <Aside className={styles.aside}>Aside</Aside>
        </Layout>
        <Footer className={styles.footer}>this is footer</Footer>
      </Layout>
      <h1>第四个例子</h1>
      <Layout style={getLayoutContainerStyle()}>
        <Aside className={styles.fouthAside}>Aside</Aside>
        <Layout>
          <Header className={styles.header}>Header</Header>
          <Content className={styles.content}>content</Content>
          <Footer className={styles.footer}>this is footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}
