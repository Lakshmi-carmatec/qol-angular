class HomeController {
  constructor() {
    this.name = 'home';

    this.col_class= 'col-lg-4 com-md-4 col-sm-4 col-xs-12';

    this.fillheading='please fill out the form below to get started'; 

    this.steps=[
    	{
    		steplink :'#step1',
    		class 	 :'select',
    		stepno	 :'step1'

    	},
    	{
    		steplink :'#step2',
    		class 	 :'design',
    		stepno	 :'step2'
    	},
    	{
    		steplink :'#step3',
    		class 	 :'approve',
    		stepno	 :'step3'
    	},
    ];
  }
}

export default HomeController;
	