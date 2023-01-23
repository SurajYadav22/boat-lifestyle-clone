import SimpleImageSlider from "react-simple-image-slider";
import img1 from "../../assets/slider-img-1.png";
import img2 from "../../assets/slider-img-2.png";
import img3 from "../../assets/slider-img-3.png";
import img4 from "../../assets/slider-img-4.png";
import img5 from "../../assets/slider-img-5.png";

const images = [
    { url: img1 },
    { url: img2 },
    { url: img3 },
    { url: img4 },
    { url: img5 },
];

export const ImageSlider = () => {
    return (
        <div>
            <SimpleImageSlider
                width={"100%"}
                height={"90vh"}
                images={images}
                showBullets={false}
                showNavs={true}
                style={{ cursor: "pointer" }}
                navSize={60}
                navMargin={20}
            />
        </div>
    );
};
