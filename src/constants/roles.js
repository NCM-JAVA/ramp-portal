// Role definitions
export const ROLES = {
    USER: 'user',
    CONTENT_MANAGER: 'content_manager',
    ADMIN: 'admin',
    SUPER_ADMIN: 'super_admin',
};

// Role groups for route protection
export const ROLE_GROUPS = {
    // User only (regular users, not admins)
    USER_ONLY: [ROLES.USER],

    // Super admin only
    SUPER_ADMIN_ONLY: [ROLES.SUPER_ADMIN],

    // Admin and above
    ADMIN_AND_ABOVE: [ROLES.ADMIN, ROLES.SUPER_ADMIN],

    // Content manager and admins
    CONTENT_MANAGER_ACCESS: [ROLES.CONTENT_MANAGER, ROLES.ADMIN, ROLES.SUPER_ADMIN],

    // All authenticated users
    ALL_USERS: [ROLES.USER, ROLES.CONTENT_MANAGER, ROLES.ADMIN, ROLES.SUPER_ADMIN],
};

// Helper function to check if user has required role
export const hasRole = (userRole, allowedRoles) => {
    return allowedRoles.includes(userRole);
};

// Helper function to get role display name
export const getRoleDisplayName = (role) => {
    const roleNames = {
        [ROLES.USER]: 'User',
        [ROLES.CONTENT_MANAGER]: 'Content Manager',
        [ROLES.ADMIN]: 'Admin',
        [ROLES.SUPER_ADMIN]: 'Super Admin',
    };
    return roleNames[role] || 'Unknown';
};
