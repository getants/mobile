# GetAnts Mobile

This repo stores Expo code (React Native framework) for Ants. More details documentation will be updated after the app launchs for Alpha test.

## Expo project pages:

- Production channel
- [Staging channel](https://expo.io/@getants/getants?release-channel=staging)

## Development

### Run on physical Apple devices
TODO: find a device and write the doc hehe.

### If you want to run on physical Android device

- Make sure the USB debugging is enabled on your phone.
- Recommended to use the LAN mode in connection. Check it at the left sidebar of `localhost:19002`
- Recommended to use wifi on both working machine and phone, because it's hard to use cable on phone.
- Run `./scripts/dev.sh` to get your current IP. TODO: write script for Windows/Linux later.
- Change the value in `./utils/constants.ts` with that IP.
- Check the connection with `adb devices`, something like this `5HWOXOC65TLVC675	device`
- Now it can see with `yarn android`

## Working with React Navigation

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
