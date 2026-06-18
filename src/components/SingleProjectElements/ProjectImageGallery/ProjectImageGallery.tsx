import { Container } from "@/components/LayoutComponents";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import type { RenderPhotoProps } from "react-photo-album";
import Image from "next/image";

const NextJsImage: React.FC<RenderPhotoProps> = ({
  imageProps: { src, alt, title, sizes, className, onClick },
  wrapperStyle,
}) => (
  <div style={wrapperStyle}>
    <div
      style={{
        display: "block",
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Image
        fill
        src={src}
        alt={alt}
        title={title}
        sizes={sizes}
        className={className}
        onClick={onClick}
      />
    </div>
  </div>
);

interface PhotoProps {
  src: string;
  width: number;
  height: number;
  title?: string;
  description?: string;
}

interface PhotosProps {
  photos: PhotoProps[];
  projectSlug?: string;
}

export function ProjectImageGallery({ photos, projectSlug }: PhotosProps) {
  const [index, setIndex] = useState(-1);

  return (
    <Container>
      <div className="cursor-pointer">
        <PhotoAlbum
          renderPhoto={NextJsImage}
          layout="rows"
          photos={photos}
          onClick={({ index }) => setIndex(index)}
        />
      </div>
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos}
        animation={{ fade: 300, swipe: 300 }}
        plugins={[Captions]}
      />
      {projectSlug === "loretto-commons" && (
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-2">Commun Projects Master Plan</h3>
          <p className="text-sm text-gray-600">Photo credit - Shears Adkins Rockmore Architects</p>
        </div>
      )}
    </Container>
  );
}
