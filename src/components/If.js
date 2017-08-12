/**
 * Created by pdiouf on 2017-04-09.
 */
import CreateReactClass from 'create-react-class'
import PropTypes from 'prop-types';
var If = CreateReactClass({
  render: function() {
    if (this.props.items.length) {
      return this.props.children;
    } else {
      return false;
    }
  }
});
If.propTypes = {
  items: PropTypes.array.isRequired
};
export default If;
