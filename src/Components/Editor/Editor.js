import React, { useState } from 'react'
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

function Editor({VALUE,onChange}) {

    // const [ProductDiscription, setProductDiscription] = useState()
    // const handleDescriptionChange = (content) => {
    //   setProductDiscription(content);
    // }

  return (
    <div>

        <SunEditor
autoFocus={true}
placeholders="enter text"
height="200"
width="100%"
onChange={onChange}
// setContents={contents}

toggleDisplayBlocks
setOptions={{
  buttonList: [
    [
      "bold",
      "fontSize",
      "underline",
      "italic",
      "strike",
      "formatBlock",
      "subscript",
      "superscript",
      "fontColor",
      "outdent",
      "indent",
      "hiliteColor",
      "paragraphStyle",
      "textStyle",
      "align",
      "horizontalRule",
      "list",
      "lineHeight",
      "table",
      "image",
      "video",
      "audio",
      "link",
      "codeView",

    ],
  ],
}}
/>
    </div>
  )
}

export default Editor