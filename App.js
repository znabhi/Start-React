
// const headingTag = React.createElement("h1",{},"hello world from React");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(headingTag);


// const headingTag = React.createElement('h1',{id:"heading"},'Hi Input ');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(headingTag);
// ReactDOM.render(root)


const nesteddivs = React.createElement('div',{id:"parent"},

[   React.createElement('div',{id:"child"},[
        React.createElement('h1',{},'Hi This nasted divs in reacts'),React.createElement('h2',{},'Hi This nasted divs in reacts')
    ]),
    React.createElement('div',{id:"child"},[
        React.createElement('h1',{},'Hi This nasted divs in reacts'),React.createElement('h2',{},'Hi This nasted divs in reacts')
    ])
]

);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(nesteddivs);
