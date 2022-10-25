import React, { useState } from "react";
import "./Accordion.css";

const Accordion = (props) => {
  const [active, setActive] = useState(false);

  const { id, name, message, child, level } = props.data;

  return (
    <div style={{ paddingLeft: `${level * 10}px` }} className="accordion">
      <div
        onClick={() => setActive((prev) => !prev)}
        id={id}
        className="accordion-header"
      >
        <strong>{name}</strong>
        <p>{message}</p>
        {child.length > 0 && <button>{active ? "X" : "+"}</button>}
      </div>
      {active && child.map((item) => <Accordion key={item.id} data={item} />)}
    </div>
  );
};

export default Accordion;
