import type { AWS } from '@serverless/typescript';

const system = 'angular-v17-ssr-example';

const serverlessConfiguration: AWS = {
  service: system,
  frameworkVersion: '3',
  plugins: ['serverless-deployment-bucket'],
  provider: {
    name: 'aws',
    stage: 'prod',
    region: 'ap-northeast-1',
    runtime: 'nodejs20.x',
    architecture: 'arm64',
    stackName: '${param:prefix}-cfstack',
    stackTags: {
      System: system,
      Stage: '${sls:stage}',
      Serverless: 'true',
    },
    deploymentBucket: {
      name: '${param:prefix}-sls-deployment-bucket',
      serverSideEncryption: 'AES256',
    },
    iam: {
      role: {
        name: '${param:prefix}-lambda-role',
      },
    },
    environment: {},
  },
  // import the function via paths
  functions: {
    app: {
      handler: `dist/${system}/server/server.main`,
      name: '${param:prefix}-lambda',
      memorySize: 1769,
      timeout: 60,
      url: true,
      package: {
        patterns: ['!**', 'dist/**'],
      },
    },
  },
  package: { individually: true },
  params: {
    default: {
      prefix: system,
    },
  },
  resources: {},
};

module.exports = serverlessConfiguration;
