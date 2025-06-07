import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "About - Islamic AI Guidance" },
    { name: "description", content: "Learn about the Islamic AI Guidance project, its purpose, and vision" },
  ];
};

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
      
      <section className="w-full max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl font-lateef font-bold text-primary-800 mb-6 text-center">
          About Islamic AI Guidance
        </h1>
        
        <div className="prose prose-emerald max-w-none">
          <h2>Our Purpose</h2>
          <p>
            Islamic AI Guidance was created to provide accessible, authentic Islamic knowledge to Muslims around the world. 
            In an era where information is abundant but not always reliable, we aim to leverage artificial intelligence 
            to make the rich tradition of Islamic scholarship available to everyone seeking guidance in their daily lives.
          </p>
          
          <h2>Our Vision</h2>
          <p>
            We envision a world where every Muslim, regardless of their location or background, has access to reliable 
            Islamic guidance. Our AI-powered platform aims to bridge the gap between traditional Islamic scholarship and 
            modern technology, making it easier for Muslims to find answers to their questions about faith, practice, 
            and daily life challenges.
          </p>
          
          <h2>Our Approach</h2>
          <p>
            Our AI system is designed to provide answers based on authentic Islamic sources, including:
          </p>
          <ul>
            <li>The Holy Quran</li>
            <li>Authentic Hadith collections (Sahih Bukhari, Sahih Muslim, etc.)</li>
            <li>Scholarly interpretations and opinions from respected Islamic scholars</li>
            <li>Classical and contemporary Islamic texts</li>
          </ul>
          
          <p>
            We are committed to presenting information that adheres to mainstream Islamic understanding while 
            acknowledging the diversity of opinions within Islamic scholarship. Our goal is not to promote any 
            particular school of thought but to provide users with authentic information from reliable sources.
          </p>
          
          <h2>Limitations and Disclaimer</h2>
          <p>
            While we strive for accuracy and authenticity, we acknowledge that AI has limitations. Our system:
          </p>
          <ul>
            <li>Is continuously learning and improving</li>
            <li>May not capture the full nuance of Islamic scholarship</li>
            <li>Should not replace consultation with qualified human scholars for critical religious matters</li>
          </ul>
          
          <p>
            We encourage users to verify important religious matters with qualified human scholars and to use our 
            platform as a supplementary resource rather than the sole source of religious guidance.
          </p>
          
          <h2>Future Development</h2>
          <p>
            We are continuously working to improve our AI system by:
          </p>
          <ul>
            <li>Expanding our knowledge base with more authentic sources</li>
            <li>Refining our algorithms to provide more accurate and nuanced responses</li>
            <li>Incorporating feedback from users and Islamic scholars</li>
            <li>Adding support for more languages to serve Muslims worldwide</li>
          </ul>
          
          <h2>Join Us</h2>
          <p>
            We welcome feedback, suggestions, and contributions from users and scholars alike. Together, we can 
            build a valuable resource that serves the global Muslim community in their quest for knowledge and guidance.
          </p>
          
          <div className="mt-8 text-center">
            <Link to="/ask" className="btn-primary">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
      
      <section className="w-full max-w-3xl mx-auto mt-8 p-4 bg-gray-50 rounded-md border border-gray-200">
        <p className="text-sm text-gray-500 text-center">
          <strong>Disclaimer:</strong> This AI is in development. For critical religious issues, always refer to trusted human scholars.
        </p>
      </section>
    </div>
  );
}

