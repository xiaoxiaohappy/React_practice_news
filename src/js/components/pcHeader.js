import React from 'react';
import {Row, Col} from 'antd';
import {
    Menu, Icon,
    Tabs, message, Form, Modal, Input, Button, Checkbox
} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class PCHeader extends React.Component {
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


    render() {

        let {getFieldProps} = this.props.form;

        //这些都是用的 ant design的设计样式
        const userShow = this.state.hasLogined
            ?
            <Menu.Item key="logout" class="register">
                <Button type="primary" htmlType="button">{this.state.userNickName} </Button>

                {/*空格&nbsp;*/}
                &nbsp;&nbsp;
                <link target="_blank">
                    <Button type="dashed" htmlType="button">个人中心</Button>
                </link>
                &nbsp;&nbsp;

                <Button type="ghost" htmlType="button">退出</Button>

            </Menu.Item>
            :
            <Menu.Item key="register" class="register">
                <Icon type="user"/>注册/登录
            </Menu.Item>;


        return (
            <header>
                <Row>
                    {/*一行有24格*/}

                    {/*占两格左留白*/}
                    <Col span={2}></Col>

                    <Col span={4}>
                        <a href="/" class="logo">
                            <img src="./src/images/logo.png" alt="logo"/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        {/*mode="horizontal"水平排列*/}
                        {/*selectedKeys={[this.state.current]}，默认选中高亮的 ,值初始化成了Menu.Item key="top" 的值，在上面的constructor()中 */}
                        <Menu mode="horizontal" onClick={this.handleClick.bind(this)}
                              selectedKeys={[this.state.current]}>
                            <Menu.Item key="top">
                                {/*Icon type="appstore"  设置哪种类型的小图标*/}
                                <Icon type="appstore"/>头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="appstore"/>社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="appstore"/>国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="appstore"/>国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="appstore"/>娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="appstore"/>体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <Icon type="appstore"/>科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <Icon type="appstore"/>时尚
                            </Menu.Item>
                            {userShow}
                        </Menu>


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


                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        );
    };
}


//涉及到ant desigin中的form，需要这样的语句 create一下，官网有文档例子
export default PCHeader = Form.create({})(PCHeader);
