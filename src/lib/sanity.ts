import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import type { FAQItem } from '../types';

export const client = createClient({  projectId: 'e2soh655',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-02-28', 
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};

export const getFaqs = async (): Promise<FAQItem[]> => {
  try {    const query = `*[_type == "faq"] | order(order asc) {
      _id,
      question,
      answer,
      order,
      category->{
        _id,
        title,
        description,
        slug
      },
      page->{
        _id,
        title,
        slug,
        "tableOfContents": *[_type == "tableOfContents" && references(^._id)] {
          _id,
          title,
          "slug": slug.current,
          subsections[]{
            title,
            "slug": slug.current
          }
        }
      }
    }`;
    
    console.log('Executing Sanity query...'); // Debug log
    const results = await client.fetch<FAQItem[]>(query);
    console.log('Query results:', results); // Debug log
    return results;
  } catch (error) {
    console.error('Error fetching FAQs from Sanity:', error);
    throw error;
  }
};

export const getPageData = async (slug: string) => {
  const query = `*[_type == "page" && slug.current == $slug][0] {
    title,
    "authorName": author->name,
    "authorImage": author->image.asset->url,
    "publishedAt": publishedAt,
    categories[]->{ title, slug },
    tableOfContents[]->{
      _id,
      title,
      order,
      "slug": slug.current,
      subsections[]{ title, "slug": slug.current }
    },
    body[]{
      _type == "table" => {
        _type,
        layoutOrientation,
        rows[]{ cells[]{ column, content, width } }
      },
      _type != "table" => @
    }
  }`;
  return await client.fetch(query, { slug });
};
