import { supabase } from './supabase';

export async function uploadImage(file: File, bucket: string = 'gallery') {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `${fileName}`;

    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file);

    if (error) throw error;

    const { data: publicUrl } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);

    return publicUrl.publicUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
}

export async function deleteImage(path: string, bucket: string = 'gallery') {
  try {
    const { error } = await supabase.storage
      .from(bucket)
      .remove([path]);

    if (error) throw error;
  } catch (error) {
    console.error('Error deleting image:', error);
    throw error;
  }
}

export async function listImages(bucket: string = 'gallery') {
  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .list();

    if (error) throw error;

    return data;
  } catch (error) {
    console.error('Error listing images:', error);
    throw error;
  }
} 