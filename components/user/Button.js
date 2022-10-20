import { useNode } from '@craftjs/core';
import { Button as ButtonAnt, Radio } from 'antd';
import React from 'react';

export const Button = ({ size, variant, color, text, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div>
      <ButtonAnt ref={(ref) => connect(drag(ref))} color={color} type={variant} size={size} {...props}>
        {text}
        </ButtonAnt>
    </div>
  );
};

export const ButtonSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div>
      <div size="small">
        <h1 >Size</h1>
        <Radio.Group
          defaultValue={props.size}
          onChange={(e) => setProp((props) => (props.size = e.target.value))}
        >
          <div>
            <Radio value="small">
                small
              </Radio>
            </div>
          <div>
            <Radio value="medium">
              medium
              </Radio>
            </div>
          <div>
            <Radio value="large">
              large
              </Radio>
            </div>
        </Radio.Group>
      </div>
    </div>
  );
};

export const ButtonDefaultProps = {
  size: 'small',
  variant: 'contained',
  color: 'primary',
  text: 'Click me',
};

Button.craft = {
  props: ButtonDefaultProps,
  related: {
    settings: ButtonSettings,
  },
};
