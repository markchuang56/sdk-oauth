function mySettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Fitbit Account</Text>}>
        <Oauth
          settingsKey="oauth"
          title="Login"
          label="Fitbit"
          status="Login"
          authorizeUrl="https://www.fitbit.com/oauth2/authorize"
          requestTokenUrl="https://api.fitbit.com/oauth2/token"
          clientId="22D6FQ"
          clientSecret="be9c1fb74ca0d6b8c93deb35ba305093"
          scope="sleep"
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
