import React, { Component } from 'react';
// 对react ui 阿里的antd 部分引用
import { Table, Pagination, Input, Row, Button, Modal, Form } from 'antd'
import './App.css';
import 'antd/dist/antd.css'
const { Search } = Input;
const FormItem = Form.Item
const { confirm } = Modal

class App extends Component {
  modal (type, row) {
    // console.log(type)
    this.setState({
      visible: true,
      modalType: type
    }, () => {
      this.props.form.resetFields();
      if (type === 'add') return;
      this.props.form.setFieldsValue({
        username: row.username,
        age: row.age,
        address: row.address
      })
      this.setState({editRow: row})
    })
  
  }
  handleOk () {
    this.props.form.validateFieldsAndScroll((err, values) => {
      const {username, age, address} = values
      const _id = this.state.id++
      if (this.state.modalType === 'add')  {
        this.state.users.push({
          username,age,address,
          id: _id
        })
      } else {
        this.state.users.forEach((item)=>{
          if(item.id === this.state.editRow.id) {
              item= Object.assign(item,values)
          }
        })
      }

      if (!err) {
        this.setState({
          visible: false,
        })
      }
    })
  }
  remove (row) {
    const that = this  //或者写箭头函数
    confirm({
      title: "是否删除该用户",
      okText: "是",
      cancelText: "否",
      onOk () {
        const _users = that.state.users.filter(data => {
          return data.id !== row.id
        });
        that.setState({
          users: _users
        })
      }
    })
  }
  state = {
    visible: false,
    users: [{
      username: 'zk',
      age: 18,
      address: '杭州',
      id: 1
    }],
    modalType: "add",
    id: 3,
    editRow:{}
  }
  
  columns = [
    {
      dataIndex: "username",
      title: "用户"
    },
    {
      dataIndex: "age",
      title: "年龄"
    },
    {
      dataIndex: "address",
      title: "地址"
    },
    {
      dataIndex: "action",
      title: "操作",
      width: 200,
      render: (text, row) => {
        return (
          <div>
            <Button type="primary" onClick={() => {this.modal('edit', row)}}>编辑</Button>
            <Button type="danger" style={{marginLeft: 10}} onClick={() => this.remove(row)}>删除</Button>
          </div>
        )
      }
    }
]
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    }
    return (
      <div className="App">
        <Row>
          <Search style={{width: 300}}/>
          <Button type="primary" style={{marginLeft: 20}} onClick={() => this.modal('add')}>添加用户</Button>
        </Row>
        <Row style={{paddingTop: 20}}>
          <Table dataSource={this.state.users} columns={this.columns} rowKey={row => row.id} bordered pagination={false} />
            
        </Row>

        <Modal title={this.state.modalType === 'add' ? "添加用户" : "编辑用户"} visible={this.state.visible} onCancel={() => this.setState({ visible: false })} onOk={() => this.handleOk()}>
          <Form>
            <FormItem label="用户" {...formItemLayout}>
              {
                getFieldDecorator('username', {
                  rules: [{
                    required: true,
                    message: 'please input your username'
                  }]
                })
                (<Input placeholder="UserName" />)
              }
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {
                getFieldDecorator ('age', {
                  rules: [{
                    required: true,
                    message: 'please input your age'
                  }]
                }) (<Input placeholder="Age"/>)
              }
            </FormItem>
            <FormItem label="地址" {...formItemLayout}>
              {
                getFieldDecorator ('address', {
                  rules: [{
                    required: true,
                    message: 'please input your address'
                  }]
                }) (<Input placeholder="address"/>)
              }
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default Form.create()(App);
