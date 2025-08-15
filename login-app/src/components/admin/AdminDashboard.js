// Admin dashboard component
export function createAdminSidebar(user) {
  return `
    <aside class="sidebar">
      <div class="sidebar-header">
        <div class="admin-profile">
          <div class="profile-picture">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23e2e8f0'/%3E%3Ccircle cx='20' cy='16' r='6' fill='%236366f1'/%3E%3Cpath d='M8 32c0-6.627 5.373-12 12-12s12 5.373 12 12' fill='%236366f1'/%3E%3C/svg%3E" alt="Admin Profile" />
          </div>
          <h2 class="sidebar-title">Admin Panel</h2>
        </div>
      </div>
      
      <nav class="sidebar-nav">
        <a href="#" class="nav-item active" data-section="dashboard">
          <span class="nav-icon">📊</span>
          Dashboard
        </a>
        <a href="#" class="nav-item" data-section="users">
          <span class="nav-icon">👥</span>
          User Management
        </a>
        <a href="#" class="nav-item" data-section="reports">
          <span class="nav-icon">📋</span>
          Program Tracker
        </a>
        <a href="#" class="nav-item" data-section="settings">
          <span class="nav-icon">⚙️</span>
          Settings
        </a>
        <a href="#" class="nav-item logout-nav-item" id="logoutBtn">
          <span class="nav-icon">🚪</span>
          Logout
        </a>
      </nav>
    </aside>
  `;
}

