import config from "@/app/config/config";

export function extractPreviewImage(content, placeholderUrl = "/placeholder.svg?height=200&width=300") {
  const baseUrl = config.blogEndpoint || "http://localhost:3000"; // Fallback
  // console.log("content", content);
  const imgRegex = /<img[^>]+src="([^">]+)"/;
  const match = content.match(imgRegex);
  // console.log(`Match: ${match}`);
  const imageUrl = match ? match[1] : placeholderUrl;

  // Prepend baseUrl only if the URL is relative (doesn't start with http(s):// or //)
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://") || imageUrl.startsWith("//")) {
    return imageUrl;
  }
  return `${baseUrl}${imageUrl.startsWith("/") ? "" : "/"}${imageUrl}`;
}

export function truncateText(text, maxLength) {
  const cleanText = text.replace(/<[^>]*>/g, '');
  if (cleanText.length <= maxLength) return cleanText;
  return cleanText.substring(0, maxLength) + '...';
}

export function getBlogUrl(blog) {
  if (blog.slug && blog.blogIdUID) {
    return `/resources/blog/${blog.slug}-${blog.blogIdUID}`;
  }
  return `/view?id=${blog._id}`;
}

export function extractPreviewImageMuitiple(imageUrl, placeholderUrl = "/placeholder.svg?height=200&width=300") {
  const baseUrl = config.blogEndpoint || "http://localhost:3000";
  // console.log("imageUrl:", imageUrl); 
  
  // If imageUrl is not provided or is empty, return placeholder URL
  if (!imageUrl) {
    return placeholderUrl;
  }

  // Prepend baseUrl only if the URL is relative (doesn't start with http(s):// or //)
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://") || imageUrl.startsWith("//")) {
    return imageUrl;
  }

  return `${baseUrl}${imageUrl.startsWith("/") ? "" : "/"}${imageUrl}`;
}
