// ==========================================
// ⚖️ RENTO LEGAL PAGES LIVE FILTER LOGIC
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('legalSearch');
  
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const filterText = e.target.value.toLowerCase().trim();
      const textSections = document.querySelectorAll('.legal-content section');

      textSections.forEach(section => {
        const textContent = section.textContent.toLowerCase();
        
        if (textContent.includes(filterText)) {
          section.style.display = 'block';
          section.style.opacity = '1';
        } else {
          section.style.display = 'none';
        }
      });
    });
  }
});