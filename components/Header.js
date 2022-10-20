import { useEditor } from '@craftjs/core';
import React from 'react';
import { Button as ButtonAnt } from 'antd';

import { Button } from './user/Button';
import { Card } from './user/Card';
import { Text } from './user/Text';

export const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <div style={{padding: '20px'}}>
      <div
      style={{display: 'flex', flex-direction: 'column', alignItems: 'center', justifyContent: 'center'}}
      >
        <div>
          <h2>Drag to add</h2>
        </div>
        <div>
          <ButtonAnt
            ref={(ref) =>
              connectors.create(ref, <Button text="Click me" size="small" />)
            }
            variant="contained"
          >
            Button
          </ButtonAnt>
        </div>
        <div>
          <ButtonAnt
            ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
            variant="contained"
          >
            Text
          </ButtonAnt>
        </div>
        <div>
          <ButtonAnt
            ref={(ref) => connectors.create(ref, <Card />)}
            variant="contained"
          >
            Card
          </ButtonAnt>
        </div>
      </div>
    </div>
  );
};
