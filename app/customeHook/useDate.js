import React from "react";

function useDate(timestamp) {
  const dt = timestamp.getDate();
  const month = timestamp.getMonth();
  const year = timestamp.getFullYear();
  const hrs = timestamp.getHours();
  const min = timestamp.getMinutes();

  const day = `${dt}/${month}/${year}`;

  const time = `${hrs}:${min}`;

  return { day, time };
}

export default useDate;
