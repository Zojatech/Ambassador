import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Link = ({ pageSection, setOpen }) => {
  const lowerCasePage = pageSection.toLowerCase().replace(/ /g, '');

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      className='cursor-pointer'
      onClick={() => {
        setOpen(false);
      }}
    >
      {pageSection}
    </AnchorLink>
  );
};

export default Link;
