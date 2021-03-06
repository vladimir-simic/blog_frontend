import { connect } from "react-redux";
import { getPostsList } from "./home.actions";
import Home from "./home";

const stateToProps = state => ({
  user: state.user
});

export default connect(
  stateToProps,
  { getPostsList }
)(Home);