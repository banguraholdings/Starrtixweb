import Homerapper from "@/components/Homewrapper";
import React from "react";

function page() {
  return (
    <Homerapper>
      {/* landing screen */}
      <div
        style={{
          backgroundImage: `url('images/event1.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className=" w-full h-[80dvh] bg-blue-500"
      >
        <div className="w-full h-[80dvh]  bg-blue-700 space-y-8 bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="md:text-[90px] text-5xl font-serif font-bold mt-12 md:mt-0">
            About Us
          </h1>
          <div className="w-9/12 md:w-8/12">
            <h1 className="text-center text-xl">
              Skytix is a self-service ticketing platform created to
              revolutionize event management through a mission to facilitate and
              enhance the event planning process. We provide a robust
              self-service ticketing platform that allows event organizers to
              create, advertise & sell their events tickets with ease...
            </h1>
          </div>
        </div>
      </div>

      {/* vission and mission  */}
      <div className="w-full  grid grid-cols-1 lg:grid-cols-2 pt-12">
        {/* image  */}
        <div className="w-full py-12 space-y-6 border xl:space-y-12">
          {/* our mission */}
          <div className="w-full flex flex-col items-center">
            <h1 className="text-2xl xl:text-4xl">Our Mission</h1>

            <h1 className="text-center w-9/12 xl:text-lg ">
              At Skytix our mission is to empower event organizers by providing
              a user-friendly, & innovative platform ensuring that event
              creators deliver the best event experiences.
            </h1>
          </div>
          {/* our vision */}
          <div className="w-full flex flex-col items-center">
            <h1 className="text-2xl xl:text-4xl">Our Vision</h1>

            <h1 className="text-center w-9/12 xl:text-lg">
              our vision is to become the go-to global platform, connecting
              event organizers with attendees effortlessly. We envision a world
              where every event is a memorable and enriching experience,
              fostering lasting connections and shared moments.
            </h1>
          </div>{" "}
          {/* extra */}
          <div className="w-full flex flex-col items-center space-y-6 xl:space-y-12">
            <h1 className="text-center w-9/12 xl:text-lg">
              We are developing the most comprehensive suite of event management
              tools tailored for creators and organizers across Africa... Join
              in by planning your upcoming event or creating an experience right
              now.
            </h1>
            <h1 className="text-center w-9/12 xl:text-lg">
              At Skytix, we power amazing live events and online experiences all
              around Africa. With the help of our platform, event planners can
              enhance the guest experience by using mobile tools. Our platform
              seamlessly combines mobile ticketing, QR code technology, and
              user-friendly audience engagement tools, streamlining event
              operations.
            </h1>
          </div>
        </div>
        <div>
          <img
            src={"pictures/AboutUs1.jpeg"}
            alt="wedding pics"
            className="w-full"
          />
        </div>
      </div>

      {/* the team */}
      <div className="flex flex-col items-center pb-12">
        {/* abdulai */}
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 ">
          {/* img name and title */}
          <div className="flex flex-col items-center">
            <img src="/pictures/Abdulai.jpg" alt="CEO" className="p-8 " />
            <h1 className="text-lg font-semibold">Abdulai Conteh</h1>
            <h1 className="text-lg font-semibold text-blue-500">
              Founder & Creative Director{" "}
            </h1>
          </div>

          {/* About */}
          <div className="flex flex-col items-center  lg:w-8/12 lg:bg-blue-500 lg:justify-center">
            <h1 className="text-center w-10/12  font-light lg:text-white">
              Abdulai Conteh is a recognized Limkokwing University of Creative
              Technology alumni who earned honors in international business. In
              addition to his vast academic experience, Abdulai contributes a
              specific skill set in International finance, international
              marketing, and product development to his position as the founder
              and creative director of Skytix. Abdulai has devoted himself to
              using his experience to promote innovation, quality, and strategic
              growth in the fields of product development and more.
            </h1>
          </div>
        </div>
        {/* salamatu */}
        <div className="flex flex-col lg:flex-row-reverse space-y-6 lg:space-y-0 ">
          {/* img name and title */}
          <div className="flex flex-col items-center">
            <img
              src="pictures/Salamatu.jpg"
              alt="Software Engineer"
              className="p-8"
            />
            <h1 className="text-lg font-semibold">Salamatu Conteh</h1>
            <h1 className="text-lg font-semibold text-blue-500">
              Operations and Growth{" "}
            </h1>
          </div>

          {/* About */}
          <div className="flex flex-col items-center lg:w-8/12 lg:bg-blue-500 lg:justify-center">
            <h1 className="text-center w-10/12 font-light lg:text-white">
              Salamatu Conteh is a highly skilled professional specializing in
              accounting, bringing extensive expertise in the effective
              management and budgeting of company cash flows. With a strong
              foundation in accounting principles, she possesses additional
              knowledge and hands-on experience in event management,
              accumulating over four years in the dynamic field of the
              entertainment industry. In her role at Skytix, Salamatu is
              entrusted with the pivotal responsibilities of overseeing
              operations and fostering the companys growth....
            </h1>
          </div>
        </div>{" "}
        {/* Judah */}
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0">
          {/* img name and title */}
          <div className="flex flex-col items-center">
            <img
              src="pictures/Judah.png"
              alt="Software Engineer"
              className="p-8"
            />
            <h1 className="text-lg font-semibold">Judah Alvin Dore</h1>
            <h1 className="text-lg font-semibold text-blue-500">
             Software Engineer{" "}
            </h1>
          </div>

          {/* About */}
          <div className="flex flex-col items-center lg:w-10/12 lg:bg-blue-500 lg:justify-center">
            <h1 className="text-center w-10/12 font-light lg:text-white">
              As a seasoned Mobile App Developer with a passion for building
              cutting-edge mobile solutions, I specialize in creating intuitive,
              user-friendly applications for both iOS and Android platforms. My
              expertise lies in full-stack development, including UI/UX design,
              backend integration, and native app development. I stay abreast of
              the latest trends and technologies to ensure my apps are not only
              functional but also innovative and engaging. My goal is to deliver
              seamless, efficient, and effective mobile experiences that meet
              and exceed the expectations of users and stakeholders alike.
            </h1>
          </div>
        </div>{" "}        {/* Solomon  */}
        <div className="flex flex-col lg:flex-row-reverse space-y-6 lg:space-y-0">
          {/* img name and title */}
          <div className="flex flex-col items-center">
            <img
              src="pictures/Solomon.jpeg"
              alt="Software Engineer"
              className="p-8"
            />
            <h1 className="text-lg font-semibold">Solomon Kanu</h1>
            <h1 className="text-lg font-semibold text-blue-500">
              Mobile App Developer{" "}
            </h1>
          </div>

          {/* About */}
          <div className="flex flex-col items-center lg:w-8/12 lg:bg-blue-500 lg:justify-center">
            <h1 className="text-center w-10/12 font-light lg:text-white">
              As a seasoned Mobile App Developer with a passion for building
              cutting-edge mobile solutions, I specialize in creating intuitive,
              user-friendly applications for both iOS and Android platforms. My
              expertise lies in full-stack development, including UI/UX design,
              backend integration, and native app development. I stay abreast of
              the latest trends and technologies to ensure my apps are not only
              functional but also innovative and engaging. My goal is to deliver
              seamless, efficient, and effective mobile experiences that meet
              and exceed the expectations of users and stakeholders alike.
            </h1>
          </div>
        </div>{" "}
      </div>
    </Homerapper>
  );
}

export default page;
