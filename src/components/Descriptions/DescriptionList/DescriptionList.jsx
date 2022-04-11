import './DescriptionList.css'

import React from 'react'

export default function DescriptionList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "descriptionList active" : "descriptionList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
