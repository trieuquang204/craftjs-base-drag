import { useNode } from '@craftjs/core';
import { Input, Slider } from 'antd';
import React from 'react';

export const Container = ({ background, padding, children, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      {...props}
      ref={(ref) => connect(drag(ref))}
      style={{ margin: '5px 0', background, padding: `${padding}px` }}
    >
      {children}
    </div>
  );
};

export const ContainerSettings = () => {
  const {
    background,
    padding,
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

  return (
    <div>
      <div>
        <h1>Background</h1>
        <Input
          name="background-color"
          value={background}
          placeholder={background}
          onChange={(color) => {
            setProp((props) => (props.background = color), 500);
          }}
        />
        
      </div>
      <div>
        <h1>Padding</h1>
        <Slider
          defaultValue={padding}
          onChange={(value) =>
            setProp((props) => (props.padding = value), 500)
          }
        />
      </div>
    </div>
  );
};

export const ContainerDefaultProps = {
  background: '#ffffff',
  padding: 3,
};

Container.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};
