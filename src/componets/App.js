import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

import InsetCheckbox from './Checkbox';
import ColorPicker from './ColorPicker';
import GlobalStyle from './Global';
import RangeInput from './Range';
import Container from './Container';
import BoxShadow from './BoxShadow';
import Title from './Title';
import Panel from './Panel';
import Code from './Code';
import Main from './Main';

const App = () => {
  const [inset, setInset] = useState(false);
  const [colorPicker, setColorPicker] = useState(false);
  const [value, setValue] = useState({
    x: 0, // x offset
    y: 25, // y offset
    b: 20, // blur
    s: -20, // spread
    c: {
      // color
      r: 51,
      g: 51,
      b: 51,
      a: 0.3,
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
    <>
      <GlobalStyle />
      <Container>
        <Main>
          <Title>Box Shadow Generator</Title>
          <BoxShadow {...value} inset={inset} />
          <Code {...value} inset={inset} />
        </Main>

        <Panel>
          <RangeInput
            name="Offset X"
            min={-50}
            max={50}
            value={value.x}
            onInput={handleInput('x')}
          />

          <RangeInput
            name="Offset Y"
            min={-50}
            max={50}
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
            min={-50}
            max={50}
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
    </>
  );
};

export default App;
