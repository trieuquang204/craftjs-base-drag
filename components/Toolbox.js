import { useEditor, Element } from '@craftjs/core';
import React from 'react';

import { Button as ButtonAnt } from 'antd';

import { Button } from './user/Button';
import { Card } from './user/Card';
import { Container } from './user/Container';
import { Text } from './user/Text';

export const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <div>
      <div
      >
        <div>
          <h3>Drag to add</h3>
        </div>
        <div>
          <ButtonAnt
            ref={(ref) =>
              connectors.create(ref, <Button text="Click me" size="small" />)
            }
            variant="contained"
            data-cy="toolbox-button"
          >
            Button
          </ButtonAnt>
        </div>
        <div>
          <ButtonAnt
            ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
            variant="contained"
            data-cy="toolbox-text"
          >
            Text
          </ButtonAnt>
        </div>
        <div>
          <ButtonAnt
            ref={(ref) =>
              connectors.create(
                ref,
                <Element canvas is={Container} padding={20} />
              )
            }
            variant="contained"
            data-cy="toolbox-container"
          >
            Container
          </ButtonAnt>
        </div>
        <div>
          <ButtonAnt
            ref={(ref) => connectors.create(ref, <Card />)}
            variant="contained"
            data-cy="toolbox-card"
          >
            Card
          </ButtonAnt>
        </div>
      </div>
    </div>
  );
};
