import {RNS3} from 'react-native-aws3';

const config = {
  // keyPrefix: 'uploads/',
  bucket: 'tweeterdemoproject',
  region: 'ap-south-1',
  accessKey: 'AKIAR7LJ6OQVELK5B252',
  secretKey: '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',
  successActionStatus: 201,
};

export const uploadImageToAWS = async file => {
  return RNS3.put(file, config)
    .then(response => {
      if (response.status !== 201)
        throw new Error('Failed to upload image to S3');
      console.log(response.body, 'fgvhuij');
      return response.postResponse.location;
    })
    .catch(e => console.log(e, 'error'));
};
