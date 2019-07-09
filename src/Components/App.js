import React, { useState } from 'react';

import RangeInput from './Range';
import Container from './Container';
import BoxShadow from './BoxShadow';
import Title from './Title';
import Panel from './Panel';
import Code from './Code';

const App = () => {
  const [value, setValue] = useState({
    x: 0, // x offset
    y: 0, // y offset
    b: 0, // blur
    s: 0, // spread
  });

  const handleInput = property => e => {
    const newValue = {
      ...value,
      [property]: e.target.value,
    };

    setValue(newValue);
  };

  return (
    <Container>
      <Title>Box Shadow Generator</Title>

      <BoxShadow {...value} />

      <Code {...value} />

      <Panel>
        <RangeInput
          name="Offset X"
          min={-100}
          max={100}
          value={value.x}
          onInput={handleInput('x')}
        />
        <RangeInput
          name="Offset Y"
          min={-100}
          max={100}
          value={value.y}
          onInput={handleInput('y')}
        />
        <RangeInput
          name="Blur"
          min={0}
          max={100}
          value={value.b}
          onInput={handleInput('b')}
        />
        <RangeInput
          name="Spread"
          min={0}
          max={100}
          value={value.s}
          onInput={handleInput('s')}
        />
      </Panel>
    </Container>
  );
};

export default App;
