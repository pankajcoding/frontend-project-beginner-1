(function () {
  class Note {
    constructor(id, title, body) {
      this.id = id;
      this.title = title;
      this.body = body;
    }
  }

  let Notelist = [];
  const saveBtn = document.querySelector(".btn.save-btn");
  const titleInput = document.querySelector(".input.heading-input");
  const bodyInput = document.querySelector(".input.body-input");
  saveBtn.addEventListener("click", (e) => {});
})();
