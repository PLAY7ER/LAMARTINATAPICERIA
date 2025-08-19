// Al hacer clic en una foto, se abre en grande (zoom modal)
document.querySelectorAll(".grid img").forEach(img => {
  img.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `<img src="${img.src}" alt="">`;
    document.body.appendChild(modal);

    modal.addEventListener("click", () => modal.remove());
  });
});

// Estilos extra para el modal
const style = document.createElement("style");
style.innerHTML = `
.modal {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
}
`;
document.head.appendChild(style);