export function createAdminMainContent() {
  return `
    <div id="dashboard-content" class="content-section active">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-header">
            <h3 class="stat-title">Total Users</h3>
            <span class="stat-icon">👥</span>
          </div>
          <p class="stat-value">1,247</p>
          <div class="stat-trend positive">
            <span class="trend-icon">↗️</span>
            <span class="trend-text">+12% from last month</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-header">
            <h3 class="stat-title">Active Sessions</h3>
            <span class="stat-icon">📊</span>
          </div>
          <p class="stat-value">89</p>
          <div class="stat-trend positive">
            <span class="trend-icon">↗️</span>
            <span class="trend-text">+5% from yesterday</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-header">
            <h3 class="stat-title">System Load</h3>
            <span class="stat-icon">⚡</span>
          </div>
          <p class="stat-value">67%</p>
          <div class="stat-trend negative">
            <span class="trend-icon">↘️</span>
            <span class="trend-text">-3% from last hour</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-header">
            <h3 class="stat-title">Revenue</h3>
            <span class="stat-icon">💰</span>
          </div>
          <p class="stat-value">$24,567</p>
          <div class="stat-trend positive">
            <span class="trend-icon">↗️</span>
            <span class="trend-text">+18% from last month</span>
          </div>
        </div>
      </div>
      
      <div class="dashboard-charts">
        <div class="chart-row">
          <div class="chart-container">
            <div class="chart-header">
              <h3 class="chart-title">User Activity Trend</h3>
              <div class="chart-period">
                <button class="period-btn active">7D</button>
                <button class="period-btn">30D</button>
                <button class="period-btn">90D</button>
              </div>
            </div>
            <div class="line-chart" id="userActivityChart">
              <div class="chart-grid">
                <div class="grid-line"></div>
                <div class="grid-line"></div>
                <div class="grid-line"></div>
                <div class="grid-line"></div>
                <div class="grid-line"></div>
              </div>
              <svg class="chart-svg" viewBox="0 0 400 200">
                <polyline class="chart-line" points="20,180 60,160 100,140 140,120 180,100 220,80 260,90 300,70 340,60 380,50" fill="none" stroke="#6366f1" stroke-width="3"/>
                <circle class="chart-point" cx="20" cy="180" r="4" fill="#6366f1"/>
                <circle class="chart-point" cx="60" cy="160" r="4" fill="#6366f1"/>
                <circle class="chart-point" cx="100" cy="140" r="4" fill="#6366f1"/>
                <circle class="chart-point" cx="140" cy="120" r="4" fill="#6366f1"/>
                <circle class="chart-point" cx="180" cy="100" r="4" fill="#6366f1"/>
                <circle class="chart-point" cx="220" cy="80" r="4" fill="#6366f1"/>
                <circle class="chart-point" cx="260" cy="90" r="4" fill="#6366f1"/>
                <circle class="chart-point" cx="300" cy="70" r="4" fill="#6366f1"/>
                <circle class="chart-point" cx="340" cy="60" r="4" fill="#6366f1"/>
                <circle class="chart-point" cx="380" cy="50" r="4" fill="#6366f1"/>
              </svg>
              <div class="chart-labels">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>
          
          <div class="chart-container">
            <div class="chart-header">
              <h3 class="chart-title">User Distribution</h3>
            </div>
            <div class="pie-chart" id="userDistributionChart">
              <div class="pie-chart-container">
                <svg class="pie-svg" viewBox="0 0 200 200">
                  <circle class="pie-segment admin" cx="100" cy="100" r="80" stroke="#6366f1" stroke-width="20" fill="none" stroke-dasharray="125.6 376.8" stroke-dashoffset="0" transform="rotate(-90 100 100)"/>
                  <circle class="pie-segment user" cx="100" cy="100" r="80" stroke="#10b981" stroke-width="20" fill="none" stroke-dasharray="188.4 314" stroke-dashoffset="-125.6" transform="rotate(-90 100 100)"/>
                  <circle class="pie-segment moderator" cx="100" cy="100" r="80" stroke="#f59e0b" stroke-width="20" fill="none" stroke-dasharray="62.8 439.6" stroke-dashoffset="-314" transform="rotate(-90 100 100)"/>
                </svg>
                <div class="pie-center">
                  <span class="pie-total">1,247</span>
                  <span class="pie-label">Total Users</span>
                </div>
              </div>
              <div class="pie-legend">
                <div class="legend-item">
                  <div class="legend-color admin"></div>
                  <span class="legend-text">Admin (25%)</span>
                </div>
                <div class="legend-item">
                  <div class="legend-color user"></div>
                  <span class="legend-text">Users (60%)</span>
                </div>
                <div class="legend-item">
                  <div class="legend-color moderator"></div>
                  <span class="legend-text">Moderators (15%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="chart-row">
          <div class="chart-container">
            <div class="chart-header">
              <h3 class="chart-title">System Performance</h3>
            </div>
            <div class="performance-metrics">
              <div class="metric-item">
                <div class="metric-label">CPU Usage</div>
                <div class="metric-bar">
                  <div class="metric-fill cpu" style="width: 67%"></div>
                  <span class="metric-value">67%</span>
                </div>
              </div>
              <div class="metric-item">
                <div class="metric-label">Memory Usage</div>
                <div class="metric-bar">
                  <div class="metric-fill memory" style="width: 45%"></div>
                  <span class="metric-value">45%</span>
                </div>
              </div>
              <div class="metric-item">
                <div class="metric-label">Disk Usage</div>
                <div class="metric-bar">
                  <div class="metric-fill disk" style="width: 78%"></div>
                  <span class="metric-value">78%</span>
                </div>
              </div>
              <div class="metric-item">
                <div class="metric-label">Network I/O</div>
                <div class="metric-bar">
                  <div class="metric-fill network" style="width: 32%"></div>
                  <span class="metric-value">32%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="chart-container">
            <div class="chart-header">
              <h3 class="chart-title">Recent Activity</h3>
            </div>
            <div class="activity-feed">
              <div class="activity-item">
                <div class="activity-icon user-login">👤</div>
                <div class="activity-content">
                  <div class="activity-text">New user registration: john.doe@example.com</div>
                  <div class="activity-time">2 minutes ago</div>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon system-update">🔄</div>
                <div class="activity-content">
                  <div class="activity-text">System backup completed successfully</div>
                  <div class="activity-time">15 minutes ago</div>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon security">🔒</div>
                <div class="activity-content">
                  <div class="activity-text">Security scan completed - No threats detected</div>
                  <div class="activity-time">1 hour ago</div>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon performance">⚡</div>
                <div class="activity-content">
                  <div class="activity-text">Performance optimization applied</div>
                  <div class="activity-time">2 hours ago</div>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon maintenance">🔧</div>
                <div class="activity-content">
                  <div class="activity-text">Scheduled maintenance completed</div>
                  <div class="activity-time">3 hours ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="quick-actions">
        <h3 class="section-title">Quick Actions</h3>
        <div class="action-buttons">
          <button class="action-btn">
            <span>👥</span>
            Add User
          </button>
          <button class="action-btn">
            <span>📊</span>
            Generate Report
          </button>
          <button class="action-btn">
            <span>⚙️</span>
            System Settings
          </button>
          <button class="action-btn">
            <span>🔄</span>
            Backup Data
          </button>
          <button class="action-btn">
            <span>🔒</span>
            Security Scan
          </button>
          <button class="action-btn">
            <span>📈</span>
            Analytics
          </button>
        </div>
      </div>
    </div>
    
    <div id="users-content" class="content-section">
      <div class="user-management-header">
        <h3 class="section-title">User Management</h3>
        <p style="color: #64748b; margin-bottom: 1.5rem;">Manage all system users, roles, and permissions from this section.</p>
        
        <div class="user-controls">
          <div class="search-filter-section">
            <div class="search-box">
              <input type="text" id="userSearch" placeholder="Search users by name or email..." class="search-input">
              <span class="search-icon">🔍</span>
            </div>
            
            <div class="filter-section">
              <select id="statusFilter" class="filter-select">
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
          
          <div class="action-buttons">
            <button class="action-btn primary">
              <span>➕</span>
              Add New User
            </button>
            <button class="action-btn">
              <span>📤</span>
              Export Users
            </button>
          </div>
        </div>
      </div>
      
      <div class="users-table-container">
        <table class="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Last Login</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="usersTableBody">
            <tr class="user-row">
              <td>
                <div class="user-info">
                  <div class="user-avatar">A</div>
                  <span class="user-name">Administrator</span>
                </div>
              </td>
              <td class="user-email">admin@example.com</td>
              <td><span class="role-badge admin">Admin</span></td>
              <td><span class="status-badge active">Active</span></td>
              <td class="last-login">2 hours ago</td>
              <td>
                <div class="action-menu">
                  <button class="action-menu-btn" title="Edit User">✏️</button>
                  <button class="action-menu-btn" title="View Details">👁️</button>
                  <button class="action-menu-btn danger" title="Delete User">🗑️</button>
                </div>
              </td>
            </tr>
            <tr class="user-row">
              <td>
                <div class="user-info">
                  <div class="user-avatar">R</div>
                  <span class="user-name">Regular User</span>
                </div>
              </td>
              <td class="user-email">user@example.com</td>
              <td><span class="role-badge user">User</span></td>
              <td><span class="status-badge active">Active</span></td>
              <td class="last-login">1 day ago</td>
              <td>
                <div class="action-menu">
                  <button class="action-menu-btn" title="Edit User">✏️</button>
                  <button class="action-menu-btn" title="View Details">👁️</button>
                  <button class="action-menu-btn danger" title="Delete User">🗑️</button>
                </div>
              </td>
            </tr>
            <tr class="user-row">
              <td>
                <div class="user-info">
                  <div class="user-avatar">J</div>
                  <span class="user-name">John Smith</span>
                </div>
              </td>
              <td class="user-email">john.smith@example.com</td>
              <td><span class="role-badge moderator">Moderator</span></td>
              <td><span class="status-badge inactive">Inactive</span></td>
              <td class="last-login">1 week ago</td>
              <td>
                <div class="action-menu">
                  <button class="action-menu-btn" title="Edit User">✏️</button>
                  <button class="action-menu-btn" title="View Details">👁️</button>
                  <button class="action-menu-btn danger" title="Delete User">🗑️</button>
                </div>
              </td>
            </tr>
            <tr class="user-row">
              <td>
                <div class="user-info">
                  <div class="user-avatar">S</div>
                  <span class="user-name">Sarah Johnson</span>
                </div>
              </td>
              <td class="user-email">sarah.johnson@example.com</td>
              <td><span class="role-badge user">User</span></td>
              <td><span class="status-badge pending">Pending</span></td>
              <td class="last-login">Never</td>
              <td>
                <div class="action-menu">
                  <button class="action-menu-btn" title="Edit User">✏️</button>
                  <button class="action-menu-btn" title="View Details">👁️</button>
                  <button class="action-menu-btn danger" title="Delete User">🗑️</button>
                </div>
              </td>
            </tr>
            <tr class="user-row">
              <td>
                <div class="user-info">
                  <div class="user-avatar">M</div>
                  <span class="user-name">Mike Wilson</span>
                </div>
              </td>
              <td class="user-email">mike.wilson@example.com</td>
              <td><span class="role-badge user">User</span></td>
              <td><span class="status-badge active">Active</span></td>
              <td class="last-login">3 days ago</td>
              <td>
                <div class="action-menu">
                  <button class="action-menu-btn" title="Edit User">✏️</button>
                  <button class="action-menu-btn" title="View Details">👁️</button>
                  <button class="action-menu-btn danger" title="Delete User">🗑️</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        
        <div class="table-footer">
          <div class="table-info">
            <span>Showing <strong>5</strong> of <strong>5</strong> users</span>
          </div>
          <div class="pagination">
            <button class="pagination-btn" disabled>Previous</button>
            <span class="pagination-info">Page 1 of 1</span>
            <button class="pagination-btn" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
    
    <div id="reports-content" class="content-section">
      <div class="program-tracker-header">
        <h3 class="section-title">Program Tracker</h3>
        <p style="color: #64748b; margin-bottom: 1.5rem;">Track and monitor all program activities and their completion status.</p>
        
        <div class="tracker-controls">
          <div class="search-filter-section">
            <div class="search-box">
              <input type="text" id="activitySearch" placeholder="Search activities..." class="search-input">
              <span class="search-icon">🔍</span>
            </div>
            
            <div class="filter-section">
              <select id="statusActivityFilter" class="filter-select">
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="in-progress">In Progress</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
              </select>
              
              <select id="categoryFilter" class="filter-select">
                <option value="all">All Categories</option>
                <option value="training">Training</option>
                <option value="workshop">Workshop</option>
                <option value="meeting">Meeting</option>
                <option value="project">Project</option>
                <option value="event">Event</option>
              </select>
            </div>
          </div>
          
          <div class="action-buttons">
            <button class="action-btn primary">
              <span>➕</span>
              Add Activity
            </button>
            <button class="action-btn">
              <span>📤</span>
              Export Report
            </button>
          </div>
        </div>
      </div>
      
      <div class="activities-summary">
        <div class="summary-cards">
          <div class="summary-card">
            <div class="summary-icon completed">✅</div>
            <div class="summary-info">
              <h4>Completed</h4>
              <span class="summary-count">24</span>
            </div>
          </div>
          <div class="summary-card">
            <div class="summary-icon in-progress">🔄</div>
            <div class="summary-info">
              <h4>In Progress</h4>
              <span class="summary-count">8</span>
            </div>
          </div>
          <div class="summary-card">
            <div class="summary-icon pending">⏳</div>
            <div class="summary-info">
              <h4>Pending</h4>
              <span class="summary-count">5</span>
            </div>
          </div>
          <div class="summary-card">
            <div class="summary-icon total">📊</div>
            <div class="summary-info">
              <h4>Total Activities</h4>
              <span class="summary-count">37</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="activities-table-container">
        <table class="activities-table">
          <thead>
            <tr>
              <th>Activity Name</th>
              <th>Category</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Progress</th>
              <th>Assigned To</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="activitiesTableBody">
            <tr class="activity-row">
              <td>
                <div class="activity-info">
                  <div class="activity-icon">🎓</div>
                  <div class="activity-details">
                    <span class="activity-name">Leadership Training Program</span>
                    <span class="activity-description">Comprehensive leadership development workshop</span>
                  </div>
                </div>
              </td>
              <td><span class="category-badge training">Training</span></td>
              <td class="activity-date">2024-01-15</td>
              <td class="activity-date">2024-01-20</td>
              <td><span class="status-badge completed">Completed</span></td>
              <td>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: 100%"></div>
                  <span class="progress-text">100%</span>
                </div>
              </td>
              <td class="assigned-to">Sarah Johnson</td>
              <td>
                <div class="action-menu">
                  <button class="action-menu-btn" title="View Details">👁️</button>
                  <button class="action-menu-btn" title="Edit Activity">✏️</button>
                  <button class="action-menu-btn" title="Generate Report">📊</button>
                </div>
              </td>
            </tr>
            <tr class="activity-row">
              <td>
                <div class="activity-info">
                  <div class="activity-icon">🔧</div>
                  <div class="activity-details">
                    <span class="activity-name">System Maintenance Workshop</span>
                    <span class="activity-description">Technical maintenance and troubleshooting session</span>
                  </div>
                </div>
              </td>
              <td><span class="category-badge workshop">Workshop</span></td>
              <td class="activity-date">2024-02-01</td>
              <td class="activity-date">2024-02-03</td>
              <td><span class="status-badge in-progress">In Progress</span></td>
              <td>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: 65%"></div>
                  <span class="progress-text">65%</span>
                </div>
              </td>
              <td class="assigned-to">Mike Wilson</td>
              <td>
                <div class="action-menu">
                  <button class="action-menu-btn" title="View Details">👁️</button>
                  <button class="action-menu-btn" title="Edit Activity">✏️</button>
                  <button class="action-menu-btn" title="Generate Report">📊</button>
                </div>
              </td>
            </tr>
            <tr class="activity-row">
              <td>
                <div class="activity-info">
                  <div class="activity-icon">📅</div>
                  <div class="activity-details">
                    <span class="activity-name">Monthly Team Meeting</span>
                    <span class="activity-description">Regular team coordination and planning meeting</span>
                  </div>
                </div>
              </td>
              <td><span class="category-badge meeting">Meeting</span></td>
              <td class="activity-date">2024-02-15</td>
              <td class="activity-date">2024-02-15</td>
              <td><span class="status-badge pending">Pending</span></td>
              <td>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: 0%"></div>
                  <span class="progress-text">0%</span>
                </div>
              </td>
              <td class="assigned-to">John Smith</td>
              <td>
                <div class="action-menu">
                  <button class="action-menu-btn" title="View Details">👁️</button>
                  <button class="action-menu-btn" title="Edit Activity">✏️</button>
                  <button class="action-menu-btn" title="Generate Report">📊</button>
                </div>
              </td>
            </tr>
            <tr class="activity-row">
              <td>
                <div class="activity-info">
                  <div class="activity-icon">🚀</div>
                  <div class="activity-details">
                    <span class="activity-name">Digital Transformation Project</span>
                    <span class="activity-description">Implementation of new digital systems and processes</span>
                  </div>
                </div>
              </td>
              <td><span class="category-badge project">Project</span></td>
              <td class="activity-date">2024-01-01</td>
              <td class="activity-date">2024-03-31</td>
              <td><span class="status-badge in-progress">In Progress</span></td>
              <td>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: 45%"></div>
                  <span class="progress-text">45%</span>
                </div>
              </td>
              <td class="assigned-to">Administrator</td>
              <td>
                <div class="action-menu">
                  <button class="action-menu-btn" title="View Details">👁️</button>
                  <button class="action-menu-btn" title="Edit Activity">✏️</button>
                  <button class="action-menu-btn" title="Generate Report">📊</button>
                </div>
              </td>
            </tr>
            <tr class="activity-row">
              <td>
                <div class="activity-info">
                  <div class="activity-icon">🎉</div>
                  <div class="activity-details">
                    <span class="activity-name">Annual Company Event</span>
                    <span class="activity-description">Year-end celebration and awards ceremony</span>
                  </div>
                </div>
              </td>
              <td><span class="category-badge event">Event</span></td>
              <td class="activity-date">2024-12-20</td>
              <td class="activity-date">2024-12-20</td>
              <td><span class="status-badge completed">Completed</span></td>
              <td>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: 100%"></div>
                  <span class="progress-text">100%</span>
                </div>
              </td>
              <td class="assigned-to">Sarah Johnson</td>
              <td>
                <div class="action-menu">
                  <button class="action-menu-btn" title="View Details">👁️</button>
                  <button class="action-menu-btn" title="Edit Activity">✏️</button>
                  <button class="action-menu-btn" title="Generate Report">📊</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        
        <div class="table-footer">
          <div class="table-info">
            <span>Showing <strong>5</strong> of <strong>37</strong> activities</span>
          </div>
          <div class="pagination">
            <button class="pagination-btn">Previous</button>
            <span class="pagination-info">Page 1 of 8</span>
            <button class="pagination-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
    
    <div id="settings-content" class="content-section">
      <div class="quick-actions">
        <h3 class="section-title">System Settings</h3>
        <p style="color: #64748b; margin-bottom: 1.5rem;">Configure system-wide settings and preferences.</p>
        <div class="action-buttons">
          <button class="action-btn">
            <span>⚙️</span>
            General
          </button>
          <button class="action-btn">
            <span>🔐</span>
            Security
          </button>
          <button class="action-btn">
            <span>🌐</span>
            Network
          </button>
        </div>
      </div>
    </div>
  `;
}

