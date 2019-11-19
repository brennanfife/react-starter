import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { FormScreen, FormItem, FormComponentProps } from 'packages/ant-form-helpers';

import { LoginPayload } from 'common/ApiTypes';
import { Button, Form, Input } from 'common/components';
import rules from 'common/rules';

import { AUTH_ROUTER_PATHS } from '../../constants';
import AuthLayout from '../../components/AuthLayout';

type Props = FormComponentProps<LoginPayload> & {
  isLoading: boolean;
  onSubmit: (values: LoginPayload) => void;
};

const LoginForm = ({ form, isLoading, onSubmit }: Props) => {
  const { t } = useTranslation();

  return (
    <AuthLayout>
      <FormScreen<LoginPayload> form={form} onSubmit={onSubmit}>
        {({ hasErrors, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FormItem<LoginPayload>
              id="email"
              rules={[rules.required(t), rules.email(t)]}
              label={t('fields.email.label', { defaultValue: 'E-mail' })}
            >
              <Input
                placeholder={t('logIn.email.placeholder', { defaultValue: 'E-mail' })}
                autoFocus
              />
            </FormItem>
            <FormItem<LoginPayload>
              id="password"
              rules={[rules.required(t), rules.password(t)]}
              label={t('fields.password.label', { defaultValue: 'Password' })}
            >
              <Input.Password
                placeholder={t('logIn.password.placeholder', {
                  defaultValue: 'Enter Password',
                })}
              />
            </FormItem>
            <Form.Item>
              <Link to={AUTH_ROUTER_PATHS.forgottenPassword}>
                {t('logIn.forgotPassword', { defaultValue: 'Forgot password?' })}
              </Link>
            </Form.Item>
            <Button block type="primary" htmlType="submit" loading={isLoading} disabled={hasErrors}>
              {t('logIn.logIn', { defaultValue: 'Log In' })}
            </Button>
          </Form>
        )}
      </FormScreen>
    </AuthLayout>
  );
};

export default Form.create<Props>()(LoginForm);
