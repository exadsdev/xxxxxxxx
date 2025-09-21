import { SITE } from "./seo.config";
import { products } from "./lib/products";

export default async function sitemap() {
  const now = new Date().toISOString();

  const staticPages = ["", "/products", "/search", "/#faq", "/#contact"].map((p) => ({
    url: `${SITE}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const productPages = products.map((p) => ({
    url: `${SITE}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticPages, ...productPages];
}
