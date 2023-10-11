import React, { useEffect, useState } from "react";

const TableOfContents = ({ data }) => {
  return (
    <div>
      {data &&
        data.map((e, i) => {
          return (
            <a key={i} href={`#${e.id}`}>
              {e.label}
            </a>
          );
        })}
    </div>
  );
};

export default TableOfContents;
