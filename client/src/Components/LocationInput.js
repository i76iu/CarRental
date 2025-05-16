import React from 'react';
import { MdLocationOn } from 'react-icons/md';


const LocationSelect = ({ value, onChange }) => (
  <div className="location-select">
    <MdLocationOn size={20} color="#666" className="location-icon" />
    <select
      className="location-dropdown-select"
      value={value}
      onChange={onChange}
    >
      <option value="muscat-international-airport">
        Muscat International Airport
      </option>
    </select>
  </div>
);

export default LocationSelect;

