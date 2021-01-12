import React from 'react';
import {
  InputBox, DetectButton, CenteredBox, PSmaller,
} from '../style/styled';

function ImageLinkForm() {
  return (
    <CenteredBox>
      <PSmaller>This Magic Brain will detect faces in your pictures. Give it a try.</PSmaller>
      <InputBox>
        <input type="text" />
        <DetectButton type="submit">Detect</DetectButton>
      </InputBox>
    </CenteredBox>
  );
}

export default ImageLinkForm;
