export interface Question {
    id: number;
    isTrue: boolean;
    point: number;
    text?: string;
    image?: string;
    answers: Answer[];
}

export interface Answer {
    id: number;
    text: string;
    cost: number;
}

export interface UserAnswer {
    name: string;
    answers: Answer[];
}