import "./MyLayout.less";

const Layout = props => (
  <div className="main">
    {props.children}
  </div>
);

export default Layout;