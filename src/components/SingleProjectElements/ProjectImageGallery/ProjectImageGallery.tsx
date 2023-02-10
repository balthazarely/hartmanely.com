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

interface PhotosProps {
  photos: PhotoProps[];
}

interface PhotoProps {
  src: string;
  width: number;
  height: number;
  title: string;
  description: string;
}

export function ProjectImageGallery({ photos }: PhotosProps) {
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
      {/* <p className="small mt-1 italic">Photos my Beth Mcbethster</p> */}
    </Container>
  );
}
