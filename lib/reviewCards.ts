import { lessonContents } from "./lessonContent";
import { getDefaultModule } from "./modules";
import { QuizQuestion, ReviewCard } from "./types";

function firstParagraph(text: string): string {
  return text.split(/\n\s*\n/)[0].replace(/\s+/g, " ").trim();
}

function summarize(text: string, maxLength = 280): string {
  const paragraph = firstParagraph(text);
  if (paragraph.length <= maxLength) return paragraph;

  const sentences = paragraph.split(/(?<=[.!?])\s+/);
  let summary = "";
  for (const sentence of sentences) {
    const next = summary ? `${summary} ${sentence}` : sentence;
    if (next.length > maxLength) break;
    summary = next;
  }

  return summary || `${paragraph.slice(0, maxLength).trimEnd()}...`;
}

function summarySource(lessonId: string): string {
  const content = lessonContents.find((lesson) => lesson.lessonId === lessonId);
  if (!content) return "Review the lesson framing and core teaching blocks for the main idea.";

  const preferredBlock =
    content.blocks.find((block) => block.type === "framing" && block.content) ??
    content.blocks.find(
      (block) =>
        (block.type === "teaching" || block.type === "example") && block.content
    );

  return preferredBlock?.content
    ? summarize(preferredBlock.content)
    : "Review the lesson framing and core teaching blocks for the main idea.";
}

function answerFromQuestion(question: QuizQuestion): string {
  if (question.type === "multiple-choice") {
    return `Correct answer: ${question.correctAnswer}`;
  }
  return summarize(question.modelAnswer);
}

const currentModule = getDefaultModule();

export const allReviewCards: ReviewCard[] = currentModule.lessons.flatMap((lesson) => {
  const content = lessonContents.find((item) => item.lessonId === lesson.lessonId);
  const topic = lesson.topics[0] ?? lesson.lessonId;

  const cards: ReviewCard[] = [
    {
      cardId: `${lesson.lessonId}-summary`,
      lessonId: lesson.lessonId,
      dayNumber: lesson.dayNumber,
      cardType: "flashcard",
      topic,
      front: `What is the core idea of ${lesson.title}?`,
      back: summarySource(lesson.lessonId),
    },
  ];

  const firstQuestion = content?.quiz[0];
  if (firstQuestion) {
    cards.push({
      cardId: `${lesson.lessonId}-${firstQuestion.questionId}`,
      lessonId: lesson.lessonId,
      dayNumber: lesson.dayNumber,
      cardType: firstQuestion.type === "multiple-choice" ? "mini-case" : "reteach",
      topic,
      front: firstQuestion.prompt,
      back: answerFromQuestion(firstQuestion),
    });
  }

  return cards;
});
