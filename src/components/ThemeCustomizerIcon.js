import React from 'react';
import { useHistory } from '@docusaurus/router';

export default function ThemeCustomizerIcon() {
  const history = useHistory();
  
  return (
    <button
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.2rem',
      }}
      onClick={() => history.push('/custom-theme')}
      title="Customize Theme"
    >
      🎨
    </button>
  );
}
