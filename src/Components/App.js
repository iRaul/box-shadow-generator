import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

import InsetCheckbox from './Checkbox';
import ColorPicker from './ColorPicker';
import RangeInput from './Range';
import Container from './Container';
import BoxShadow from './BoxShadow';
import Title from './Title';
import Panel from './Panel';
import Code from './Code';

const App = () => {
  const [inset, setInset] = useState(false);
  const [colorPicker, setColorPicker] = useState(false);
  const [value, setValue] = useState({
    x: 10, // x offset
    y: 10, // y offset
    b: 0, // blur
    s: 0, // spread
    c: {
      // color
      r: 51,
      g: 51,
      b: 51,
      a: 1,
    },
  });

  const handleOpenColorPicker = () => {
    setColorPicker(!colorPicker);
  };

  const handleColor = color => {
    const newColor = {
      ...value,
      c: color.rgb,
    };

    setValue(newColor);
  };

  const handleInset = e => {
    setInset(e.target.checked);
  };

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

      <BoxShadow {...value} inset={inset} />

      <Code {...value} inset={inset} />

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

        <InsetCheckbox onChange={handleInset} />

        <ColorPicker onClick={handleOpenColorPicker} color={value.c} />
        {colorPicker ? (
          <ChromePicker color={value.c} onChange={handleColor} />
        ) : null}
      </Panel>
    </Container>
  );
};

export default App;
