class UploaderController {
  constructor() {
    this.name = 'uploader';

    this.conceptupload=[
    	{
    		status        :'yes',
    		type          :'upload a file (.ai / .pdf /.jpeg /.png /.xml)',
            classname     :'fileinput'
    	},
    	{
    		status        :'no',
    		type          :'(please create one for me)',
            classname     :'noinput'
    	},
    ];
  }
}

export default UploaderController;
