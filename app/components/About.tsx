import React from 'react';
import Image from 'next/image';

export function About ()  {
  return (
    <div className="text-gray-900 body-font bg-purple-400">
    
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <Image
        alt="feature"
        className="object-cover object-center h-full w-full"
        src="/images/about img.jpg"
        height={500}
        width={500}
    
      />
    </div>
    
    <div className="flex-grow">
          <h2 className="text-gray-900 text-6xl font-black mb-3 ml-8">
            About Us
          </h2>
          <p className="leading-relaxed text-base ml-8  ">
            Welcome to code hub, where passion for<br/> technology meets
            hands-on learning.<br/> Our mission is  to empower developers of <br/>all levels by providing high-quality resources,<br/> tutorials, and a collaborative community. <br/> Founded by tech enthusiasts, CodeHub is built<br/> for anyone looking to enhance their
            skills,<br/> keep up with industry trends, and bring their ideas to life.
 </p>
 <p className="leading-relaxed  ml-8 text-base text-20">Whether you are a beginner or a seasoned developer,<br/> our platform offers the tools, guidance, and <br/> support you need to excel in web development. <br/>Join us and be part of a thriving community where <br/>knowledge is shared, skills are built, and innovation <br/> is celebrated.







  </p> <a className="mt-3 text-gray-900 inline-flex items-center ml-8 text-4xl">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        </div>
        
        </div>      
    

  )
};
export default About;
