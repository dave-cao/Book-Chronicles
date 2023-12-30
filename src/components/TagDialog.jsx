import React, { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import '../styles/radix.css'
import pressEnter from '../functions/pressEnter';

const TagDialog = ({ handleChange, post, addTag, deleteTag }) => {
  const [tag, setTag] = useState("")
  const handleTagInput = (e) => {
    setTag(e.target.value)
  }


  const displayTags = () => {
    return post.tags.map((tag) => <span className='post-category post-tags-form-display' key={tag}>#{tag} <span className='delete-tag' onClick={() => { deleteTag(tag) }}>x</span></span>)
  }





  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button orange-button set-tag-button">Set Tags</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Set Tags</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Here is where you set your tags.
          </Dialog.Description>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="tag">
              Enter Tags
            </label>
            <input onKeyUp={(e) => { pressEnter(e, () => { addTag(tag); setTag("") }) }} value={tag} onChange={handleTagInput} className="Input" id="name" />

            <button onClick={() => { addTag(tag) }} className="Button purple add-tag-button">+</button>
          </fieldset>


          <Dialog.DialogDescription>
            <div className='pop-up-tag-container'>
              {displayTags()}
            </div>
          </Dialog.DialogDescription>
          <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
            <Dialog.Close asChild>
              <button name="tags" className="Button save-button">Close</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default TagDialog;

