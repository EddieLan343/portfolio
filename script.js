

// Copy email address to clipboard and show feedback
const emailBtn = document.getElementById('emailBtn');

if (emailBtn) {
  emailBtn.addEventListener('click', () => {
    const email = 'jockek@farmingdale.edu';
    
    // Copy address to clipboard
    navigator.clipboard.writeText(email);

    // Tell User
    const originalText = emailBtn.textContent;
    emailBtn.textContent = 'Email Copied!';

    // Reset afterwards
    setTimeout(() => {
      emailBtn.textContent = originalText;
    }, 2000);
  });
}