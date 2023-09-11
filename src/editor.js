import React, { Component } from 'react'
import ReactQuill from 'react-quill'

import 'react-quill/dist/quill.snow.css'

export class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }

  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '–1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  }

  formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ]

  handleChange = value => {
    this.setState(prevState => ({
      ...prevState,
      text: value,
    }))
  }

  render() {
    console.log(this.props.readOnly)
    return (
      <>
        <span>{this.props.readOnly.toString()}</span>
        <div className="text-editor">
          <ReactQuill
            theme="snow"
            modules={this.modules}
            formats={this.formats}
            onChange={this.handleChange}
            value={this.state.text}
          />
        </div>
      </>
    )
  }
}

export default Editor
