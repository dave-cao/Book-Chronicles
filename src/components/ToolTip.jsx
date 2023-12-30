import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { PlusIcon } from '@radix-ui/react-icons';
import '../styles/tags-tooltip.css';
import getTagColor from '../functions/getTagColor';

const TagsTooltip = ({ tags, subtracted }) => {

  const displayTags = () => {
    tags = tags.slice(subtracted);
    return tags.map((tag) => {
      let tagColor = getTagColor(tag);
      return <p key={tag} className={`post-category ${tagColor}`}>#{tag}</p>
    })
  }

  return (
    <div>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button className="IconButton tags-plus-button">
              <PlusIcon />
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="TooltipContent" sideOffset={5}>
              {displayTags()}
              <Tooltip.Arrow className="TooltipArrow" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>

    </div>
  );
};

export default TagsTooltip;

