new Vue({
    el: '#app',
    
	data: () => ({
      myItems: [
        {
		  id: 0,
          done: false,
          text: 'Init 0'
        }
      ],
	  
      newItem: null,
      getId: null,
      updateId: null,
      updateText: null,
	  
      snackbar: false,
      timeout: 1500,
      text: '',
	  
	  lastId : 0,
    }),
  
    computed: {
    },
  
    methods: {
      create () {
        this.myItems.push({
		  id: ++this.lastId,
          done: false,
          text: this.newItem
        })
  
		API_postRequest(this.newItem)
        this.newItem = null
      },
	  getAll() {
		 this.text = "Getting all"
		 this.snackbar = true
		 
		 API_getAllRequest()
		 
		 this.myItems.push({id: ++this.lastId, text: 'Loaded all '})
		 this.myItems.push({id: ++this.lastId, text: 'Loaded all '})
	  },
	  getById() {
		 if(this.getId == null) return;
		 if(((typeof this.myItems.find(x => x.id === this.getId) !== 'undefined'))) return;

		 this.text = "Getting by Id " + this.getId
		 this.snackbar = true
		 
		 API_getRequest(this.getId)
		 
		 this.myItems.push({id: this.getId, text: 'Loaded by Id'})
	  },
	  updateById(id) {
		 if(this.updateId == null || this.updateId == null) return;
		 
		 this.text = "Updating " + this.updateId + " with " + this.updateText
		 this.snackbar = true
		 
		 API_putRequest(this.updateId, this.updateText)
		 
		 this.myItems.find(x => x.id === this.updateId).text = this.updateText
	  },
	  remove(item) {
		 this.text = "Deleting " + item.id
		 this.snackbar = true
		 
		 API_deleteRequest(item.id)
		 
		 this.myItems.splice(this.myItems.indexOf(item), 1)
	  }
    }
  })