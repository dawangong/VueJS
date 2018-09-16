class Vue {
    constructor(obj) {
        this.data = obj.data;
        this.observer(this.data);
    }
    //  对象的属性深度监控
    observer(obj) {
      if(typeof obj === 'object' && obj !== null) {
          for (let prop in obj) {
              this.defineHandle(obj, prop, obj[prop]);
          }
      }
    }
    defineHandle(obj, prop, val) {
        this.observer(val);
        Object.defineProperty(obj, prop, {
            get: function () {
                return val
            },
            set: function (newVal) {
                console.log('变化了');
            }
        });
    }
}