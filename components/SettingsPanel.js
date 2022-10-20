import { useEditor } from '@craftjs/core';
import React from 'react';
import { Button as ButtonAnt } from 'antd';

export const SettingsPanel = () => {
  const { actions, selected, isEnabled } = useEditor((state, query) => {
    const currentNodeId = query.getEvent('selected').last();
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
      isEnabled: state.options.enabled,
    };
  });

  return isEnabled && selected ? (
    <div style={{padding: '20px'}}>
      <div>
        <div>
          <div>
            <div>
              <div>
                <h3 variant="subtitle1">Selected</h3>
              </div>
              <div>
                <h2 style={{color: 'red'}}>{selected.name}</h2>
              </div>
            </div>
          </div>
        </div>
        <div data-cy="settings-panel">
          {selected.settings && React.createElement(selected.settings)}
        </div>
        {selected.isDeletable ? (
          <ButtonAnt
            style={{width: '100%'}}
            variant="contained"
            color="default"
            onClick={() => {
              actions.delete(selected.id);
            }}
          >
            Delete
          </ButtonAnt>
        ) : null}
      </div>
    </div>
  ) : null;
};
