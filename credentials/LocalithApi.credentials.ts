import {
  IAuthenticateGeneric,
  ICredentialTestRequest,
  ICredentialType,
  INodeProperties,
} from 'n8n-workflow';

export class LocalithApi implements ICredentialType {
  name = 'localithApi';
  displayName = 'Localith API';
  icon = 'file:../nodes/Localith/localith.svg' as const;
  documentationUrl = 'https://embedsocial.com/app/api/documentation';
  properties: INodeProperties[] = [
    {
      displayName: 'API Token',
      name: 'apiToken',
      type: 'string',
      typeOptions: { password: true },
      default: '',
      required: true,
      hint: 'Find your API token in Localith → Settings → API',
    },
  ];

  authenticate: IAuthenticateGeneric = {
    type: 'generic',
    properties: {
      headers: {
        Authorization: '={{$credentials.apiToken}}',
      },
    },
  };

  test: ICredentialTestRequest = {
    request: {
      baseURL: 'https://embedsocial.com/app/api',
      url: '/rest/v1/listings',
      method: 'GET',
    },
  };
}