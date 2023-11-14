import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from "../../ckeditor5/build/ckeditor"


function Form({ handleChange, post }) {
  return (
    <form>
      <div className="input">
        <label htmlFor="title"></label>
        <input placeholder="Title" onChange={handleChange} value={post.title} type="text" id="title" name="title" />
      </div>
      <div className="input">
        <div className="input">
          <label htmlFor="img"></label>
          <input placeholder="Image URL (optional)" onChange={handleChange} value={post.img} type="text" id="img_url" name="img" />
        </div>

        <div className='ckeditor-container'>
          <CKEditor
            config={{
              mediaEmbed: {
                previewsInData: true
              },
              placeholder: "Content (optional)",
              toolbar: {
                shouldNotGroupWhenFull: true
              }
            }}
            editor={Editor}
            data={post.content ? post.content : ""}
            onReady={editor => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              handleChange(editor);
            }}
          />



        </div>



      </div>
      <div className="radio-container">
        <input onChange={handleChange} type="radio" id="general" name="category" value="general" />
        <label className="radio" htmlFor="general">General (default)</label><br />

        <input onChange={handleChange} type="radio" id="review" name="category" value="review" />
        <label className="radio" onChange={handleChange} htmlFor="review">Review</label><br />

        <input onChange={handleChange} type="radio" id="recommend" name="category" value="recommend" />
        <label className="radio" htmlFor="recommend">Recommend</label><br />

      </div>
    </form>
  )
}

export default Form
