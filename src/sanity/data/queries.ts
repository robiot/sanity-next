import 'server-only';

import { groq } from 'next-sanity';

export const SETTINGS_QUERY = groq`*[_type == "settings"][0]`;

export const PAGE_QUERY = groq`
*[_type == "page" && slug.current == $slug][0] {
  ...,
  sections[] {
    ...,
    defined(image) => {
      image {
        ...,
        asset->{
          ...,
          metadata
        }
      }
    },
    defined(images) => {
      images[] {
        ...,
        asset->{
          ...,
          metadata
        }
      }
    },
    defined(content) => {
      content[] {
        ..., 
        _type == 'images' => {
          ...,
          asset->{
            ...,
            metadata
          }
        },
        _type == 'image' => {
          ...,
          asset->{
            ...,
            metadata
          }
        }
      }
    }
  }
}
`;

export const CATEGORIES_QUERY = groq`
  *[_type == "category"]{
    _id,
    title,
    description
  }
`;
