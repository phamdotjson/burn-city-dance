const bucketName = process.env.BUCKET_NAME ?? "";
const bucketRegion = process.env.BUCKET_REGION ?? "";
const accessKeyId = process.env.ACCESS_KEY_ID ?? "";
const secretAccessKey = process.env.SECRET_ACCESS_KEY ?? "";
const distributionName = process.env.CLOUDFRONT_DISTRIBUTION_DOMAIN_NAME ?? "";

export const getImageUrlFromS3Bucket = async (imageName: string) => {
  return `https://${distributionName}/${imageName}`;
}