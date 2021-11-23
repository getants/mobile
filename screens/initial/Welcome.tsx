import React, { useCallback, useState } from 'react';
import styled from 'styled-components/native';
import { LinearProgress, Text, Flex } from '../../components';
import { INSERT_RESUME, RESUME_AGGREGATE } from '../../graphqls';
import {
  // useAuth,
  useFocusEffect,
  useQuery,
  useMutation,
  useTimeoutFn,
} from '../../utils/hooks';
import { style as s, space } from '../../utils/tokens';
// import { RootStackEnum, MainStackEnum } from '../../utils/enums';
import type {
  ResumeAggregateData,
  // WelcomeScreenNavigationProp,
} from '../../utils/types';

const StyledBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;
const TinyMessage = styled(Text)`
  text-align: center;
  font-size: 12px;
  font-weight: 300;
  line-height: ${space(4)};
  margin-top: ${space(2)};
`;

type Props = {
  // navigation: WelcomeScreenNavigationProp;
};

const WelcomeScreen: React.FC<Props> = () => {
  // const { navigation } = props;
  // const { session: { jwt, user } } = useAuth();
  const [message, setMessage] = useState<string>('Setup, please wait...');

  const { data: aggregateResume } = useQuery<ResumeAggregateData>(
    RESUME_AGGREGATE,
    {
      variables: {
        limit: 1,
        offset: 0,
        order_by: { created_at: 'desc' },
        where: {
          // user_id: { _eq: user?.id },
        },
      },
      fetchPolicy: 'cache-and-network',
      notifyOnNetworkStatusChange: true,
    }
  );

  const [createResume] = useMutation(INSERT_RESUME);

  const [, cancelTimer, resetTimer] = useTimeoutFn(async () => {
    if (aggregateResume === undefined) {
      setMessage('New profile setup...');
      resetTimer();
    } else if (aggregateResume?.resumes_aggregate?.nodes?.length === 0) {
      setMessage('Creating nessesary data...');
      await createResume({
        variables: {
          object: {
            // user_id: user.id,
            name: 'default',
            summary: 'Auto-generated',
          },
        },
      });
      setMessage('Redirect...');
      // navigation.navigate(RootStackEnum.MainStack, {
      //   screen: MainStackEnum.ProfileStack,
      // });
    } else {
      // navigation.navigate(RootStackEnum.MainStack);
    }
  }, 1000);

  useFocusEffect(
    useCallback(() => {
      resetTimer();
      return () => cancelTimer();
    }, [resetTimer, cancelTimer])
  );

  // useEffect(() => {
  //   if (!user && !jwt) {
  //     navigation.navigate(RootStackEnum.AuthStack);
  //   }
  // }, [jwt, user, navigation]);

  return (
    <StyledBackground
      source={require('assets/splash.png') /* eslint-disable-line */}
    >
      <Flex direction="column" justify="space-between" height="100%">
        <Flex padding={10} />

        <Flex paddingBottom={180}>
          <LinearProgress color="primary" style={s('h-1 w-180 mx-auto')} />
          <TinyMessage>{message}</TinyMessage>
        </Flex>
      </Flex>
    </StyledBackground>
  );
};

export default WelcomeScreen;
