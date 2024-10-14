export default async function sitemap() {
  const baseUrl = "https://www.putraduniacargo.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];
}
