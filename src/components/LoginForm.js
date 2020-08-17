import React from "react";
import { Form, Input, Checkbox } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const LoginForm = (props) => {
  const onFinish = values => {
    props.submitHandler(values)
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <section className='login form'>
      <div className='row'>
        <h2 id='/login'>Log In</h2>
        <Form
          {...layout}
          name='basic'
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className='sign-up-form'
        >
          <Form.Item
            label='Username'
            name='username'
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <div className='title'>
              <input
                className='btn-full'
                type='submit'
                value='Log In'
                />
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};
export default LoginForm;

