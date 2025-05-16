import config from "@/app/config/config";

export function extractPreviewImage(content, placeholderUrl = "/placeholder.svg?height=200&width=300") {
  const baseUrl = config.blogEndpoint || "http://localhost:3000"; // Fallback
  // console.log("Content being processed:", content);
  const imgRegex = /<img[^>]+src="([^">]+)"/;
  const match = content.match(imgRegex);
  // console.log("Image match result:", match);
  const imageUrl = match ? match[1] : placeholderUrl;
  // console.log("Extracted image URL:", imageUrl);

  // Prepend baseUrl only if the URL is relative (doesn't start with http(s):// or //)
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://") || imageUrl.startsWith("//")) {
    // console.log("Using absolute URL:", imageUrl);
    return imageUrl;
  }
  
  const finalUrl = `${baseUrl}${imageUrl.startsWith("/") ? "" : "/"}${imageUrl}`;
  console.log("Final constructed URL:", finalUrl);
  return finalUrl;
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
