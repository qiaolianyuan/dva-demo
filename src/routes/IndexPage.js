import React, { Component } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './IndexPage.css';
import { Link } from 'react-router-dom';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.age,
      name: props.name
    }
  }

  componentDidMount() {
    this.setState({ name: 'JOELY'})
  }

  change(){
    setTimeout(() => {
      this.setState({ name: 'BRYANT' })
    })
  }

  render() {
    const { age, name } = this.state
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome {name}, {age}, to dva!</h1>
        <Link to = '/users'>UserPage</Link>
        <Link to = '/products'>Products</Link>
        <div onClick={this.change.bind(this)} className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
        </ul>
      </div>
    )
  }
}

IndexPage.propTypes = {
  age: PropTypes.string,
  name: PropTypes.string
};

IndexPage.defaultProps = {
  age: '21',
  name: ''
}

export default connect()(IndexPage);
