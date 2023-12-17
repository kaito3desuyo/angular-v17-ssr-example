import { ServerlessAdapter, ServerlessHandler } from '@h4ad/serverless-adapter';
import { ApiGatewayV2Adapter } from '@h4ad/serverless-adapter/lib/adapters/aws';
import { ExpressFramework } from '@h4ad/serverless-adapter/lib/frameworks/express';
import { LazyFramework } from '@h4ad/serverless-adapter/lib/frameworks/lazy';
import { DefaultHandler } from '@h4ad/serverless-adapter/lib/handlers/default';
import { PromiseResolver } from '@h4ad/serverless-adapter/lib/resolvers/promise';
import { Express } from 'express';
import { app } from './app';

const framework = new LazyFramework(new ExpressFramework(), async () => app());

export const main: ServerlessHandler<Express> = ServerlessAdapter.new(null)
  .setFramework(framework)
  .setHandler(new DefaultHandler())
  .setResolver(new PromiseResolver())
  .addAdapter(new ApiGatewayV2Adapter())
  .build();
