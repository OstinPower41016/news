import {RNKeycloak} from '@react-keycloak/native';

// Setup Keycloak instance as needed
// Pass initialization options as required
const keycloak = new RNKeycloak({
  realm: 'testRealm',
  url: 'https://100i.wilix.dev/auth/',
  clientId: '100i-mobile',
});

export default keycloak;
