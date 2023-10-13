export interface BlogMetadataProps {
  title: string;
  date: Date;
  slug: string;
  image: string;
  imageAlt: string;
  author: string;
  reviewdBy: string;
  excerpt: string;
  tableOfContents: Array<{
    label: string;
    path: string;
  }>;
}
