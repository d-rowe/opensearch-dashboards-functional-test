/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  defaultCommandTimeout: 60000,
  requestTimeout: 60000,
  responseTimeout: 60000,
  reporter: 'cypress-multi-reporters',

  reporterOptions: {
    configFile: 'reporter-config.json',
  },

  viewportWidth: 2000,
  viewportHeight: 1320,

  env: {
    openSearchUrl: 'http://localhost:9200',
    remoteDataSourceNoAuthUrl: 'http://localhost:9201',
    remoteDataSourceBasicAuthUrl: 'https://localhost:9202',
    remoteDataSourceBasicAuthUsername: 'admin',
    remoteDataSourceBasicAuthPassword: 'admin',
    SECURITY_ENABLED: false,
    AGGREGATION_VIEW: false,
    MULTITENANCY_ENABLED: true,
    username: 'admin',
    password: 'myStrongPassword123!',
    ENDPOINT_WITH_PROXY: false,
    MANAGED_SERVICE_ENDPOINT: false,
    VISBUILDER_ENABLED: true,
    DATASOURCE_MANAGEMENT_ENABLED: false,
    ML_COMMONS_DASHBOARDS_ENABLED: true,
    WAIT_FOR_LOADER_BUFFER_MS: 0,
    DASHBOARDS_ASSISTANT_ENABLED: false,
    WORKSPACE_ENABLED: false,
    SAVED_OBJECTS_PERMISSION_ENABLED: false,
    DISABLE_LOCAL_CLUSTER: false,
    browserPermissions: {
      clipboard: 'allow',
    },
    UIMETRIC_ENABLED: false,
  },

  clientCertificates: [
    {
      url: 'https://localhost:9200/.opendistro-ism*',
      ca: ['cypress/resources/root-ca.pem'],
      certs: [
        {
          cert: 'cypress/resources/kirk.pem',
          key: 'cypress/resources/kirk-key.pem',
          passphrase: '',
        },
      ],
    },
    {
      url: 'https://localhost:9200/.opendistro-ism-config/_update_by_query/',
      ca: ['cypress/resources/root-ca.pem'],
      certs: [
        {
          cert: 'cypress/resources/kirk.pem',
          key: 'cypress/resources/kirk-key.pem',
          passphrase: '',
        },
      ],
    },
  ],

  e2e: {
    baseUrl: 'http://localhost:5601',
    specPattern: 'cypress/integration/**/*_spec.{js,jsx,ts,tsx}',
  },
});
