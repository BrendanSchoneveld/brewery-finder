import React from "react";

const TableRow = ({
  name,
  duration,
  city,
  distance,
  link,
  position,
  index
}) => {
  const displayDuration = duration ? duration.text : "",
    displayCity = city ? city : "",
    displayDistance = distance ? distance.text : "";

  return (
    <tr>
      <td className="text-left">{position || name}</td>
      <td>{displayCity || city}</td>
      <td>{displayDuration || duration}</td>
      <td>{displayDistance || distance}</td>
      {/* <td>
        <i className="fas fa-map-marked-alt text-4xl"></i>
      </td> */}
    </tr>
  );
};

export default TableRow;
