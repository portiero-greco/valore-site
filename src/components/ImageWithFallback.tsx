import { useState } from "react";

type Props = {
  src: string;
  fallbackSrc?: string;
  alt?: string;
  className?: string;
};

export function ImageWithFallback({
  src,
  fallbackSrc = "/placeholder.png",
  alt = "",
  className = "",
}: Props) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
}
