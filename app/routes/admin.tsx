import { useState } from "react";
import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin - Islamic AI Guidance" },
    { name: "description", content: "Admin dashboard for Islamic AI Guidance" },
  ];
};

// Mock authentication for demonstration purposes
// In a real application, use proper authentication with sessions
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "islamic_ai_2025";

// Mock questions data
const mockQuestions = [
  {
    id: "q1",
    question: "What is the ruling on music in Islam?",
    status: "pending",
    date: "2025-06-05T14:30:00Z"
  },
  {
    id: "q2",
    question: "How can I improve my concentration in prayer?",
    status: "answered",
    date: "2025-06-04T09:15:00Z"
  },
  {
    id: "q3",
    question: "What does Islam say about environmental conservation?",
    status: "pending",
    date: "2025-06-06T11:45:00Z"
  },
  {
    id: "q4",
    question: "How to deal with anxiety from an Islamic perspective?",
    status: "pending",
    date: "2025-06-07T08:20:00Z"
  }
];

// Mock knowledge base files
const mockFiles = [
  {
    id: "f1",
    name: "Quran References.json",
    size: "2.4 MB",
    lastUpdated: "2025-05-20T10:30:00Z"
  },
  {
    id: "f2",
    name: "Hadith Collection.json",
    size: "4.8 MB",
    lastUpdated: "2025-05-25T14:15:00Z"
  },
  {
    id: "f3",
    name: "Scholarly Opinions.json",
    size: "1.7 MB",
    lastUpdated: "2025-06-01T09:45:00Z"
  }
];

export async function loader({ request }: LoaderFunctionArgs) {
  // Check if user is authenticated
  // This is a simple implementation for demonstration
  // In a real app, use proper authentication with sessions
  const url = new URL(request.url);
  const isAuthenticated = url.searchParams.get("authenticated") === "true";
  
  if (!isAuthenticated) {
    // If not authenticated, return data needed for login form
    return json({ isAuthenticated: false });
  }
  
  // If authenticated, return admin data
  return json({
    isAuthenticated: true,
    questions: mockQuestions,
    files: mockFiles
  });
}

export default function AdminPage() {
  const loaderData = useLoaderData<typeof loader>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState("questions");
  
  // Handle login form submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Redirect to the same page with authentication flag
      window.location.href = "/admin?authenticated=true";
    } else {
      setLoginError("Invalid username or password");
    }
  };
  
  // If not authenticated, show login form
  if (!loaderData.isAuthenticated) {
    return (
      <div className="flex flex-col items-center">
        <div className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
        
        <section className="w-full max-w-md mx-auto mt-8">
          <h1 className="text-3xl font-lateef font-bold text-primary-800 mb-6 text-center">
            Admin Login
          </h1>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <form onSubmit={handleLogin}>
              {loginError && (
                <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md border border-red-200">
                  {loginError}
                </div>
              )}
              
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Login
              </button>
            </form>
          </div>
          
          <p className="mt-4 text-center text-sm text-gray-500">
            This is a protected area for administrators only.
          </p>
        </section>
      </div>
    );
  }
  
  // If authenticated, show admin dashboard
  return (
    <div className="flex flex-col">
      <div className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
      
      <section className="w-full max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-lateef font-bold text-primary-800">
            Admin Dashboard
          </h1>
          
          <a 
            href="/admin" 
            className="text-gray-600 hover:text-primary-600 font-medium"
          >
            Logout
          </a>
        </div>
        
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab("questions")}
              className={`py-4 px-6 font-medium text-sm ${
                activeTab === "questions"
                  ? "border-b-2 border-primary-500 text-primary-600"
                  : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Questions
            </button>
            <button
              onClick={() => setActiveTab("knowledge")}
              className={`py-4 px-6 font-medium text-sm ${
                activeTab === "knowledge"
                  ? "border-b-2 border-primary-500 text-primary-600"
                  : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Knowledge Base
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`py-4 px-6 font-medium text-sm ${
                activeTab === "settings"
                  ? "border-b-2 border-primary-500 text-primary-600"
                  : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Settings
            </button>
          </nav>
        </div>
        
        {/* Questions Tab */}
        {activeTab === "questions" && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Recent Questions</h2>
              <div className="flex space-x-2">
                <select className="input-field py-1 px-2">
                  <option value="all">All Questions</option>
                  <option value="pending">Pending</option>
                  <option value="answered">Answered</option>
                </select>
                <button className="btn-outline py-1 px-3">
                  Refresh
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Question
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {loaderData.questions.map((question) => (
                    <tr key={question.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {question.question}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          question.status === "pending" 
                            ? "bg-yellow-100 text-yellow-800" 
                            : "bg-green-100 text-green-800"
                        }`}>
                          {question.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(question.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-primary-600 hover:text-primary-900 mr-3">
                          View
                        </button>
                        {question.status === "pending" && (
                          <button className="text-secondary-600 hover:text-secondary-900">
                            Answer
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {/* Knowledge Base Tab */}
        {activeTab === "knowledge" && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Knowledge Base Files</h2>
              <button className="btn-primary py-1 px-3">
                Upload New File
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      File Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Size
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Updated
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {loaderData.files.map((file) => (
                    <tr key={file.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {file.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {file.size}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(file.lastUpdated).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-primary-600 hover:text-primary-900 mr-3">
                          Download
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">System Settings</h2>
            
            <div className="bg-white rounded-lg shadow p-6">
              <Form method="post" className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">AI Configuration</h3>
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                        AI Model
                      </label>
                      <select id="model" name="model" className="input-field">
                        <option>Islamic Knowledge Base v1.0</option>
                        <option>Islamic Knowledge Base v1.5 (Beta)</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="confidence" className="block text-sm font-medium text-gray-700 mb-1">
                        Minimum Confidence Threshold
                      </label>
                      <input
                        type="range"
                        id="confidence"
                        name="confidence"
                        min="0"
                        max="100"
                        defaultValue="75"
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>0%</span>
                        <span>50%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Response Settings</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        id="include_arabic"
                        name="include_arabic"
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor="include_arabic" className="ml-2 block text-sm text-gray-700">
                        Include Arabic text in responses
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="include_sources"
                        name="include_sources"
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor="include_sources" className="ml-2 block text-sm text-gray-700">
                        Include sources in responses
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="auto_approve"
                        name="auto_approve"
                        type="checkbox"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor="auto_approve" className="ml-2 block text-sm text-gray-700">
                        Auto-approve responses with high confidence
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button type="submit" className="btn-primary">
                    Save Settings
                  </button>
                </div>
              </Form>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

