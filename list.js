'use strict';

var container = document.getElemenById('root');
var root = reactDom.createRoot(container);
root.render(React.createElement(App, null));

function App() {
   return React.createElement(
      'section',
      { className: 'game' },
      React.createElement(
         'ul',
         { className: 'cards' },
         React.createElement(
            'li',
            { className: 'card' },
            React.createElement(
               'span',
               null,
               '1'
            )
         ),
         React.createElement(
            'li',
            { className: 'card' },
            React.createElement(
               'span',
               null,
               '2'
            )
         ),
         React.createElement(
            'li',
            { className: 'card' },
            React.createElement(
               'span',
               null,
               '3'
            )
         ),
         React.createElement(
            'li',
            { className: 'card' },
            React.createElement('img', { src: 'img/photo-card-4.jpg', selected: true, width: '185', height: '100', alt: '' })
         ),
         React.createElement(
            'li',
            { className: 'card' },
            React.createElement('img', { src: 'img/photo-card-5.jpg', width: '185', height: '100', alt: '' })
         ),
         React.createElement(
            'li',
            { className: 'card' },
            React.createElement('img', { src: 'img/photo-card-6.jpg', width: '185', height: '100', alt: '' })
         ),
         React.createElement(
            'li',
            { className: 'card' },
            React.createElement('img', { src: 'img/photo-card-7.jpg', width: '185', height: '100', alt: '' })
         ),
         React.createElement(
            'li',
            { className: 'card' },
            React.createElement('img', { src: 'img/photo-card-8.jpg', width: '185', height: '100', alt: '' })
         ),
         React.createElement(
            'li',
            { className: 'card' },
            React.createElement(
               'span',
               null,
               '9'
            )
         ),
         React.createElement(
            'li',
            { className: 'card' },
            React.createElement(
               'span',
               null,
               '10'
            )
         ),
         React.createElement(
            'li',
            { className: 'card' },
            React.createElement(
               'span',
               null,
               '11'
            )
         ),
         React.createElement(
            'li',
            { className: 'card' },
            React.createElement(
               'span',
               null,
               '12'
            )
         ),
         React.createElement(
            'li',
            { className: 'card' },
            React.createElement(
               'span',
               null,
               '13'
            )
         ),
         React.createElement(
            'li',
            { className: 'card' },
            React.createElement(
               'span',
               null,
               '14'
            )
         ),
         React.createElement(
            'li',
            { className: 'card' },
            React.createElement(
               'span',
               null,
               '15'
            )
         )
      )
   );
}