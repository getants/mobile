import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components/native';
import {
  ProgressBar,
  Subheading,
} from '@components';
import {
  INSERT_RESUME,
  RESUME_AGGREGATE,
} from '@graphqls/users';
import {
  useAuth,
  useFocusEffect,
  useQuery,
  useMutation,
  useTimeoutFn,
} from '@hooks';
import type { ResumeAggregateData } from '@screens/profile/types';
import { space } from '@styles/helpers';
import {
  // InitialStackEnum,
  RootStackEnum,
  MainStackEnum,
} from '@stacks/Types';
import type { WelcomeScreenNavigationProp } from '@stacks/Types';

const StyledBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;
const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 100px;
  padding: 40px 20px;
  height: 100%;
`;
const Section = styled.View`
  margin: 40px 20px 80px;
`;
const Space = styled.View`
  padding: ${space(1)};
`;
const TinyMessage = styled(Subheading)`
  text-align: center;
  font-size: 12px;
  font-weight: 300;
  line-height: ${space(4)};
  margin-top: ${space(2)};
`;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const WelcomeScreen = (props: Props) => {
  const { navigation } = props;
  const { session: { jwt, user } } = useAuth();
  const [message, setMessage] = useState<string>('Setup, please wait...');

  const {
    data: aggregateResume,
  } = useQuery<ResumeAggregateData>(
    RESUME_AGGREGATE,
    {
      variables: {
        limit: 1,
        offset: 0,
        order_by: { created_at: 'desc' },
        where: {
          user_id: { _eq: user?.id },
        },
      },
      fetchPolicy: 'cache-and-network',
      notifyOnNetworkStatusChange: true,
    },
  );

  const [createResume] = useMutation(INSERT_RESUME);

  const [, cancelTimer, resetTimer] = useTimeoutFn(async () => {
    if (aggregateResume === undefined) {
      setMessage('New profile setup...');
      resetTimer();
    } else if (aggregateResume?.resume_aggregate?.nodes?.length === 0) {
      setMessage('Creating nessesary data...');
      await createResume({
        variables: {
          object: {
            user_id: user.id,
            name: 'default',
            summary: 'Auto-generated',
          },
        },
      });
      setMessage('Redirect...');
      navigation.navigate(RootStackEnum.MainStack, {
        screen: MainStackEnum.ProfileStack,
      });
    } else {
      navigation.navigate(RootStackEnum.MainStack);
    }
  }, 1000);

  useFocusEffect(
    useCallback(() => {
      resetTimer();
      return () => cancelTimer();
    }, [resetTimer, cancelTimer]),
  );

  useEffect(() => {
    if (!user && !jwt) {
      navigation.navigate(RootStackEnum.AuthStack);
    }
  }, [jwt, user, navigation]);

  return (
    <StyledBackground source={require('assets/splash.png') /* eslint-disable-line */}>
      <Wrapper>
        <Space />

        <Section>
          <ProgressBar />
          <TinyMessage>{message}</TinyMessage>
        </Section>
      </Wrapper>
    </StyledBackground>
  );
};

export default WelcomeScreen;
