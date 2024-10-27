import React from 'react'
import Image from 'next/image'

const Portfolio = () =>  {
  return (
    <div>
        <section className="text-gray-600 body-font bg-blue-300">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-6xl font-black title-font mb-4 text-gray-900">
      My Portfolio
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed  text-2xl">
        Here Are Some Projects....!
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
          
            className="absolute inset-0 w-full h-full object-cover object-center"
        

            src="/images/countdown.jpg" alt="Countdown" width={500} height={300} />
            
          
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Countdown Timer
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
             Using HTML, CSS & JS
            </h1>
            <p className="leading-relaxed">
            Set Time Intervals: Allows users to set specific hours, minutes, and seconds for the countdown.

Customizable Alerts: Option to set a notification sound, pop-up, or vibration when the timer reaches zero.

Pause and Resume: Enables users to pause and resume the timer without resetting it.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/images/c1.jpg"  width={500} height={300}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
            Currency Connverter
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Using TS
            </h1>
            <p className="leading-relaxed">
            Real-Time Exchange Rates: Provides up-to-date exchange rates, ensuring accurate conversions.

Multiple Currencies: Supports conversion between a wide range of international currencies.

Historical Data: Allows users to view historical exchange rates, useful for tracking currency trends.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/images/quiz3.jpg"  width={500} height={300} />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Quiz-App
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Using HTML CSS & JS
            </h1>
            <p className="leading-relaxed">
            Question Formats: Supports various question types, including multiple choice, true/false, fill-in-the-blank, and matching.

Timed Questions: Option to set a timer for each question, encouraging quick thinking and limiting response time.

Scoring and Feedback: Provides immediate feedback after each question.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/images/r1.jpg"  width={500} height={300}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Resume Builder
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Using HTML CSS & TS
            </h1>
            <p className="leading-relaxed">
            Professional Templates: Provides a variety of professionally designed resume templates with customizable styles.

Drag-and-Drop Editor: Easy-to-use editor that lets users add, remove, and rearrange sections effortlessly.

Auto-Suggested Phrases and KeywordS.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/images/ca1.jpg"  width={500} height={300}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
            Simple Calculator
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Using TS
            </h1>
            <p className="leading-relaxed">
            Basic Arithmetic Operations: Supports addition, subtraction, multiplication, and division.

Clear and All Clear (C/AC) Buttons: Provides options to clear the last entry or reset the entire calculation.

Decimal Point Support: Allows users to perform calculations with decimal numbers.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/images/t2.jpg"  width={500} height={300}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              To Do List
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Using TS
            </h1>
            <p className="leading-relaxed">
            Task Creation: Allows users to easily add new tasks with a title and description.

Due Dates and Reminders: Lets users set due dates and get reminders for upcoming tasks.

Priority Levels: Offers options to set task priorities (e.g., high, medium, low) to focus on important tasks first.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Portfolio