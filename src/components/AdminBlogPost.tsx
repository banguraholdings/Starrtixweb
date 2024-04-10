import Link from 'next/link';
import React from 'react';
import Image from "next/image";

export default function AdminBlogPost() {
    const events = [
        {
            month: "AUG",
            day: "14",
            header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
            description:
                "We’ll get you directly seated and inside for you to enjoy the show.",
            image: "../../images/event.jpg",
        },
        {
            month: "AUG",
            day: "14",
            header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
            description:
                "We’ll get you directly seated and inside for you to enjoy the show.",
            image: "../../images/event1.jpg",
        },
        {
            month: "AUG",
            day: "14",
            header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
            description:
                "We’ll get you directly seated and inside for you to enjoy the show.",
            image: "../../images/event2.jpg",
        },
        {
            month: "AUG",
            day: "14",
            header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
            description:
                "We’ll get you directly seated and inside for you to enjoy the show.",
            image: "../../images/event3.jpg",
        },
        {
            month: "AUG",
            day: "14",
            header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
            description:
                "We’ll get you directly seated and inside for you to enjoy the show.",
            image: "../../images/event4.jpg",
        },
        {
            month: "AUG",
            day: "14",
            header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
            description:
                "We’ll get you directly seated and inside for you to enjoy the show.",
            image: "../../images/event.jpg",
        },
    ];

    return (
        <div className='grid md:grid-cols-3 gap-y-3 justify-center items-center gap-3'>
          {/* hero blog */}
            <div
                className='col col-span-2 row w-full h-full rounded flex flex-col justify-between'>

                {/* img */}
                <div className="w-full">
                    <Image
                        width={100}
                        height={100}
                        style={{
                            width: "100%",
                            borderTopLeftRadius: 18.95,
                            borderTopRightRadius: 18.95,
                        }}
                        src={events[0].image}
                        alt="pic"
                    />
                </div>
                {/* decription */}
                <div className=' flex flex-row justify-center items-center h-full w-full border rounded-b-[18.95px]'>
                   <div className="w-full p-4 flex space-x-2">
                    {/* date */}
                    <div className="text-center">
                        <p className="font-bold text-blue-500">{events[0].month}</p>
                        <h1>{events[0].day}</h1>
                    </div>

                    {/* decription */}
                    <div className="space-y-2">
                        <p className="text-xs font-bold">{events[0].header}</p>
                        <p className="text-xs font-thin">{events[0].description}</p>
                    </div>
                </div> 
                </div>
                
            </div>
            <div className='grid md:grid-rows-2 gap-y-3'>
                <div
                    className='w-full rounded h-full'>

                    {/* img */}
                    <div className="w-full">
                        <Image
                            width={100}
                            height={100}
                            style={{
                                width: "100%",
                                borderTopLeftRadius: 18.95,
                                borderTopRightRadius: 18.95,
                            }}
                            src={events[0].image}
                            alt="pic"
                        />
                    </div>
                    {/* decription */}
                    <div className="w-full p-4 flex space-x-2 border rounded-b-[18.95px]">
                        {/* date */}
                        <div className="text-center">
                            <p className="font-bold text-blue-500">{events[0].month}</p>
                            <h1>{events[0].day}</h1>
                        </div>

                        {/* decription */}
                        <div className="space-y-2">
                            <p className="text-xs font-bold">{events[0].header}</p>
                            <p className="text-xs font-thin">{events[0].description}</p>
                        </div>
                    </div>
                </div>
                <div
                    className='w-full rounded h-full'>

                    {/* img */}
                    <div className="w-full">
                        <Image
                            width={100}
                            height={100}
                            style={{
                                width: "100%",
                                borderTopLeftRadius: 18.95,
                                borderTopRightRadius: 18.95,
                            }}
                            src={events[0].image}
                            alt="pic"
                        />
                    </div>
                    {/* decription */}
                    <div className="w-full p-4 flex space-x-2 border rounded-b-[18.95px]">
                        {/* date */}
                        <div className="text-center">
                            <p className="font-bold text-blue-500">{events[0].month}</p>
                            <h1>{events[0].day}</h1>
                        </div>

                        {/* decription */}
                        <div className="space-y-2">
                            <p className="text-xs font-bold">{events[0].header}</p>
                            <p className="text-xs font-thin">{events[0].description}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* blog data */}
            {events.map((value, index) => (
                <div
                    className=' w-full rounded'
                    key={index}
                >

                    {/* img */}
                    <div className="w-full">
                        <Image
                            width={100}
                            height={100}
                            style={{
                                width: "100%",
                                borderTopLeftRadius: 18.95,
                                borderTopRightRadius: 18.95,
                            }}
                            src={value.image}
                            alt="pic"
                        />
                    </div>
                    {/* decription */}
                    <div className="w-full p-4 flex space-x-2 border rounded-b-[18.95px]">
                        {/* date */}
                        <div className="text-center">
                            <p className="font-bold text-blue-500">{value.month}</p>
                            <h1>{value.day}</h1>
                        </div>

                        {/* decription */}
                        <div className="space-y-2">
                            <p className="text-xs font-bold">{value.header}</p>
                            <p className="text-xs font-thin">{value.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
