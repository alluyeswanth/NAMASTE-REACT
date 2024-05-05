const heading =React.createElement(
    "hi",
    {id:"heading",xyz:"abc"},
    "hello world from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)