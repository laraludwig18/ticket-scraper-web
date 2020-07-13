import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import base64encode from '../../utils/base64encode';

import { Button, Container, Input } from './styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const encodedPassword = base64encode(password);

      try {
        const { data } = await api.post('/ticket/auth', {
          email,
          password: encodedPassword,
        });

        localStorage.setItem('@TicketScraper:userId', data.userId);

        history.push('/home');
      } catch (err) {
        //
      }
    },
    [history, email, password],
  );

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  return (
    <Container>
      <h1>
        Faça seu login usando as credencias da sua conta ticket para obter
        informações do extrato dos seus cartões
      </h1>

      <form onSubmit={handleSubmit}>
        <Input
          name="email"
          placeholder="Digite seu e-mail"
          onChange={onChangeEmail}
        />

        <Input
          name="password"
          type="password"
          placeholder="Digite sua senha"
          onChange={onChangePassword}
        />

        <Button type="submit">Entrar</Button>
      </form>
    </Container>
  );
};

export default SignIn;
