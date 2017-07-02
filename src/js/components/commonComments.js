/**
 * Created by xiaoxiao on 2017/7/2.
 */
import React from 'react';
import {Row, Col} from 'antd';
import {
    Menu,
    Icon,
    Tabs,
    message,
    Form,
    Input,
    Button,
    CheckBox,
    Modal
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
import {Router, Route, Link, browserHistory} from 'react-router'
class CommonComments extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: ''
        };
    }
        componentDidMount() {
            //获取 评论
            var myFetchOptions = {
                method: 'GET'
            };
            fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
                this.setState({comments: json});
            })
        };


        handleSubmit(e) {
            //添加评论
            e.preventDefault();
            var myFetchOptions = {
                method: 'GET'
            };

            //getFieldsValue是ant design中的内容，获取一组输入框的值
            var formdata = this.props.form.getFieldsValue();
            //remark在底下定义的组件中有，是放评论的变量
            fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions).then(response => response.json()).then(json => {
                //添加完之后，想要把数据再重新加载一下，所以调用componentDidMount()
                this.componentDidMount();
            })
        };
        render() {
            let {getFieldProps} = this.props.form;
            const {comments} = this.state;
            const commentList = comments.length
            ?comments.map((connent,index)=>(
                //Card是ant design中的组件，其参数均按照文档所查
                <Card key={idnex} title={comment.UserName} extra={<a href="#">发布于{comment.datetime}</a>}>
                        <p>{comment.Comments}</p>
                </Card>
                ))
                :'没有加载到任何已有的评论';

            return (
                <div class="comment">
                    <Row>
                        <Col span={24}>


                            {/*目前已有的评论*/}
                            {commentList}

                            <Form onSubmit ={this.handleSubmit.bind(this)}>
                                <FormItem label="您的评论">
                                    {/*...getFieldProps取参数，命名remark，初始化为''*/}
                                    <Input type="textarea" placeholder="请随便写" {...getFieldProps('remark',{initialValue: ''})}/>
                                </FormItem>
                                <Button type="primary" htmlType="submit">提交评论</Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
            );
        };

}

//做二次封装
export default CommonComments = Form.create({})(CommonComments);
