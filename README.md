# Mobile

[Backend](https://github.com/getants/backend#readme) &nbsp;&nbsp;•&nbsp;&nbsp; [Console](https://github.com/getants/console#readme) &nbsp;&nbsp;•&nbsp;&nbsp; [System](https://github.com/getants/system#readme) &nbsp;&nbsp;•&nbsp;&nbsp; **[Mobile](https://github.com/getants/mobile#readme)** &nbsp;&nbsp;•&nbsp;&nbsp; [Landing](https://github.com/getants/landing#readme)

---

This repo stores Expo code (React Native framework) for Ants. More details documentation will be updated after the app launchs for Alpha test.

## Expo project pages:

- Production channel
- [Staging channel](https://expo.io/@getants/getants?release-channel=staging)

## Development

### Make sure the backend is up and running

- Refer to [backend](https://github.com/getants/backend#readme) doc to learn more

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

### Setup ngrok

When working with signup process, using ngrok to expose your mailhog local server

- Follow [this doc](https://ngrok.com/download) to setup ngrok
- When backend start, note down the mailhog port, it's 4 numbers like this
```
ℹ Emails will be sent to http://localhost:8867
```
- Run the following to get the url:
```
ngrok http 8867 // Your port will be different
```
- It will open a UI, note the forward url, it looks like:
```
Forwarding       http://92832de0.ngrok.io -> localhost:8867
```
- After signing up, follow that path to see confirmation email on phone.

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
