import React from 'react';

type FormValidationProps = {
  children: React.ReactNode;
  onSubmit: (data: any) => void;
};

export default function FormValidation({ children, onSubmit }: FormValidationProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    
    // Convert FormData to object
    formData.forEach((value, key) => {
      data[key] = value as string;
    });
    
    // Validate required fields
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach((field) => {
      const input = field as HTMLInputElement;
      if (!input.value.trim()) {
        isValid = false;
        // Add error class
        input.classList.add('border-red-500');
        
        // Add error message if it doesn't exist
        const errorId = `${input.id}-error`;
        if (!document.getElementById(errorId)) {
          const errorElement = document.createElement('p');
          errorElement.id = errorId;
          errorElement.className = 'mt-1 text-sm text-red-600';
          errorElement.textContent = 'This field is required';
          input.parentNode?.appendChild(errorElement);
        }
      } else {
        // Remove error class and message
        input.classList.remove('border-red-500');
        const errorElement = document.getElementById(`${input.id}-error`);
        if (errorElement) {
          errorElement.remove();
        }
      }
    });
    
    // Validate email fields
    const emailFields = form.querySelectorAll('input[type="email"]');
    emailFields.forEach((field) => {
      const input = field as HTMLInputElement;
      if (input.value.trim() && !validateEmail(input.value)) {
        isValid = false;
        // Add error class
        input.classList.add('border-red-500');
        
        // Add error message if it doesn't exist
        const errorId = `${input.id}-error`;
        if (!document.getElementById(errorId)) {
          const errorElement = document.createElement('p');
          errorElement.id = errorId;
          errorElement.className = 'mt-1 text-sm text-red-600';
          errorElement.textContent = 'Please enter a valid email address';
          input.parentNode?.appendChild(errorElement);
        }
      }
    });
    
    // Validate password fields
    const passwordFields = form.querySelectorAll('input[type="password"]');
    const passwords: string[] = [];
    passwordFields.forEach((field) => {
      const input = field as HTMLInputElement;
      passwords.push(input.value);
      
      if (input.value.trim() && input.value.length < 8) {
        isValid = false;
        // Add error class
        input.classList.add('border-red-500');
        
        // Add error message if it doesn't exist
        const errorId = `${input.id}-error`;
        if (!document.getElementById(errorId)) {
          const errorElement = document.createElement('p');
          errorElement.id = errorId;
          errorElement.className = 'mt-1 text-sm text-red-600';
          errorElement.textContent = 'Password must be at least 8 characters';
          input.parentNode?.appendChild(errorElement);
        }
      }
    });
    
    // Check if passwords match
    if (passwordFields.length > 1 && passwords[0] !== passwords[1]) {
      isValid = false;
      const confirmInput = passwordFields[1] as HTMLInputElement;
      
      // Add error class
      confirmInput.classList.add('border-red-500');
      
      // Add error message if it doesn't exist
      const errorId = `${confirmInput.id}-error`;
      if (!document.getElementById(errorId)) {
        const errorElement = document.createElement('p');
        errorElement.id = errorId;
        errorElement.className = 'mt-1 text-sm text-red-600';
        errorElement.textContent = 'Passwords do not match';
        confirmInput.parentNode?.appendChild(errorElement);
      }
    }
    
    if (isValid) {
      onSubmit(data);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

// Helper function to validate email
function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
