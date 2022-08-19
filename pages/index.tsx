import styled from "styled-components";
import { ReactComponent as HomeIcon } from "../pages/assets/home.svg";

function HomePage() {
  return <StyledHomeIcon />;
}

export default HomePage;

const StyledHomeIcon = styled(HomeIcon)`
  width: 150px;
  height: 150px;

  &:hover path {
    fill: red;
  }
`;
