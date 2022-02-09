# GetAnts Mobile
This repo stores Expo code (React Native framework) for Ants. More details documentation will be updated after the app launchs for Alpha test.

Expo project pages:

- Production channel
- [Staging channel](https://expo.io/@getants/getants?release-channel=staging)

### Reset navigation state:
Just provide the state tree like this:
```
  CommonActions.reset({
    routes: [
      {
        name: 'MainStack',
        state: {
          routes: [
            {
              name: 'JobStack',
              state: {
                routes: [
                  {
                    name: 'SingleJob',
                    params: { jobId, jobTitle: 'abc' },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  }),
```

### Navigate to another nested screen:
Refer to [this documentation](https://reactnavigation.org/docs/nesting-navigators) to learn more.
```
  navigation.navigate(MainStackEnum.InboxStack, {
    screen: InboxStackEnum.SingleConversation,
    params: {
      conversationId: id,
      userId,
      jobId: job.id,
      screen: ...,
      params: {
        screen: ...,
        params: ...,
      },
    },
  });
```
