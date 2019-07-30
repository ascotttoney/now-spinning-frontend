import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Swiper from "react-id-swiper";

const CollectionGallery = (props) => {
  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    // spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    keyboard: true
  };

  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 10,
    touchRatio: 0.2,
    slideToClickedSlide: true
  };

  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]);

  return (
    <div className="collection-gallery">
      <Swiper {...gallerySwiperParams}>
        {props.collections && props.collections.map(collection => {
          return (
            <div className="swiper-slide" key={collection.id}>
              <img
                src={collection.album.cover} alt=""
                onClick={() => props.handleOpenModal(collection.album.spotify_id, collection.id)}
              />
                <br /><br />
              <h2 className="title is-3">{collection.album.title}</h2>
              <p className="subtitle is-4">{collection.album.artist}</p>
            </div>
          )
        })}
      </Swiper>

      <Swiper {...thumbnailSwiperParams}>
        {props.collections && props.collections.map(collection => {
          return (
            <div className="swiper-slide" key={collection.album.id}>
              <img src={collection.album.cover} alt="" className="swiper-thumb" />
            </div>
          )
        })}
      </Swiper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.userData,
  album: state.album.selectedAlbum,
})

export default connect(mapStateToProps)(CollectionGallery);
