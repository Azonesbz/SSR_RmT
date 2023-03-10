import React, { useState } from "react";
function App() {
  const [n, setN] = useState(0);
  const increment = () => {
    setN((n2) => n2 + 1);
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Incrementr"), /* @__PURE__ */ React.createElement("span", null, n), /* @__PURE__ */ React.createElement("button", { onClick: increment }, "Ajouter 1"));
}
export {
  App
};
