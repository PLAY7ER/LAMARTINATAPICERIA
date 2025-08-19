// Al hacer clic en una foto de la galería, se abre en grande (zoom modal)
document.querySelectorAll(".galeria img").forEach(img => {
  img.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
    document.body.appendChild(modal);

    // cerrar al hacer clic en el fondo o en la imagen
    modal.addEventListener("click", () => modal.remove());
  });
});

// Estilos extra para el modal
const style = document.createElement("style");
style.innerHTML = `
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  animation: fadeIn .3s ease;
}
.modal img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.6);
  animation: zoomIn .25s ease;
}
@keyframes fadeIn {
  from { opacity: 0; } to { opacity: 1; }
}
@keyframes zoomIn {
  from { transform: scale(.8); opacity:0; }
  to { transform: scale(1); opacity:1; }
}
`;
document.head.appendChild(style);

// Año automático en el footer (si usas <span id="y">)
const yearEl = document.getElementById('y');
if (yearEl) yearEl.textContent = new Date().getFullYear();
