export default async function sitemap() {
  const baseUrl = "https://www.putraduniacargo.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      name: "Home",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      name: "Services",
      priority: 0.9,
      description:
        "Pelajari lebih lanjut tentang Putra Dunia Cargo dan komitmen kami terhadap layanan berkualitas.",
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      name: "Contact",
      description:
        "Hubungi Putra Dunia Cargo untuk pertanyaan dan dukungan pelanggan.",
    },
  ];
}
