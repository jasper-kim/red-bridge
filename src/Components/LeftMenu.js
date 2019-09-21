import React, { Component } from 'react';
import { Menu } from 'antd';

class LeftMenu extends Component {
  render() {
    return (
			<Menu mode={this.props.mode}>
      	<Menu.Item key="about-us">
          <a href="">About Us</a>
        </Menu.Item>
        <Menu.Item key="what-we-do">
          <a href="">What We do</a>
        </Menu.Item>
        <Menu.Item key="contact-us">
          <a href="">Contact Us</a>
        </Menu.Item>
        <Menu.Item key="news">
          <a href="">News</a>
        </Menu.Item>
        <Menu.Item key="games">
          <a href="">Games</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default LeftMenu;
