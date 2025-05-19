"use client";

import { useEffect, useRef, forwardRef } from "react";
import { extractPreviewImageMuitiple } from "@/app/utils/blog/blogUtils"; // Adjust the path as needed

// Forward the ref to the container div element
const BlogRenderer = forwardRef((props, ref) => {
  const { content } = props;
  const containerRef = useRef(null);

  useEffect(() => {
    // Ensure the container is available before manipulating it
    if (containerRef.current) {
      // Apply image URL extraction to the content before setting innerHTML
      let modifiedContent = content;

      // Extract and replace images with the correct URLs
      const imgRegex = /<img[^>]+src="([^">]+)"/g;
      modifiedContent = modifiedContent.replace(imgRegex, (match, src) => {
        // Extract the correct image URL for each image tag
        const extractedImageUrl = extractPreviewImageMuitiple(src); // Pass the src of the image
        // console.log("Extracted Image URL:", extractedImageUrl); // Debugging log
        return match.replace(src, extractedImageUrl); // Replace the src with the extracted URL
      });

      // console.log("Modified content with images:", modifiedContent); // Debugging log

      // Set the modified content
      containerRef.current.innerHTML = modifiedContent;

      // Process all images to ensure they respect their style attributes
      const images = containerRef.current.querySelectorAll("img");
      images.forEach((img) => {
        // Add class for styling
        img.classList.add("blog-image");
        // console.log("Image element:", img); // Debugging log
        // If the image has a style attribute with width, ensure it's applied
        const style = img.getAttribute("style");
        if (style && style.includes("width")) {
          img.style.maxWidth = "100%";
        }
      });
    }
  }, [content]);

  return <div ref={containerRef} className="blog-content" />;
});

BlogRenderer.displayName = "BlogRenderer"; 

export { BlogRenderer };
