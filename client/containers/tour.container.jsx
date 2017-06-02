import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Spinner from '../components/spinner.jsx';

import get from 'lodash/get';

class Tour extends Component {
  render() {
    const { isReady, content } = this.props;
    return (
      <main className={classNames('tour', { loading: !isReady })}>
        {
          (!isReady) && <Spinner />
        }
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </main>
    );
  }
}

Tour.propTypes = {
  content: PropTypes.string,
  isReady: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  content: get(state, ['tours', 'content']),
  isReady: get(state, ['tours', 'isReady']),
});

export default connect(mapStateToProps)(Tour);
