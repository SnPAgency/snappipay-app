// NotificationContext.tsx
import React, { createContext, useContext, useState } from 'react';
import Notification from '../components/notification';

interface NotificationContextType {
  showNotification: (title: string, message: string, type?: string) => void;
}

const NotificationContext = createContext<NotificationContextType>({} as NotificationContextType);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'success' | 'error' | 'info' | 'warning'>('success');

  const showNotification = (newTitle: string, newMessage: string, newType: any = 'success') => {
    setTitle(newTitle);
    setMessage(newMessage);
    setType(newType);
    setVisible(true);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <Notification
        title={title}
        message={message}
        visible={visible}
        onHide={() => setVisible(false)}
        type={type}
      />
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);