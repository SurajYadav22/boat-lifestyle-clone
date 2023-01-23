import { ImageSlider } from "./ImageSlider";
import { Video } from "./Video";
import { ImageSlider2 } from "./ImageSlider2";
import { Blog } from "./blog/Blog";
import { useLayoutEffect } from "react";
import { ComplexSlider } from "./ComplexSlider";

export const HomePage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <ImageSlider />
      <ComplexSlider />
      <Video />
      <ImageSlider2 />
      <Blog />
      {/* The boAthead Vibe */}
      {/* Qoute Slider */}
      {/* Brands */}
    </>
  );
};
