// import Icon from "./lib/icon/icon";

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import IconDemo from "./lib/icon/icon.demo";
import DialogExample from "./lib/dialog/dialog.example";
import LayoutExample from "./lib/layout/layout.example";
import { Header, Content, Aside, Footer, Layout } from "./lib/layout/layout";
import styles from "./example.scss";

// const test = require("!!raw-loader!./lib/icon/icon.example.tsx");
// console.log(test.default);

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
                <NavLink to="/icon" activeClassName={styles.active}>
                  Icon
                </NavLink>
              </li>
              <li>
                <NavLink to="/dialog" activeClassName={styles.active}>
                  对话框
                </NavLink>
              </li>
              <li>
                <NavLink to="/layout" activeClassName={styles.active}>
                  布局
                </NavLink>
              </li>
            </ul>
          </Aside>
          <Content className={styles.siteContent}>
            <Route path="/icon" component={IconDemo} />
            <Route path="/dialog" component={DialogExample} />
            <Route path="/layout" component={LayoutExample} />
          </Content>
        </Layout>

        <Footer className={styles.siteFooter}>
          &copy; 张起灵
          <div>我看过人间无数的奇景，我有着世界上最神奇最有故事的伙伴</div>
          <div>我们在峭壁高歌，在雪山诵经，在戈壁对酒，在海上看月</div>
        </Footer>
      </Layout>

      <div />
    </div>
  </Router>,
  document.getElementById("root")
);
