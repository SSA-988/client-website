import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url"

export const config = {
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId:process.env.NEXT_PUBLIC_SANITY_PROEJCT_ID!,
    apiVersion:"2021-03-25",
    useCdn:process.env.NODE_ENV === "production"
}

export const sanityClient = createClient(config);

import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(config)

export default function urlFor(source:any) {
  return builder.image(source)
}