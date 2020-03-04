import { Question } from './question';

export const questions: Question[] = [
    {
        id: 0,
        isTrue: false,
        point: 0,
        text: 'Выберите правильный набор свойств для получения такого квадрата?',
        image: '0.jpg',
        answers: [
            {
                id: 1,
                cost: 0,
                text: '<b>width:</b> 100px;<br><b>height:</b> 150px;<br><b>background: </b> red;',
            },
            {
                id: 2,
                cost: 0,
                text: '<b>width:</b> 100px;<br><b>height:</b> 100px;<br><b>border: </b> red;',
            },
            {
                id: 3,
                cost: 3,
                text: '<b>width:</b> 100px;<br><b>height:</b> 100px;<br><b>background: </b> red;',
            },
            {
                id: 4,
                cost: 0,
                text: '<b>width:</b> 100px;<br><b>height:</b> 100px;<br><b>color: </b> red;',
            }
        ]
    },
    {
        id: 1,
        isTrue: false,
        point: 0,
        text: 'Выберите правильный набор свойств для получения такого круга?',
        image: '1.jpg',
        answers: [
            {
                id: 1,
                cost: 0,
                text: '<b>width:</b> 200px;<br><b>height:</b> 200px;<br><b>radius:</b> 50%;<br><b>background: </b> green;',
            },
            {
                id: 2,
                cost: 4,
                text: '<b>width:</b> 200px;<br><b>height:</b> 200px;<br><b>border-radius: </b> 100%;<br>    <b>background: </b> green;',
            },
            {
                id: 3,
                cost: 0,
                text: '<b>width:</b> 200px;<br><b>height:</b> 250px;<br><b>border-radius: </b> 50%;<br><b>background: </b> green;',
            },
            {
                id: 4,
                cost: 0,
                text: '<b>width:</b> 200px;<br><b>height:</b> 200px;<br><b>border: </b> 100px;<br><b>background: </b> green;',
            }
        ]
    },
    {
        id: 2,
        isTrue: false,
        point: 0,
        text: 'К какому типу относится тег <div>?',
        image: null,
        answers: [
            {
                id: 1,
                cost: 1,
                text: 'Блочный',
            },
            {
                id: 2,
                cost: 0,
                text: 'Квадратный',
            },
            {
                id: 3,
                cost: 0,
                text: 'Строчный',
            },
            {
                id: 4,
                cost: 0,
                text: 'Прямоугольный',
            }
        ]
    },
    {
        id: 3,
        isTrue: false,
        point: 0,
        text: 'Какие теги являются важнейшими для СЕО?',
        image: null,
        answers: [
            {
                id: 1,
                cost: 0,
                text: 'span, div, input',
            },
            {
                id: 2,
                cost: 0,
                text: 'br, html, textarea',
            },
            {
                id: 3,
                cost: 0,
                text: 'span, head',
            },
            {
                id: 4,
                cost: 2,
                text: 'title, h.., meta',
            }
        ]
    },
    {
        id: 4,
        isTrue: false,
        point: 0,
        text: 'Какие свойства CSS нужно применить к тегу span, чтобы ему можно было установить размеры (высоту и ширину)',
        image: null,
        answers: [
            {
                id: 1,
                cost: 0,
                text: 'Ничего не нужно делать, достаточно задать <b>width</b> и <b>height</b>',
            },
            {
                id: 2,
                cost: 3,
                text: 'задать <b>display: block</b> или <b>display: inline-block</b>',
            },
            {
                id: 3,
                cost: 0,
                text: 'задать <b>display: inline;</b>',
            },
            {
                id: 4,
                cost: 6,
                text: 'задать <b>display: block</b> или <b>display: inline-block</b> или <b>display: flex;</b>',
            }
        ]
    },
    {
        id: 5,
        isTrue: false,
        point: 0,
        text: 'Сместится ли зеленый блок на 50px вниз, если к синему блоку применить margin-top:50px ?',
        image: '5.jpg',
        answers: [
            {
                id: 1,
                cost: 5,
                text: 'Да, они оба сместяться вниз на 50px (при условии что ни один из блоков не установлен в position: fixed или absolute)',
            },
            {
                id: 2,
                cost: 0,
                text: 'Да, они оба сместяться вниз на 50px (при условии что каждый из блоков установлен в position: fixed или absolute)',
            },
            {
                id: 3,
                cost: 0,
                text: 'Нет, не сместится ни при каких условиях',
            },
            {
                id: 4,
                cost: 0,
                text: 'Да, сместится. При этом синий блок останется на месте',
            }
        ]
    },
    {
        id: 6,
        isTrue: false,
        point: 0,
        text: 'К какому типу относятся теги группы <h>?',
        image: null,
        answers: [
            {
                id: 1,
                cost: 2,
                text: 'Блочный',
            },
            {
                id: 2,
                cost: 0,
                text: 'Квадратный',
            },
            {
                id: 3,
                cost: 0,
                text: 'Строчный',
            },
            {
                id: 4,
                cost: 0,
                text: 'Прямоугольный',
            }
        ]
    },
    {
        id: 7,
        isTrue: false,
        point: 0,
        text: 'Для чего используется свойство z-index ?',
        image: null,
        answers: [
            {
                id: 1,
                cost: 0,
                text: 'Для нумерации элементов',
            },
            {
                id: 2,
                cost: 0,
                text: 'Для отступов при использовании flex',
            },
            {
                id: 3,
                cost: 0,
                text: 'Для поворота элемента на определенный угол',
            },
            {
                id: 4,
                cost: 2,
                text: 'Для визуального расположения элементов друг над другом',
            }
        ]
    },
    {
        id: 8,
        isTrue: false,
        point: 0,
        text: 'Чтобы свойство z-index сработало, какое важное свойство должно быть установлено у элемента?',
        image: null,
        answers: [
            {
                id: 1,
                cost: 0,
                text: '<b>position: static</b>',
            },
            {
                id: 2,
                cost: 0,
                text: 'Сработает и без дополнительных свойств',
            },
            {
                id: 3,
                cost: 2,
                text: '<b>position: relative</b>',
            },
            {
                id: 4,
                cost: 2,
                text: '<b>position: absolute</b>',
            },
            {
                id: 4,
                cost: 5,
                text: '<b>position: absolute</b> или <b>position: relative</b> или <b>position: fixed</b>',
            }
        ]
    },
    {
        id: 9,
        isTrue: false,
        point: 0,
        text: 'Для чего нужен псевдокласс :hover',
        image: null,
        answers: [
            {
                id: 1,
                cost: 0,
                text: 'Для создания копии существующего элемента',
            },
            {
                id: 2,
                cost: 0,
                text: 'Такого псевдокласса нет',
            },
            {
                id: 3,
                cost: 2,
                text: 'Для изменения внешнего вида элемента при наведении курсора мыши',
            },
            {
                id: 4,
                cost: 0,
                text: 'Для изменения прозрачности элемента',
            }
        ]
    },
    {
        id: 10,
        isTrue: false,
        point: 0,
        text: 'Сместится ли зеленый блок на 50px вниз, если к синему блоку применить transform:translateY(50px) ?',
        image: '5.jpg',
        answers: [
            {
                id: 1,
                cost: 0,
                text: 'Да, они оба сместяться вниз на 50px (при условии что ни один из блоков не установлен в position: fixed или absolute)',
            },
            {
                id: 2,
                cost: 0,
                text: 'Да, они оба сместяться вниз на 50px (при условии что каждый из блоков установлен в position: fixed или absolute)',
            },
            {
                id: 3,
                cost: 5,
                text: 'Нет, не сместится ни при каких условиях',
            },
            {
                id: 4,
                cost: 0,
                text: 'Да, сместится. При этом синий блок останется на месте',
            }
        ]
    },
    {
        id: 11,
        isTrue: false,
        point: 0,
        text: 'На картинке сверху текущий результат, снизу - ожидаемый. Какого свойства (свойств) не хватает желтому блоку?',
        image: '10.jpg',
        answers: [
            {
                id: 1,
                cost: 0,
                text: '<b>position:</b> absolute;<br><b>width:</b> 50%;',
            },
            {
                id: 2,
                cost: 3,
                text: '<b>overflow:</b> hidden;',
            },
            {
                id: 3,
                cost: 0,
                text: '<b>opacity:</b> 0',
            },
            {
                id: 4,
                cost: 0,
                text: '<b>text-decoration:</b> none;<br><b>white-space:</b> no-wrap;',
            }
        ]
    },
    {
        id: 12,
        isTrue: false,
        point: 0,
        text: 'Для чего нужен псевдокласс :active',
        image: null,
        answers: [
            {
                id: 1,
                cost: 3,
                text: 'Для настройкой внешнего вида тега <a> на которую по ссылке ранее уже осуществлялся переход',
            },
            {
                id: 2,
                cost: 0,
                text: 'Такого псевдокласса нет',
            },
            {
                id: 3,
                cost: 0,
                text: 'Для изменения внешнего вида элемента при наведении курсора мыши',
            },
            {
                id: 4,
                cost: 0,
                text: 'Для активации кнопки <button>',
            }
        ]
    },
    {
        id: 13,
        isTrue: false,
        point: 0,
        text: 'Укажите в каком из ответов правильно настроен текстовый блок для замены текста который не влез на троеточие?',
        image: '14.jpg',
        answers: [
            {
                id: 1,
                cost: 0,
                text: '<b>overflow:</b> hidden;<br><b>display:</b> block;<br><b>text-overflow:</b> ellipsis;',
            },
            {
                id: 2,
                cost: 0,
                text: '<b>width:</b> 200px;<br><b>overflow:</b> hidden;<br><b>display:</b> block;<br>',
            },
            {
                id: 3,
                cost: 0,
                text: '<b>width:</b> 200px;<br><b>display:</b> block;',
            },
            {
                id: 4,
                cost: 7,
                text: '<b>width:</b> 200px;<br><b>overflow:</b> hidden;<br><b>display:</b> block;<br><b>text-overflow:</b> ellipsis;',
            },
            {
                id: 5,
                cost: 0,
                text: 'Не нужно свойств, браузер все сделает за меня',
            }
        ]
    },
    {
        id: 13,
        isTrue: false,
        point: 0,
        text: 'Найдите ответ, в котором нет ошибок в html коде',
        image: null,
        answers: [
            {
                id: 1,
                cost: 0,
                text: '&lt;span klass="test"&gt;My text&lt;/span&gt;',
            },
            {
                id: 2,
                cost: 0,
                text: '&lt;img src="test.jpg"&gt;',
            },
            {
                id: 3,
                cost: 5,
                text: '&lt;p class="paragraph"&gt;Hello my friends&lt;/p&gt;',
            },
            {
                id: 4,
                cost: 0,
                text: '&lt;img src="test.jpg"&gt;&lt;/img&gt;',
            },
            {
                id: 5,
                cost: 0,
                text: '&lt;img src="test.jpg&gt;',
            }
        ]
    },
]