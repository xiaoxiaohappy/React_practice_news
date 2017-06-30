/**
 * Created by xiaoxiao on 2017/6/29.
 */

import React from 'react';
import {
    Menu, Icon,
    Tabs, message, Form, Modal, Input, Button, Checkbox
} from 'antd';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

 class MobileHeader extends React.Component{
    constructor() {
        super();
        this.state = {
            //控制头部导航哪个菜单选中高亮，目前是key为'top'的小标题菜单高亮
            current: 'top',


            //模态框显示初始化false   用户昵称userNickName初始化空    userid当前还没有，初始化为0
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0
        };
    }


    setModalVisible(value) {
        this.setState({modalVisible: value})
    };

    handleClick(e) {
        if (e.key = "register") {
            this.setState({current: 'register'})

            //调用setModalVisible方法，让模态框显示
            this.setModalVisible(true);
        }
        else {
            //点击哪一个就让哪个高亮
            this.setState({current: 'e.key'})
        }
    };

    login(){
        this.setModalVisible(true);
    };

    handleSubmit(e) {
        //    页面开始向API进行提交
        e.preventDefault();//阻止冒泡

        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formData= this.props.form.getFieldsValue();
        console.log(formData);//是个对象，把模态框中账号、密码、确认密码获取到


        //采用fetch（fetch.then.then）     postman是chrome的插件。进行接口的测试
        //以下的参数中username=userName是登陆用的
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName="+formData.r_userName+"&r_password="+formData.r_password+"&r_confirmPassword="+formData.r_confirmPassword,myFetchOptions).
        then(response=>response.json()).then(json=>{
            console.log(json)        //response.json()是json格式化
            this.setState({userNickName:json.NickUserName,userid:json.UserId});
        });

        //ant design里的样式
        message.success("请求成功！");
        this.setModalVisible(false);

    }

    render(){
        let {getFieldProps} = this.props.form;



        //这里和pc不一样
        //在前端审查元素的时候，它是标签i 所以在css中对此进行了布局设计
        const userShow = this.state.hasLogined
                ?
            <link>
                <Icon type="inbox"/>
            </link>
                :
            <Icon type="user" onClick={this.login.bind(this)}/>;
        //这里和pc不一样






        return (
            <div id="mobileheader">
                <header>
                    <img src="./src/images/logo.png" alt="logo" />
                    <span>ReactNews</span>
                    {userShow}
                </header>



                {/*wrapClassName是对话框外层容器的类名*/}
                {/*okText="关闭"若无，则默认ok的button上的文字是"确定"*/}
                <Modal title="用户中心" wrapClassName="vertical-center-moal" visible={this.state.modalVisible}
                       onCancel={() => this.setModalVisible(false)} onOk={() => this.setModalVisible(false)}
                       okText="关闭">
                    <Tabs type="card">
                        <TabPane tab="注册" key="2">
                            <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    <Input placeholder="请输入您的账号" {...getFieldProps('r_userName')}/>
                                </FormItem>
                                <FormItem label="密码">
                                    <Input type="password" placeholder="请输入您的密码" {...getFieldProps('r_password')}/>
                                </FormItem>
                                <FormItem label="确认密码">
                                    <Input type="password" placeholder="请再次输入您的密码" {...getFieldProps('r_confirmPassword')}/>
                                </FormItem>
                                <Button type="primary" htmlType="submit" >注册</Button>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>




            </div>
        );
    };
}


export default MobileHeader = Form.create({})(MobileHeader);