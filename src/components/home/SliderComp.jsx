import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {
    const settings = {
        // dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidestoScroll:1
    };
  return (
    <div>
        <Slider {...settings} >
        <div className='!flex items-center bg-gray-100 px-6'>
            <div className=''>
                <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
                <div className='text-lg my-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quod ullam repellat odit eum magni, optio quidem, ad est harum repudiandae ratione numquam veniam voluptates? Nobis aperiam minus officiis nulla?</div>
                <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
            </div>
            <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/72c30bcb-c38d-4629-92c9-7107f1d951e0/air-force-1-07-ayakkab%C4%B1-MSJ6C8.png" alt="" />
        </div>
        <div className='!flex items-center bg-gray-100 px-6'>
        <div className=''>
                <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
                <div className='text-lg my-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quod ullam repellat odit eum magni, optio quidem, ad est harum repudiandae ratione numquam veniam voluptates? Nobis aperiam minus officiis nulla?</div>
                <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
            </div>
            <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/2f9e087d-1f0f-4b72-8576-b7b7b64e73ae/air-force-1-07-ayakkab%C4%B1-SqKG2H.png" alt="" />
        </div>
        </Slider>
    </div>
  )
};

export default SliderComp;