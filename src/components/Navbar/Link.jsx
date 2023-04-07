import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Link = ({
  pageSection,
  selectedSection,
  setSelectedSection,
  setOpen,
}) => {
  const lowerCasePage = pageSection.toLowerCase().replace(/ /g, '');

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      //   className={`${selectedSection === lowerCasePage ? classes.active : ''} ${
      //     classes.link
      //   }`}
      className='cursor-pointer'
      onClick={() => {
        // setSelectedSection(lowerCasePage);
        setOpen(false);
      }}
    >
      {pageSection}
    </AnchorLink>
  );
};

export default Link;
