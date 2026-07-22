import { useState, useEffect } from 'react';
import { authApi, AuthResponse } from './api';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for user in localStorage on mount
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (e) {
          // If parsing fails, clear the item
          localStorage.removeItem('user');
        }
      }
    }
    setLoading(false);
  }, []);

  const login = async (credentials: { email: string; password: string }): Promise<AuthResponse> => {
    setLoading(true);
    try {
      const result = await authApi.login(credentials);
      setUser(result.user);
      return result;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData: { name: string; email: string; password: string }): Promise<AuthResponse> => {
    setLoading(true);
    try {
      const result = await authApi.register(userData);
      return result;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await authApi.logout();
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    login,
    register,
    logout,
    loading,
  };
};