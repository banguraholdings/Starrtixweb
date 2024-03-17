import React, { useState, useRef } from 'react';
import Image from 'next/image';

interface EventItemProps {
  image: string; // Assuming `value.image` is a string URL to the image
  videoSrc: string; // You might want to pass video source as a prop too
}

const EventItem: React.FC<EventItemProps> = ({ image, videoSrc }) => {
  const [hover, setHover] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      onMouseEnter={() => {
        setHover(true);
        if (videoRef.current) {
          videoRef.current.play();
        }
      }}
      onMouseLeave={() => {
        setHover(false);
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }}
      style={{
        overflow: 'hidden', // Ensures the borderRadius is applied to child components
      }}
    >
      {hover ? (
        <video
          autoPlay
          loop
          muted
          ref={videoRef}
          style={{
            width: "100%",
            borderTopLeftRadius: 18.95,
            borderTopRightRadius: 18.95,
          }}
          src={videoSrc}
        />
      ) : (
        <Image
          width={100}
          height={100}
          style={{
            width: "100%",
            borderTopLeftRadius: 18.95,
            borderTopRightRadius: 18.95,
          }}
          src={image}
          alt="Event"
        />
      )}
    </div>
  );
};

export default EventItem
