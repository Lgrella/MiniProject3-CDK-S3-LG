#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { Week3Stack } from '../lib/week3-stack';

const app = new cdk.App();
new Week3Stack(app, 'Week3Stack');
