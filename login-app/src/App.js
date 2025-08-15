// Main application controller
import { createLoginForm, handleTabSwitch, handleDemoLogin, showError, handleAuthToggle, handleRegistration, showRegistrationSuccess, showRegistrationError, handleGoogleSignIn } from './components/auth/LoginForm.js';
import { createAdminDashboard, setupUserManagementListeners } from './components/admin/AdminDashboard.js';
import { createUserDashboard } from './components/user/UserDashboard.js';
import { FirebaseAuthService, handleFirebaseLogin, handleFirebaseLogout } from './services/FirebaseAuthService.js';
import { AuthService, handleLogin, handleLogout } from './services/AuthService.js'; // Keep for demo functionality
import { saveUserSession, loadUserSession, clearUserSession } from './utils/SessionUtils.js';
import { setupNavigationListeners } from './utils/NavigationUtils.js';

export class App {
  constructor() {
    this.appElement = document.querySelector('#app');
  }

  // Render login page
  renderLogin() {
    this.appElement.innerHTML = createLoginForm();
    
    // Setup authentication mode toggle (login/register)
    const authToggleContainer = document.querySelector('.auth-toggle');
    authToggleContainer.addEventListener('click', handleAuthToggle);
    
    // Setup login form event listener for Firebase authentication
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (event) => {
      handleFirebaseLogin(
        event,
        (user) => this.onLoginSuccess(user),
        (error) => showError(error)
      );
    });
    
    // Setup registration form event listener
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', (event) => {
      handleRegistration(
        event,
        (userData) => this.onRegistrationSuccess(userData),
        (error) => showRegistrationError(error)
      );
    });
    
    // Set up Google Sign-In buttons
    const googleLoginBtn = document.getElementById('google-login-btn');
    const googleRegisterBtn = document.getElementById('google-register-btn');
    
    if (googleLoginBtn) {
      googleLoginBtn.addEventListener('click', (event) => {
        handleGoogleSignIn(event, this.onLoginSuccess.bind(this), (error) => {
          console.error('Google login error:', error);
        });
      });
    }
    
    if (googleRegisterBtn) {
      googleRegisterBtn.addEventListener('click', (event) => {
        handleGoogleSignIn(event, this.onLoginSuccess.bind(this), (error) => {
          console.error('Google registration error:', error);
        });
      });
    }
    
    // Setup tab switching functionality
    const tabContainer = document.querySelector('.role-tabs');
    tabContainer.addEventListener('click', handleTabSwitch);
    
    // Setup demo login functionality (still uses mock data for demo purposes)
    const demoContainer = document.querySelector('.demo-buttons');
    demoContainer.addEventListener('click', (event) => {
      handleDemoLogin(
        event,
        AuthService.getUsers(),
        (user) => this.onLoginSuccess(user)
      );
    });
  }

  // Render dashboard based on user role
  renderDashboard() {
    const currentUser = FirebaseAuthService.getCurrentUser();
    const userProfile = FirebaseAuthService.getUserProfile();
    
    if (!currentUser || !userProfile) {
      this.renderLogin();
      return;
    }

    const userData = {
      uid: currentUser.uid,
      email: currentUser.email,
      name: userProfile.name,
      role: userProfile.role,
      ...userProfile
    };

    // Render appropriate dashboard based on role
    if (userData.role === 'admin') {
      this.appElement.innerHTML = createAdminDashboard(userData);
      // Setup user management listeners for admin dashboard
      setupUserManagementListeners();
    } else {
      this.appElement.innerHTML = createUserDashboard(userData);
    }

    // Setup navigation listeners
    setupNavigationListeners(() => this.onLogout());
  }

  // Handle successful login
  onLoginSuccess(user) {
    // For Firebase users, the state is managed by Firebase Auth
    // For demo users, still use the old method
    if (user.uid) {
      // Firebase user - state is managed by onAuthStateChanged
      saveUserSession(user);
      this.renderDashboard();
    } else {
      // Demo user - use old method
      AuthService.setCurrentUser(user);
      saveUserSession(user);
      this.renderDashboard();
    }
  }

  // Handle successful registration
  async onRegistrationSuccess(userData) {
    try {
      // Register user with Firebase
      const newUser = await FirebaseAuthService.register(
        userData.email,
        userData.password,
        userData.name,
        userData.role
      );
      
      // Show success message with email verification info
      showRegistrationSuccess('Account created successfully!', true);
      
      // Clear the registration form
      document.getElementById('registerForm').reset();
      
      // Switch back to login mode after a short delay
      setTimeout(() => {
        const loginToggle = document.querySelector('[data-mode="login"]');
        if (loginToggle) {
          loginToggle.click();
        }
      }, 2000);
      
    } catch (error) {
      console.error('Registration error:', error);
      showRegistrationError(error.message || 'Registration failed. Please try again.');
    }
  }

  // Handle logout
  async onLogout() {
    try {
      // Check if it's a Firebase user or demo user
      const currentUser = FirebaseAuthService.getCurrentUser();
      if (currentUser) {
        // Firebase logout
        await handleFirebaseLogout(() => {
          clearUserSession();
          this.renderLogin();
        });
      } else {
        // Demo logout
        handleLogout(() => {
          clearUserSession();
          this.renderLogin();
        });
      }
    } catch (error) {
      console.error('Logout error:', error);
      // Fallback to demo logout
      handleLogout(() => {
        clearUserSession();
        this.renderLogin();
      });
    }
  }

  // Initialize the application
  initialize() {
    // Setup Firebase auth state listener
    FirebaseAuthService.onAuthStateChange((user) => {
      if (user) {
        // User is signed in with Firebase
        this.renderDashboard();
      } else {
        // Check for demo user session
        const savedUser = loadUserSession();
        if (savedUser && !savedUser.uid) {
          // Demo user session exists
          AuthService.setCurrentUser(savedUser);
          this.renderDashboard();
        } else {
          // No user session, show login
          clearUserSession();
          this.renderLogin();
        }
      }
    });
  }
}