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
    className='border rounded-t-3xl hover:border-blue-500'
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
    {image?
      <Image
        width={100}
        height={100}
        style={{
          borderTopLeftRadius: 18.95,
          borderTopRightRadius: 18.95,
        }}
        className='h-80 w-full'
        src={image}
        alt="Event"
      />
      :
      <Image
      src={"../../images/starrtix.png"}
      alt='logo'
      width={500}
      height={500}
      />
    }
    </div>
  );
};

export default EventItem
