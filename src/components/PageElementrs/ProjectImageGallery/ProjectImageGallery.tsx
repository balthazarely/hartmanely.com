import { Container } from "@/components/LayoutComponents";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Captions from "yet-another-react-lightbox/plugins/captions";

const photos = [
  {
    src: "/images/fruitdale-gallery-1.jpg",
    width: 1000,
    height: 668,
    title: "Slide title 1",
    description: "Slide description",
  },
  {
    src: "/images/fruitdale-gallery-3.jpg",
    width: 640,
    height: 750,
    title: "Slide title 1",
    description: "Slide description",
  },
  {
    src: "/images/fruitdale-gallery-2.jpg",
    width: 750,
    height: 750,
    title: "Slide title 1",
    description: "Slide description",
  },
  {
    src: "/images/fruitdale-gallery-1.jpg",
    width: 1000,
    height: 668,
    title: "Slide title 1",
    description: "Slide description",
  },
  {
    src: "/images/fruitdale-gallery-3.jpg",
    width: 640,
    height: 750,
    title: "Slide title 1",
    description: "Slide description",
  },
  {
    src: "/images/fruitdale-gallery-2.jpg",
    width: 750,
    height: 750,
    title: "Slide title 1",
    description: "Slide description",
  },
];

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
export function ProjectImageGallery() {
  const [index, setIndex] = useState(-1);

  return (
    <Container>
      <PhotoAlbum
        renderPhoto={NextJsImage}
        layout="rows"
        photos={photos}
        // targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos}
        animation={{ fade: 300, swipe: 300 }}
        plugins={[Captions]}
      />
      <p className="font-bold">Photos my Beth Mcbethster</p>
    </Container>
  );
}
