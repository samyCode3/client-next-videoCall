"use client";
import "../app/style/section.css";
import FeaturesList from "./props/section.props";

const Section: React.FC = () => {
  const features = [
    {
      id: 1,
      images: "/images/tag_faces.png",
      title: "Noise Cancellation",
      text: "Smart filtering to remove noise and boosting your voice",
    },
    {
      id: 2,
      images: "/images/surround_sound.png",
      title: "Camera Auto Follow",
      text: "Smart filtering to remove noise and boosting your voice",
    },
    {
      id: 3,
      images: "/images/camera_enhance.png",
      title: "Voice Rooms",
      text: "Smart filtering to remove noise and boosting your voice",
    },
    {
      id: 4,
      images: "/images/tag_faces.png",
      title: "Beautify",
      text: "Smart filtering to remove noise and boosting your voice",
    },
  ];
  return (
    <section>
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center w-full mt-40 h-full w-11/12">
        <div className="sect-1 flex flex-col justify-center items-center mt-5 p-20 gap-10">
          <div>
            <img src="/images/positive.png" alt="" />
          </div>
          <div>
            <h1 className="text-white text-5xl font-bold">
              Making video call amazing
            </h1>
          </div>
          <div className="w-4/12">
            <p className="text-center text-sm text-gray-200">
              Tikcle is a simple yet powerful video app that connects you to you
              co-workers through lightweight videoconferencing. It’s perfect for
              design sessions, brainstorm sessions, code reviews, business
              meetings, costumer support, product demos and much more...
            </p>
          </div>
        </div>
      </div>

      <div className="section-2 flex flex-col items-center mt-12 gap-10">
        <p className="text-5xl font-bold">Features</p>

         <div className="flex flex-col justify-center items-center">
         <FeaturesList features={features} />
         </div>
       
      </div>

      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 flex flex-col items-center justify-center w-full relative p-32 mt-40 h-full w-11/12 gap-10">
                 <div className="flex items-center justify-center">
                    <h1  className="text-5xl w-8/12 text-center text-white text-bold">Design & code reviews on the go </h1>
                  </div>

                  <div className="flex items-center justify-center">
                       <p className="text-sm w-11/12 text-center text-white text-light">The video calling experience thats helps you ship products faster</p>
                  </div>
                  <div className="btn p-4">
                      <button className="bg-blue-800 p-3 text-white text-sm border-solid border-1 border-blue-700 rounded-md">Let's Go</button>
                  </div>
                 </div>
    </section>
  );
};

export default Section;
