import { Question } from './question';

export const questions: Question[] = [
    {
        id: 15,
        isTrue: false,
        point: 0,
        text: 'В каком варианте правильно указано изменение типа шрифта?',
        answers: [
            {
                id: 0,
                cost: 0,
                text: "text-family: 'Opensans'"
            },
            {
                id: 1,
                cost: 0,
                text: "font: 'OpenSans'"
            },
            {
                id: 2,
                cost: 2,
                text: "font-family: 'OpenSans"
            },
            {
                id: 3,
                cost: 0,
                text: "font-text: 'OpenSans"
            }
        ]
    },
    {
        id: 16,
        isTrue: false,
        point: 0,
        text: 'какие основные типы перестроения верстки под устройства существуют?',
        answers: [
            {
                id: 0,
                cost: 2,
                text: "Резиновый и адаптивный"
            },
            {
                id: 1,
                cost: 0,
                text: "Перестроения в html нет"
            },
            {
                id: 2,
                cost: 0,
                text: "Угловой и прямолинейный"
            }
        ]
    },
    {
        id: 17,
        isTrue: false,
        point: 0,
        text: 'какой прием ипользуется для "резиновой" верстки?',
        answers: [
            {
                id: 0,
                cost: 0,
                text: "Все значения в px"
            },
            {
                id: 1,
                cost: 2,
                text: "Все значения в rem"
            },
            {
                id: 2,
                cost: 0,
                text: "Использование @media запросов"
            },
            {
                id: 3,
                cost: 3,
                text: "Все значения в %"
            },
            {
                id: 4,
                cost: 4,
                text: "Сочетание % и rem"
            }
        ]
    },
    {
        id: 17,
        isTrue: false,
        point: 0,
        text: 'В каком из вариантов верно указаны свойства для получения такого овала?',
        image: '15.jpg',
        answers: [
            {
                id: 0,
                cost: 7,
                text: "Нет правильного"
            },
            {
                id: 1,
                cost: 0,
                text: "<b>width:</b> 250px;<br><b>height:</b> 100px;<br><b>border-radius:</b> 100%<br><b>background:</b> green;<br><b>border:</b> 2px solid red;"
            },
            {
                id: 2,
                cost: 0,
                text: "<b>width:</b> 250px;<br><b>height:</b> 250px;<br><b>border-radius:</b> 100%<br><b>background:</b> green;<br><b>border:</b> 2px solid red;"
            },
            {
                id: 3,
                cost: 0,
                text: "<b>width:</b> 250px;<br><b>height:</b> 100px;<br><b>border-radius:</b> 50%<br><b>background:</b> green;<br><b>border:</b> 2px solid red;<br><b>transform:</b> rotate(180deg);"
            }
        ]
    },
    {
        id: 18,
        isTrue: false,
        point: 0,
        text: 'В каком варианте наиболее полно перечислены приемы для реализации анимации?',
        answers: [
            {
                id: 0,
                cost: 0,
                text: "Нет правильного"
            },
            {
                id: 3,
                cost: 2,
                text: "@keyframes и transition"
            },
            {
                id: 1,
                cost: 1,
                text: "@keyframes"
            },
            {
                id: 2,
                cost: 1,
                text: "transition"
            }
        ]
    },
    {
        id: 18,
        isTrue: false,
        point: 0,
        text: 'В каком из вариантов верно указаны свойства для получения такого овала?',
        image: '15.jpg',
        answers: [
            {
                id: 0,
                cost: 6,
                text: "Оба правильные"
            },
            {
                id: 1,
                cost: 3,
                text: "<b>width:</b> 150px;<br><b>height:</b> 250px;<br><b>border-radius:</b> 100%<br><b>background:</b> green;<br><b>border:</b> 2px solid red;"
            },
            {
                id: 2,
                cost: 3,
                text: "<b>width:</b> 250px;<br><b>height:</b> 150px;<br><b>border-radius:</b> 100%<br><b>background:</b> green;<br><b>border:</b> 2px solid red;<br><b>transform:</b> rotate(90deg);"
            },
            {
                id: 3,
                cost: 0,
                text: "Нет правильного"
            }
        ]
    }
]