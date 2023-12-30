import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from "../../ckeditor5/build/ckeditor"
import TagDialog from './TagDialog';



function Form({ handleChange, post, addTag, deleteTag }) {

  const displayTags = post.tags.map((tag) => {
    return <span key={tag + post} className={`post-category post-tags-form-display`}>#{tag}</span>
  })

  return (
    <form>
      <div className="input">
        <label htmlFor="title"></label>
        <input placeholder="Title" onChange={handleChange} value={post.title} type="text" id="title" name="title" />
      </div>
      <div className="input">
        <div className="input">
          <label htmlFor="img"></label>
          <input placeholder="Cover image url (optional)" onChange={handleChange} value={post.img} type="text" id="img_url" name="img" />
        </div>

        <div className='ckeditor-container'>
          <CKEditor
            config={{
              mediaEmbed: {
                previewsInData: true
              },
              placeholder: "Content (optional)",
              toolbar: {
                shouldNotGroupWhenFull: true,
              },
              fullscreen: {
                closeOnEscape: true,
                closeOnClick: false,
              }
            }}
            editor={Editor}
            data={post.content ? post.content : ""}
            onReady={editor => {
              console.log('Editor is ready to use!', editor);
              editor.editing.view.document.on("click", (evt, data) => {
                fullscreen(editor);
              })
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              handleChange(editor);
            }}
          />
        </div>
      </div>


      <div className='outer-tag-container'>
        <div className="tag-container">
          <div className='inner-tags-container'>{displayTags}</div>
          <TagDialog handleChange={handleChange} post={post} addTag={addTag} deleteTag={deleteTag} />
        </div>
      </div>
    </form >
  )
}

export default Form
