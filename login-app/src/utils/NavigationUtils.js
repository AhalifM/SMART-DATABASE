// Navigation utilities

// Handle sidebar navigation
export function handleSidebarNavigation(event) {
  event.preventDefault();
  const navItem = event.target.closest('.nav-item');
  if (!navItem) return;
  
  const section = navItem.dataset.section;
  
  // Update active nav item
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
  navItem.classList.add('active');
  
  // Show corresponding content section
  document.querySelectorAll('.content-section').forEach(content => {
    content.classList.remove('active');
  });
  
  const targetContent = document.getElementById(`${section}-content`);
  if (targetContent) {
    targetContent.classList.add('active');
  }
}

// Setup navigation event listeners
export function setupNavigationListeners(onLogout) {
  // Add logout button event listener
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', onLogout);
  }
  
  // Add sidebar navigation event listener
  const sidebarNav = document.querySelector('.sidebar-nav');
  if (sidebarNav) {
    sidebarNav.addEventListener('click', handleSidebarNavigation);
  }
}