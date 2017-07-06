class QolformController {
  constructor($uibModal, $log, $document) {
    this.name = 'qolform';
    this.$uibModal=$uibModal;
    this.items=['item1','item2','item3'];
    this.animationsEnabled= true;
    this.$log=$log;
  }

  open(size, parentSelector){
  	var parentElem = parentSelector ? angular.element($document[0].querySelector('.modal-demo'+ parentSelector)):undefined;
  	var modalInstance=this.$uibModal.open({
  		animation:this.animationsEnabled,
  		ariaLabelledBy:'modal-title',
  		ariaDescribedBy:'modal-body',
  		templateUrl:'modalcontent.html',
      controller:'ModalInstanceCtrl',
      controllerAs:'$ctrl',
  		size:size,
  		appendTo: parentElem,
  		resolve:{
  			items:()=>{
  				return this.items;
  			}
  		}
  	});

  	modalInstance.result.then((selectedItem)=>{
  		this.selected=selectedItem;
  	},()=>{
  		this.$log.info('modal dismissed at: '+ new Date());
  	});
  };
}

QolformController.$inject=['$uibModal', '$log', '$document'];

export default QolformController;
