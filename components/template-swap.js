/**
 * Swap template with mask animation.
 */
AFRAME.registerComponent('template-swap', {
  schema: {type: 'string'},

  init: function () {
    var self = this;

    this.mainEl = this.el.sceneEl.querySelector('#main');
    this.maskEl = this.el.sceneEl.querySelector('#mask');
    this.cam = this.el.sceneEl.querySelector('#camera');
    this.closeup = this.el.sceneEl.querySelector("#close-up");
    this.el.addEventListener('click', function () {
      // Set template.
      var isCloseUpVisible = self.closeup.getAttribute('visible');
      if (isCloseUpVisible) {
        return;
      }
      self.maskEl.emit('fade');
      setTimeout(function () {
        self.mainEl.setAttribute('template', 'src', self.data);
        var isRoom = self.data.startsWith("#room");
        var sound = isRoom ? '#bg-sound2' : '#bg-sound1';
        var volume = isRoom ? 1 : 0.25;
        self.cam.setAttribute('sound', 'src', sound);
        self.cam.setAttribute('sound', 'volume', volume);
        self.maskEl.emit('fade');
      }, 200);
    });
  }
});


AFRAME.registerComponent('show-closeup', {
  schema: {},

  init: function() {
    var self = this;

    this.closeup = this.el.sceneEl.querySelector("#close-up");

    this.closeupListener = function() {
      self.closeup.setAttribute('visible', false);
      setTimeout(function() {
        document.removeEventListener('click', self.closeupListener);
      }, 200);
    }

    this.el.addEventListener('click', function () {
        self.closeup.setAttribute('visible', true);

        setTimeout(function() {
          document.addEventListener('click', self.closeupListener);
        }, 200);
    });
  }
});