import { S3Client } from "@aws-sdk/client-s3";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";

const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function createPresignedUploadUrl(key: string) {
  try {
    const { url, fields } = await createPresignedPost(s3Client, {
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: key,
      Conditions: [
        ["content-length-range", 0, 10485760], // up to 10MB
        ["starts-with", "$Content-Type", "image/"],
      ],
      Expires: 600, // 10 minutes
    });

    return { url, fields };
  } catch (error) {
    console.error("Error creating presigned URL:", error);
    throw error;
  }
} 