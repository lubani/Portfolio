import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'hfjgtc04', // replace with your actual project ID
    dataset: 'production', // or the dataset you created
    apiVersion: '2024-07-27', // use the current date
    useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
