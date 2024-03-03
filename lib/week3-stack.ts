import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class Week3Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // I have created a new S3 bucket with the following properties:
    const s3Bucket = new s3.Bucket(this, 'MyS3Bucket', {
      encryptionKey: new kms.Key(this, 's3BucketKMSKey'),
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_ENFORCED,
      versioned: true,
    });

    s3Bucket.grantRead(new iam.AccountRootPrincipal());
  }
}

const app = new cdk.App();
new Week3Stack(app, 'S3BucketStack');
app.synth();
