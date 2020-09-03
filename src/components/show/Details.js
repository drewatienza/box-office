import React from 'react';

import { DetailWrapper } from './Details.styled';

const Details = ({ status, premiered, network }) => {
  return (
    <DetailWrapper>
      <p>
        Status: <span>{status}</span>
      </p>
      <p>
        Premiered {premiered} {network ? `on ${network.name}` : null}
      </p>
    </DetailWrapper>
  );
};

export default Details;
