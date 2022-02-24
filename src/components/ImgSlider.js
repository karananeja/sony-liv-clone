import React from 'react';
import '../css/ImgSlider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Add, ShareOutlined } from '@mui/icons-material';

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className='imgSlider'>
      <Slider className='imgSlider__slider' {...settings}>
        <div className='imgSlider__wrap'>
          <div className='imgSlider__wrapLeft'>
            <div className='imgSlider__wrapUp'>
              <img src='/images/bg-01-title.png' />
            </div>
            <div className='imgSlider__wrapDown'>
              <div className='imgSlider__buttons'>
                <div className='imgSlider__button'>
                  <Add />
                  My List
                </div>
                <div className='imgSlider__button imgSlider__play'>
                  Play Now
                </div>
                <div className='imgSlider__button'>
                  <ShareOutlined />
                  Share
                </div>
              </div>
            </div>
          </div>
          <div className='imgSlider__wrapRight'>
            <img className='imgSlider__wrapImg' src='/images/bg-01.jpg' />
          </div>
        </div>
        <div className='imgSlider__wrap'>
          <div className='imgSlider__wrapLeft'>
            <div className='imgSlider__wrapUp'>
              <img src='/images/bg-02-title.png' />
            </div>
            <div className='imgSlider__wrapDown'>
              <div className='imgSlider__buttons'>
                <div className='imgSlider__button'>
                  <Add />
                  My List
                </div>
                <div className='imgSlider__button imgSlider__play'>
                  Play Now
                </div>
                <div className='imgSlider__button'>
                  <ShareOutlined />
                  Share
                </div>
              </div>
            </div>
          </div>
          <div className='imgSlider__wrapRight'>
            <img className='imgSlider__wrapImg' src='/images/bg-02.jpg' />
          </div>
        </div>
        <div className='imgSlider__wrap'>
          <div className='imgSlider__wrapLeft'>
            <div className='imgSlider__wrapUp'>
              <img src='/images/bg-03-title.png' />
            </div>
            <div className='imgSlider__wrapDown'>
              <div className='imgSlider__buttons'>
                <div className='imgSlider__button'>
                  <Add />
                  My List
                </div>
                <div className='imgSlider__button imgSlider__play'>
                  Play Now
                </div>
                <div className='imgSlider__button'>
                  <ShareOutlined />
                  Share
                </div>
              </div>
            </div>
          </div>
          <div className='imgSlider__wrapRight'>
            <img className='imgSlider__wrapImg' src='/images/bg-03.jpg' />
          </div>
        </div>
        <div className='imgSlider__wrap'>
          <div className='imgSlider__wrapLeft'>
            <div className='imgSlider__wrapUp'>
              <img src='/images/bg-04-title.png' />
            </div>
            <div className='imgSlider__wrapDown'>
              <div className='imgSlider__buttons'>
                <div className='imgSlider__button'>
                  <Add />
                  My List
                </div>
                <div className='imgSlider__button imgSlider__play'>
                  Play Now
                </div>
                <div className='imgSlider__button'>
                  <ShareOutlined />
                  Share
                </div>
              </div>
            </div>
          </div>
          <div className='imgSlider__wrapRight'>
            <img className='imgSlider__wrapImg' src='/images/bg-04.jpg' />
          </div>
        </div>
        <div className='imgSlider__wrap'>
          <div className='imgSlider__wrapLeft'>
            <div className='imgSlider__wrapUp'>
              <img src='/images/bg-05-title.png' />
            </div>
            <div className='imgSlider__wrapDown'>
              <div className='imgSlider__buttons'>
                <div className='imgSlider__button'>
                  <Add />
                  My List
                </div>
                <div className='imgSlider__button imgSlider__play'>
                  Play Now
                </div>
                <div className='imgSlider__button'>
                  <ShareOutlined />
                  Share
                </div>
              </div>
            </div>
          </div>
          <div className='imgSlider__wrapRight'>
            <img className='imgSlider__wrapImg' src='/images/bg-05.jpg' />
          </div>
        </div>
        <div className='imgSlider__wrap'>
          <div className='imgSlider__wrapLeft'>
            <div className='imgSlider__wrapUp'>
              <img src='/images/bg-06-title.png' />
            </div>
            <div className='imgSlider__wrapDown'>
              <div className='imgSlider__buttons'>
                <div className='imgSlider__button'>
                  <Add />
                  My List
                </div>
                <div className='imgSlider__button imgSlider__play'>
                  Play Now
                </div>
                <div className='imgSlider__button'>
                  <ShareOutlined />
                  Share
                </div>
              </div>
            </div>
          </div>
          <div className='imgSlider__wrapRight'>
            <img className='imgSlider__wrapImg' src='/images/bg-06.jpg' />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ImgSlider;
