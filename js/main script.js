// ==========================================
// 🟧 INTERACTIVE FAQ ACCORDION LOGIC
// ==========================================

// Wait until the HTML elements are fully parsed
document.addEventListener('DOMContentLoaded', () => {
  
  // Select all headers inside the FAQ cards
  const faqHeaders = document.querySelectorAll('.faq-header');

  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      // Find the parent item (.faq-item wrapper)
      const parentItem = header.parentElement;
      
      // Toggle the 'active' class on the target item
      parentItem.classList.toggle('active');
      
      // OPTIONAL: Close other opened FAQ sections when clicking a new one (Single Open Mode)
      faqHeaders.forEach(otherHeader => {
        const otherItem = otherHeader.parentElement;
        if (otherItem !== parentItem) {
          otherItem.classList.remove('active');
        }
      });
      
    });
  });
});
// ==========================================
// 📥 DOWNLOAD PERMISSION MODAL
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const downloadBtn = document.getElementById("downloadBtn","downloadBtn2");
    const modal = document.getElementById("downloadModal");
    const allowBtn = document.getElementById("allowBtn");
    const denyBtn = document.getElementById("denyBtn");

    // Open Popup
    downloadBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
    });

    // Close Popup (Cancel)
    denyBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Download File
    allowBtn.addEventListener("click", () => {

        modal.style.display = "none";

        // Replace this with your actual APK or file link
        window.location.href = "downloads/nn.apk";

    });

    // Close when clicking outside the popup
    modal.addEventListener("click", (e) => {

        if (e.target === modal) {
            modal.style.display = "none";
        }

    });

    // Close with ESC key
    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {
            modal.style.display = "none";
        }

    });

});
// ==================================================//
//  feedback
// ===================================================//

document.addEventListener("DOMContentLoaded", () => {

    const listform = document.getElementById("listform");
    const modal = document.getElementById("listModal");
    const denyBtn = document.getElementById("listdenyBtn");
    
    // Both Form Buttons
    const tenantFormBtn = document.getElementById("tenantFormBtn");
    const ownerFormBtn = document.getElementById("ownerFormBtn");

    // Open Modal
    if (listform && modal) {
        listform.addEventListener("click", (e) => {
            e.preventDefault();
            modal.style.display = "flex";
        });
    }

    // Close Modal
    if (denyBtn && modal) {
        denyBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // 1. 🌟 Tenant Google Form Click
    if (tenantFormBtn) {
        tenantFormBtn.addEventListener("click", () => {
            const tenantFormUrl = "https://forms.gle/24ovuWWdKXSKdH8E8"; // Tenant Form Link Here
            window.open(tenantFormUrl, "_blank");
        });
    }

    // 2. 🌟 Property Owner Google Form Click
    if (ownerFormBtn) {
        ownerFormBtn.addEventListener("click", () => {
            const ownerFormUrl = "https://forms.gle/9C6hMCzuxZaBioBz8"; // Owner Form Link Here
            window.open(ownerFormUrl, "_blank");
        });
    }

    // Close on Outside Click
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    // Close on Escape Key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal) {
            modal.style.display = "none";
        }
    });

});