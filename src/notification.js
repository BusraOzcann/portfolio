import { useToast } from "vue-toastification";

const toast = useToast();

export default {
    toast(type, message, duration) {
        switch (type) {
            case "success":
                toast.success(message, {
                    timeout: duration
                });
                break;
            case "warning":
                toast.warning(message, {
                    timeout: duration
                });
                break;
            case "error":
                toast.error(message, {
                    timeout: duration
                });
                break;
            case "default":
                toast.default(message, {
                    timeout: duration
                });
                break;
            case "info":
                toast.info(message, {
                    timeout: duration
                });
                break;
            default:
            // code block
        }
    }
}
