import {RNS3} from 'react-native-aws3';

const config = {
  keyPrefix: 'uploads/',
  bucket: 'your-bucket',
  region: 'us-east-1',
  accessKey: 'your-access-key',
  secretKey: 'your-secret-key',
  successActionStatus: 201,
};

export const uploadImageToAWS = async file => {
  return RNS3.put(file, config).then(response => {
    if (response.status !== 201)
      throw new Error('Failed to upload image to S3');
    console.log(response.body);
    return response.postResponse.location;
  });
};
