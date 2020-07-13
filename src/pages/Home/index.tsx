import React, { useEffect, useState } from 'react';

import formatValue from '../../utils/formatValue';
import api from '../../services/api';

import {
  Container,
  UserContainer,
  StatementContainer,
  StatementItemContainer,
  CardInfoContainer,
} from './styles';

interface IUser {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
}

interface IStatementItem {
  dateFormatted: string;
  valueFormatted: string;
  description: string;
  valueParsed: number;
  date: string;
}

interface ICardStatement {
  cardType: string;
  balance: number;
  balanceFormatted: string;
  statements: IStatementItem[];
}

const Home: React.FC = () => {
  const [userData, setUserData] = useState<IUser>({} as IUser);
  const [cardStatements, setCardStatements] = useState<ICardStatement[]>([]);

  useEffect(() => {
    async function getInitialData() {
      const userId = localStorage.getItem('@TicketScraper:userId');

      const [userResponse, statementResponse] = await Promise.all([
        api.get(`/ticket/user/${userId}`),
        api.get<ICardStatement[]>(`/ticket/statement/${userId}`),
      ]);

      const formattedCardStatement = statementResponse.data.map(
        (cardStatement: ICardStatement) => ({
          ...cardStatement,
          balanceFormatted: formatValue(cardStatement.balance),
          statements: cardStatement.statements.map((statement) => ({
            ...statement,
            valueFormatted: formatValue(statement.valueParsed),
            dateFormatted: statement.date.split(' ')[0],
          })),
        }),
      );

      setUserData(userResponse.data.user);
      setCardStatements(formattedCardStatement);
    }

    getInitialData();
  }, []);

  return (
    <Container>
      <UserContainer>
        <h3>{userData.name}</h3>
        <p>{userData.email}</p>
      </UserContainer>

      <StatementContainer>
        {cardStatements.map((cardStatement) => (
          <>
            <hr />
            <CardInfoContainer>
              <p>{`Cartão ${cardStatement.cardType}`}</p>
              <p>{`Saldo ${cardStatement.balanceFormatted}`}</p>
            </CardInfoContainer>

            {cardStatement.statements.map((statement) => (
              <>
                <hr />
                <StatementItemContainer>
                  <p>{statement.description}</p>
                  <div>
                    <span>{statement.valueFormatted}</span>
                    <p>{statement.dateFormatted}</p>
                  </div>
                </StatementItemContainer>
              </>
            ))}
          </>
        ))}
      </StatementContainer>
    </Container>
  );
};

export default Home;
