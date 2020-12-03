(function () {
  const notesListElem = document.querySelector("div.notes-list");
  let Notelist = [];
  let noteId;
  const newNoteBtn = document.querySelector(".btn.new-note-btn");
  const saveBtn = document.querySelector(".btn.save-btn");
  const titleInput = document.querySelector("input.heading-input");
  const bodyInput = document.querySelector("textarea.body-input");

  function renderNoteLinks(Notelist) {
    notesListElem.innerHTML = "";
    for (let i = 0; i < Notelist.length; i++) {
      let { title, body } = Notelist[i];

      let titleElem = document.createElement("div");
      titleElem.setAttribute("class", "note-link--title");
      titleElem.textContent = title;

      let bodyElem = document.createElement("div");
      bodyElem.setAttribute("class", "note-link--body");
      bodyElem.textContent = body;

      let noteLinkElem = document.createElement("div");
      noteLinkElem.setAttribute("class", "note-link");
      noteLinkElem.setAttribute("id", "node-" + i);

      noteLinkElem.appendChild(titleElem);
      noteLinkElem.appendChild(bodyElem);
      notesListElem.appendChild(noteLinkElem);

      noteLinkElem.addEventListener("click", (e) => {
        let noteLinks = document.querySelectorAll(".note-link");
        noteLinks.forEach((note) => {
          note.classList.remove("active");
        });
        noteLinkElem.classList.add("active");
        console.log("title and body", title, body);
        titleInput.value = title;
        bodyInput.value = body;
        titleInput.focus();
      });

      // const noteLinks = document.querySelectorAll(".note-link");
      // noteLinks.forEach((noteLink, index) => {
      //   noteLink.addEventListener("click", (e) => {
      //     console.log("asa", e.target);
      //     noteLinks.forEach((note) => {
      //       note.classList.remove("active");
      //     });
      //     console.log(this);
      //     noteLink.classList.add("active");
      //     console.log(title, body);
      //     titleInput.textContent = title;
      //     titleInput.focus();
      //     bodyInput.textContent = body;
      //   });
      // });

      console.log("sdada", noteLinkElem, notesListElem);
    }
  }
  class Note {
    constructor(title, body) {
      this.title = title;
      this.body = body;
    }
  }

  newNoteBtn.addEventListener("click", (e) => {
    noteId = Notelist.length;
    titleInput.value = "";
    titleInput.focus();
    bodyInput.value = "";
  });

  saveBtn.addEventListener("click", (e) => {
    let title = titleInput.value;
    let body = bodyInput.value;
    if (title == "" && body == "") return;
    let newNote = new Note(title, body);
    if (Notelist.length + 1 < noteId) Notelist.push({});
    if (noteId != undefined) Notelist[noteId] = newNote;
    renderNoteLinks(Notelist);
    console.log(Notelist[noteId]);
    document.querySelector("#node-" + noteId).classList.add("active");
  });
})();
