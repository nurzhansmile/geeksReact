import React from "react";
import style from "./registrationForm.module.scss";
import { Button, Form, Input } from "antd";
import { toast } from "react-toastify";
export const RegistrationForm = () => {
  const onClick = (data) => {
    console.log(data);
    toast.success("Форма отправлена")
  };
  return (
    <div className={style.wrap}>
      <Form layout="vertical" onFinish={onClick}>
        <Form.Item
          label="name"
          name={"name"}
          rules={[
            { required: true },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="E-mail"
          name={"email"}
          rules={[
            { required: true },
            {
              pattern: /^[^@]{2,}@[^@]+\.[^@]{2,}$/,
              message:"Email должен содержать минимум 2 символа до @ и валидный домен!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name={"password"}
          rules={[
            { required: true },
            { min: 8, messege: "Пароль должен содержать не менее 8 символов" },
            {
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
              message:"Пароль должен содержать заглавные, строчные буквы и цифру",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
