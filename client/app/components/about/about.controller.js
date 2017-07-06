class AboutController {
  constructor() {
    this.name = 'about';
    this.selectedArray = [];

    this.tabscontent = [
    	{
    		title        : 'ameal peptide - presiquel BP - 30 vegicaps',
    		
    	},
    	{
    		title        : 'Oligonol -Metasol- 60 vegicaps',		
    		
    	},
    	{
    		title        : 'time-realease curcumin - Unisorb curcumin - 30 vegicaps',	
    		
    	},
    	{
    		title        : 'time-realease C0Q10 - Unisorb c0Q10 - 30 vegicaps',		
    		
    	},
    	   {
            
            title       : 'ahcc - immunokinoko - 750-60 vegicaps'
        },
        {
                   
            title       : 'bb536 - bigilom - 60 vegicaps'
        },
        {
            
            title     : 'krill oil - omega pl - 30 softgels'
        },
        {
             
            title       : 'pqq - mitoviva - 30 vegicaps'
        },
        
    	
    ];

    this.select =[
    	{
            value:'12',
    		label:'12'
    	},
    	{
    		value:'24',
            label:'24'
    	},
    	{
    		value:'36',
            label:'36'
    	},
    	{
    		value:'48',
            label:'48'
    	},
    	{
    		value:'60',
            label:'60'
    	},
    	{
    		value:'72',
            label:'72'
    	},
    	{
    		value:'84',
            label:'84'
    	},
    	{
    		value:'96',
            label:'96'
    	},
    ];

    this.label =[
    	{
    		radioname:'power',

    	},
    	{
    		radioname:'factor',
    		
    	},
    	{
    		radioname:'forte',
    		
    	},
    	{
    		radioname:'pro',
    		
    	},
    	{
    		radioname:'ultra',
    		
    	},
    	{
    		radioname:'plus',
    		
    	},
    ];
  }
    pushToArray(data,label){
    var temp = {
      name: data,
      label: label
    };
    if(this.selectedArray.length === 0){
      this.selectedArray.push(temp);
    } else {
      for(var obj in this.selectedArray){
        if(this.selectedArray[obj].name !== temp.name && obj == this.selectedArray.length-1){
          this.selectedArray.push(temp);
        } else if(this.selectedArray[obj].name === temp.name){
          this.selectedArray[obj].label = label;
        }
      }
    }
    console.log(this.selectedArray);
  }

}

export default AboutController;
