import React, { Component } from 'react';
import { Menu } from 'antd';

class RightMenu extends Component {
  render() {
    return (
			<Menu mode={this.props.mode}>
        <Menu.Item key="english">
          <a href="">English</a>
        </Menu.Item>
        <Menu.Item key="korean">
          <a href="">Korean</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;
