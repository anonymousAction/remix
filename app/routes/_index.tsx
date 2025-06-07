import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Islamic AI Guidance - Home" },
    { name: "description", content: "Islamic AI-based guidance for people around the world" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center">
      <div className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
      
      <section className="w-full max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-lateef font-bold text-primary-800 mb-6">
          Islamic AI Guidance
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Seeking knowledge and guidance through technology, inspired by Islamic teachings and wisdom.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/ask" className="btn-primary">
            Ask a Question
          </Link>
          <Link to="/about" className="btn-outline">
            Learn More
          </Link>
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="islamic-card">
            <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Ask Questions</h3>
            <p className="text-gray-600">
              Ask questions about Islamic teachings, practices, and guidance for daily life.
            </p>
          </div>
          
          <div className="islamic-card">
            <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Sources</h3>
            <p className="text-gray-600">
              Answers based on the Quran, authentic Hadith, and respected scholarly opinions.
            </p>
          </div>
          
          <div className="islamic-card">
            <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Accessible Guidance</h3>
            <p className="text-gray-600">
              Making Islamic knowledge accessible to everyone, anywhere, anytime.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto mb-16">
        <div className="islamic-border">
          <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Our Vision</h2>
          <p className="text-gray-700 mb-4">
            Islamic AI Guidance aims to provide accessible, authentic Islamic knowledge to Muslims around the world. 
            By leveraging artificial intelligence, we strive to make the rich tradition of Islamic scholarship available 
            to everyone seeking guidance in their daily lives.
          </p>
          <p className="text-gray-700">
            While our AI is continuously learning and improving, we encourage users to verify critical religious matters 
            with qualified human scholars. Our goal is to serve as a helpful resource on your journey of seeking knowledge, 
            not to replace traditional methods of Islamic learning.
          </p>
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-primary-800 mb-6">Ready to Ask?</h2>
        <p className="text-gray-600 mb-8">
          Our AI is ready to assist with your questions about Islamic teachings and practices.
        </p>
        <Link to="/ask" className="btn-primary">
          Ask a Question Now
        </Link>
      </section>
    </div>
  );
}

