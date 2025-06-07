import { useState } from "react";
import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { getQuestions, findMatchingQuestion, type IslamicQuestion } from "~/utils/questions.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Ask a Question - Islamic AI Guidance" },
    { name: "description", content: "Ask questions about Islamic teachings and receive guidance" },
  ];
};

interface ActionResponse {
  question: string;
  answer: string;
  sources: string[];
  isPlaceholder?: boolean;
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const question = formData.get("question") as string;

  if (!question || question.trim() === "") {
    return Response.json({ error: "Please enter a question" });
  }

  // Load questions from our data file
  const questions = await getQuestions();
  
  // Find a matching question
  const matchedQuestion = findMatchingQuestion(questions, question);

  // If no match found, return a placeholder response
  if (!matchedQuestion) {
    return json({
      question,
      answer: "Your question has been received. The AI is still learning and will respond soon, insha'Allah.",
      sources: [],
      isPlaceholder: true
    } as ActionResponse);
  }

  // Simulate a delay to mimic AI processing
  await new Promise(resolve => setTimeout(resolve, 1000));

  return json({
    ...matchedQuestion,
    question // Use the user's original question
  } as ActionResponse);
}

export default function AskPage() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const [question, setQuestion] = useState("");
  
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="flex flex-col items-center">
      <div className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
      
      <section className="w-full max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl font-lateef font-bold text-primary-800 mb-6 text-center">
          Ask for Islamic Guidance
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Submit your question about Islamic teachings, practices, or guidance for daily life.
        </p>
        
        <Form method="post" className="w-full">
          <div className="mb-6">
            <label htmlFor="question" className="block text-gray-700 font-medium mb-2">
              Your Question
            </label>
            <textarea
              id="question"
              name="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="textarea-field"
              placeholder="e.g., Why do Muslims pray five times a day?"
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="btn-primary w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Question"}
          </button>
        </Form>
      </section>

      {actionData && !actionData.error && (
        <section className="w-full max-w-3xl mx-auto islamic-border">
          <h2 className="text-2xl font-bold text-primary-800 mb-4">
            {actionData.isPlaceholder ? "Response" : "Answer"}
          </h2>
          
          <div className="mb-4">
            <h3 className="font-medium text-gray-700 mb-2">Your Question:</h3>
            <p className="text-gray-900">{actionData.question}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium text-gray-700 mb-2">Answer:</h3>
            <p className="text-gray-900 whitespace-pre-line">{actionData.answer}</p>
          </div>
          
          {actionData.sources && actionData.sources.length > 0 && (
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Sources:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {actionData.sources.map((source, index) => (
                  <li key={index}>{source}</li>
                ))}
              </ul>
            </div>
          )}
          
          {actionData.isPlaceholder && (
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
              <p className="text-yellow-700 text-sm">
                Note: This is a placeholder response. In the future, this will be powered by a custom-trained AI model using Islamic knowledge and verified sources.
              </p>
            </div>
          )}
        </section>
      )}

      {actionData && actionData.error && (
        <section className="w-full max-w-3xl mx-auto mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-700">{actionData.error}</p>
        </section>
      )}

      <section className="w-full max-w-3xl mx-auto mt-12 p-4 bg-gray-50 rounded-md border border-gray-200">
        <p className="text-sm text-gray-500 text-center">
          <strong>Disclaimer:</strong> This AI is in development. For critical religious issues, always refer to trusted human scholars.
        </p>
      </section>
    </div>
  );
}

