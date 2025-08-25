import { Bounce, toast } from 'react-toastify';

export const showToast = (type: 'success' | 'error' | 'info' | 'warning', message: string) => {
    (toast as any)[type](message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
};
