interface Text {
   text: string
}
export interface ResponseServer {
   category: string
   id: string
   correct_answer: string
   incorrectAnswer: string[]
   question: Text
   total: number
}
