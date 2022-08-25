import styled from "styled-components";

const Layout = (props) => {
  return <SLayout>{props.children}</SLayout>;
};

export default Layout;

const SLayout = styled.section`
  position: relative;
  margin-top: -1px;
  padding-top: 1px;
  min-width: 320px;
`;
