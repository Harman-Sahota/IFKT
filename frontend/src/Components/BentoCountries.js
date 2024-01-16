// CountryList.jsx

import React,{useRef,useEffect} from 'react';
import './CountryList.css';



const countries = [
    { name: 'Canada', flagUrl: 'https://www.worldometers.info/img/flags/ca-flag.gif', region: 'North America' },
    { name: 'United States', flagUrl: 'https://www.worldometers.info/img/flags/us-flag.gif', region: 'North America' },
    { name: 'Mexico', flagUrl: 'https://www.worldometers.info/img/flags/mx-flag.gif', region: 'North America' },
    { name: 'Bangladesh', flagUrl: 'https://www.worldometers.info/img/flags/bg-flag.gif', region: 'Asia' },
    { name: 'Israel', flagUrl: 'https://www.worldometers.info/img/flags/is-flag.gif', region: 'Asia' },
    { name: 'Mongolia', flagUrl: 'https://www.worldometers.info/img/flags/mn-flag.gif', region: 'Asia' },
    { name: 'South Korea', flagUrl: 'https://www.worldometers.info/img/flags/ks-flag.gif', region: 'Asia' },
    { name: 'Turkey', flagUrl: 'https://www.worldometers.info/img/flags/tu-flag.gif', region: 'Asia' },
    { name: 'Bulgaria', flagUrl: 'https://www.worldometers.info/img/flags/bu-flag.gif', region: 'Europe' },
    { name: 'Croatia', flagUrl: 'https://www.worldometers.info/img/flags/hr-flag.gif', region: 'Europe' },
    { name: 'Czechia', flagUrl: 'https://www.worldometers.info/img/flags/ez-flag.gif', region: 'Europe' },
    { name: 'Germany', flagUrl: 'https://www.worldometers.info/img/flags/gm-flag.gif', region: 'Europe' },
    { name: 'Great Britain', flagUrl: 'https://www.worldometers.info/img/flags/uk-flag.gif', region: 'Europe' },
    { name: 'Hungary', flagUrl: 'https://www.worldometers.info/img/flags/hu-flag.gif', region: 'Europe' },
    { name: 'Ireland', flagUrl: 'https://www.worldometers.info/img/flags/ei-flag.gif', region: 'Europe' },
    { name: 'Poland', flagUrl: 'https://www.worldometers.info/img/flags/pl-flag.gif', region: 'Europe' },
    { name: 'Romania', flagUrl: 'https://www.worldometers.info/img/flags/ro-flag.gif', region: 'Europe' },
    { name: 'Russia', flagUrl: 'https://www.worldometers.info/img/flags/rs-flag.gif', region: 'Europe' },
    { name: 'Slovenia', flagUrl: 'https://www.worldometers.info/img/flags/si-flag.gif', region: 'Europe' },
    { name: 'Sweden', flagUrl: 'https://www.worldometers.info/img/flags/sw-flag.gif', region: 'Europe' },
    { name: 'Switzerland', flagUrl: 'https://www.worldometers.info/img/flags/sz-flag.gif', region: 'Europe' },
    { name: 'Ukraine', flagUrl: 'https://www.worldometers.info/img/flags/up-flag.gif', region: 'Europe' },
  ];

const CountryList = () => {


  return (
    <div className="country-list">
          <h2 id="sectionheading" >Member Countries</h2>
      {Array.from(new Set(countries.map(country => country.region))).map((region, regionIndex) => (
        <div key={regionIndex} className="region-heading">
          {region}
          <div className="country-grid">
        
            {countries
              .filter(country => country.region === region)
              .map((country, countryIndex) => (
                <div key={countryIndex} className="country-card">
                  <img src={country.flagUrl} alt={country.name} />
                  <div className="country-name">{country.name}</div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
