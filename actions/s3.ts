import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const bucketName = process.env.BUCKET_NAME ?? "";
const bucketRegion = process.env.BUCKET_REGION ?? "";
const accessKeyId = process.env.ACCESS_KEY_ID ?? "";
const secretAccessKey = process.env.SECRET_ACCESS_KEY ?? "";

const s3 = new S3Client({
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
  },
  region: bucketRegion
})

export const getImageUrlFromS3Bucket = async (imageName: string) => {
  const params = {
    Bucket: bucketName,
    Key: imageName
  }

  const command = new GetObjectCommand(params);
  const url = await getSignedUrl(s3, command, { expiresIn: 3600 });

  return url;
}