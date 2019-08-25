// import Icon from "./lib/icon/icon";

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import IconExample from "./lib/icon/icon.example";
import DialogExample from "./lib/dialog/dialog.example";
import LayoutExample from "./lib/layout/layout.example";
import { Header, Content, Aside, Footer, Layout } from "./lib/layout/layout";
import styles from "./example.scss";
// import './lib/index.scss';
//import { Header, Content, Aside, Footer, Layout } from "./lib/layout/layout";

ReactDOM.render(
  <Router>
    <div>
      <Layout className={styles.example}>
        <Header className={styles.siteHeader}>
          <div className={styles.logo}>Universe</div>
        </Header>
        <Layout>
          <Aside className={styles.siteAside}>
            <h2>组件</h2>
            <ul>
              <li>
                <Link to="/icon">Icon</Link>
              </li>
              <li>
                <Link to="/dialog">对话框</Link>
              </li>
              <li>
                <Link to="/layout">布局</Link>
              </li>
            </ul>
          </Aside>
          <Content className={styles.siteContent}>
            <Route path="/icon" component={IconExample} />
            <Route path="/dialog" component={DialogExample} />
            <Route path="/layout" component={LayoutExample} />
          </Content>
        </Layout>

        <Footer className={styles.siteFooter}>&copy; 张起灵</Footer>
      </Layout>

      <div />
    </div>
  </Router>,
  document.getElementById("root")
);