export function createAdminDashboard(user) {
  const sidebar = createAdminSidebar(user);
  const mainContent = createAdminMainContent();
  
  return `
    <div class="admin-layout">
      ${sidebar}
      
      <main class="main-content">
        <div class="content-header">
          <h1 class="content-title">e-MASA Smart Database</h1>
          <p class="content-subtitle">Welcome, ${user.name} - You have full system access</p>
        </div>
        
        ${mainContent}
      </main>
    </div>
  `;
}

// Import Firebase service for user management
import { FirebaseAuthService } from '../../services/FirebaseAuthService.js';

// User Management functionality
export async function initializeUserManagement() {
  const usersTableBody = document.getElementById('usersTableBody');
  
  // Load users from Firebase
  let users = [];
  try {
    users = await FirebaseAuthService.getAllUsers();
    // Format the data for display
    users = users.map(user => ({
      id: user.id,
      name: user.name || 'Unknown',
      email: user.email || 'No email',
      role: user.role || 'user',
      status: user.status || 'active',
      lastLogin: user.lastLogin ? formatLastLogin(user.lastLogin) : 'Never'
    }));
  } catch (error) {
    console.error('Error loading users:', error);
    // Fallback to mock data if Firebase fails
    users = [
      { id: 1, name: 'Administrator', email: 'admin@example.com', role: 'admin', status: 'active', lastLogin: '2 hours ago' },
      { id: 2, name: 'Regular User', email: 'user@example.com', role: 'user', status: 'active', lastLogin: '1 day ago' },
      { id: 3, name: 'John Smith', email: 'john.smith@example.com', role: 'moderator', status: 'inactive', lastLogin: '1 week ago' },
      { id: 4, name: 'Sarah Johnson', email: 'sarah.johnson@example.com', role: 'user', status: 'pending', lastLogin: 'Never' },
      { id: 5, name: 'Mike Wilson', email: 'mike.wilson@example.com', role: 'user', status: 'active', lastLogin: '3 days ago' }
    ];
    showUserManagementError('Failed to load users from database. Showing sample data.');
  }

  // Helper function to format last login date
  function formatLastLogin(date) {
    if (!date) return 'Never';
    const now = new Date();
    const loginDate = date.toDate ? date.toDate() : new Date(date);
    const diffMs = now - loginDate;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 60) return `${diffMins} minutes ago`;
    if (diffHours < 24) return `${diffHours} hours ago`;
    if (diffDays < 7) return `${diffDays} days ago`;
    return loginDate.toLocaleDateString();
  }

  // Helper function to show error messages
  function showUserManagementError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'user-management-error';
    errorDiv.style.cssText = 'background: #fee; color: #c53030; padding: 10px; border-radius: 5px; margin-bottom: 15px; border: 1px solid #feb2b2;';
    errorDiv.textContent = message;
    
    const userManagementSection = document.getElementById('users-content');
    if (userManagementSection) {
      userManagementSection.insertBefore(errorDiv, userManagementSection.firstChild);
      setTimeout(() => errorDiv.remove(), 5000);
    }
  }
  
  function renderUsers(filteredUsers = users) {
    if (!usersTableBody) return;
    
    usersTableBody.innerHTML = filteredUsers.map(user => `
      <tr class="user-row">
        <td>
          <div class="user-info">
            <div class="user-avatar">${user.name.charAt(0).toUpperCase()}</div>
            <span class="user-name">${user.name}</span>
          </div>
        </td>
        <td class="user-email">${user.email}</td>
        <td><span class="role-badge ${user.role}">${user.role.charAt(0).toUpperCase() + user.role.slice(1)}</span></td>
        <td><span class="status-badge ${user.status}">${user.status.charAt(0).toUpperCase() + user.status.slice(1)}</span></td>
        <td class="last-login">${user.lastLogin}</td>
        <td>
          <div class="action-menu">
            <button class="action-menu-btn" title="Edit User">✏️</button>
            <button class="action-menu-btn" title="View Details">👁️</button>
            <button class="action-menu-btn danger" title="Delete User">🗑️</button>
          </div>
        </td>
      </tr>
    `).join('');
    
    // Update table info
    const tableInfo = document.querySelector('.table-info');
    if (tableInfo) {
      const total = filteredUsers.length;
      tableInfo.innerHTML = `<span>Showing <strong>${total}</strong> of <strong>${users.length}</strong> users</span>`;
    }
  }
  
  function filterUsers() {
    const searchTerm = document.getElementById('userSearch').value.toLowerCase();
    const statusFilter = document.getElementById('statusFilter').value;
    
    const filteredUsers = users.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(searchTerm) || 
                          user.email.toLowerCase().includes(searchTerm);
      const matchesStatus = statusFilter === 'all' || user.status.toLowerCase() === statusFilter.toLowerCase();
      
      return matchesSearch && matchesStatus;
    });
    
    renderUsers(filteredUsers);
  }
  
  // Add event listeners for search and filter
  const searchInput = document.getElementById('userSearch');
  const statusFilterSelect = document.getElementById('statusFilter');
  
  if (searchInput) {
    searchInput.addEventListener('input', filterUsers);
  }
  
  if (statusFilterSelect) {
    statusFilterSelect.addEventListener('change', filterUsers);
  }
  
  // Initialize
  renderUsers();
}

// Initialize user management when users section is activated
export function setupUserManagementListeners() {
  const userManagementNav = document.querySelector('[data-section="users"]');
  if (userManagementNav) {
    userManagementNav.addEventListener('click', () => {
      setTimeout(async () => {
        await initializeUserManagement();
      }, 100);
    });
  }
}