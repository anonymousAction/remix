import { readFile } from 'fs/promises';
import path from 'path';

// Type definitions for our data
export interface IslamicQuestion {
  question: string;
  answer: string;
  sources: string[];
}

// Function to load questions data
export async function getQuestions(): Promise<IslamicQuestion[]> {
  try {
    const filePath = path.join(process.cwd(), 'app', 'data', 'questions.json');
    const data = await readFile(filePath, 'utf-8');
    return JSON.parse(data) as IslamicQuestion[];
  } catch (error) {
    console.error('Error loading questions data:', error);
    return [];
  }
}

// Function to find a matching question
export function findMatchingQuestion(
  questions: IslamicQuestion[],
  userQuestion: string
): IslamicQuestion | null {
  if (!userQuestion || questions.length === 0) {
    return null;
  }

  const lowerUserQuestion = userQuestion.toLowerCase();
  
  // First try to find an exact match
  const exactMatch = questions.find(
    (q) => q.question.toLowerCase() === lowerUserQuestion
  );
  
  if (exactMatch) {
    return exactMatch;
  }
  
  // Then try to find a partial match
  for (const question of questions) {
    const lowerQuestion = question.question.toLowerCase();
    
    // Check if the user question contains significant parts of a known question
    if (
      lowerUserQuestion.includes(lowerQuestion.substring(0, Math.min(15, lowerQuestion.length))) ||
      lowerQuestion.includes(lowerUserQuestion.substring(0, Math.min(15, lowerUserQuestion.length)))
    ) {
      return question;
    }
    
    // Check for keyword matches
    const userWords = lowerUserQuestion.split(/\s+/);
    const questionWords = lowerQuestion.split(/\s+/);
    
    // Count matching significant words
    const significantWords = ['prayer', 'pray', 'salah', 'zakat', 'charity', 'fasting', 'ramadan', 
                             'hajj', 'pilgrimage', 'quran', 'hadith', 'prophet', 'muhammad', 
                             'allah', 'islam', 'muslim', 'patience', 'sabr', 'knowledge', 
                             'parents', 'honesty', 'truth', 'environment'];
    
    let matchCount = 0;
    for (const word of userWords) {
      if (word.length > 3 && 
          (questionWords.includes(word) || 
           significantWords.includes(word))) {
        matchCount++;
      }
    }
    
    // If we have at least 2 significant matching words, consider it a match
    if (matchCount >= 2) {
      return question;
    }
  }
  
  return null;
}

