import React from 'react'
import { TECarousel, TECarouselItem } from "tw-elements-react";
import img1 from '../Image/Carousal1.jpg'
import img2 from '../Image/Carousal2.webp'
import img3 from '../Image/Carousal1.webp'
import img5 from '../Image/Carousal5.jpg'
import img4 from '../Image/Carousal4.avif'

function Carousal() {

    return (
        <>
            <TECarousel showControls showIndicators ride="carousel">

                <div className="relative my-[.5rem] h-[15rem] md:h-[30rem] overflow-hidden after:clear-both after:block after:content-[''] "> 

                    <TECarouselItem
                        itemID={1}
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    >
                        <img
                            src={img1}
                            className="block w-full"
                            alt="..."
                        />
                        <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 className="text-xl">First slide label</h5>
                            <p>
                                Some representative placeholder content for the first slide.
                            </p>
                        </div>
                    </TECarouselItem>

                    <TECarouselItem
                        itemID={2}
                        className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    >
                        <img
                            src={img2}
                            className="block w-full"
                            alt="..."
                        />
                        <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 className="text-xl">Second slide label</h5>
                            <p>
                                Some representative placeholder content for the second slide.
                            </p>
                        </div>
                    </TECarouselItem>

                    <TECarouselItem
                        itemID={3}
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    >
                        <img
                            src={img3}
                            className="block w-full"
                            alt="..."
                        />
                        <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 className="text-xl">Third slide label</h5>
                            <p>
                                Some representative placeholder content for the third slide.
                            </p>
                        </div>
                    </TECarouselItem>

                    <TECarouselItem
                        itemID={4}
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    >
                        <img
                            src={img4}
                            className="block w-full"
                            alt="..."
                        />
                        <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 className="text-xl">First slide label</h5>
                            <p>
                                Some representative placeholder content for the first slide.
                            </p>
                        </div>
                    </TECarouselItem>


                    <TECarouselItem
                        itemID={5}
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    >
                        <img
                            src={img5}
                            className="block w-full"
                            alt="..."
                        />
                        <div className=" absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 className="text-xl text-red">First slide label</h5>
                            <p>
                                Some representative placeholder content for the first slide.
                            </p>
                        </div>
                    </TECarouselItem>

                </div>
            </TECarousel>
        </>
    );
}
export default Carousal;
