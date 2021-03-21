import {message, notification} from "antd";

let globalKey = 0;

export type GlobalMessage = ReturnType<typeof globalMessage>;

export const globalMessage = (title: string) => {
    const key = globalKey++;
    let closeLoading: undefined | (() => void) = undefined;


    const loading = (mssg: React.ReactNode) => {
        console.log("loading");
        closeLoading = message.loading({key, duration: 0, mssg: mssg});
    };

    const stopLoading = () => {
        console.log("stop loading");
        if (!closeLoading)
            return;
        closeLoading();
        closeLoading = undefined;
    };

    const success = (mssg: React.ReactNode) => {
          notification['success']({
              message: title,
              description: mssg,
          });
    };

    const info = (mssg: React.ReactNode) => {
        notification['info']({
            message: title,
            description: mssg,
        });
    };

    const warning = (mssg: React.ReactNode) => {
        notification['warning']({
            message: title,
            description: mssg,
        });
    };

    const error = (mssg: React.ReactNode) => {
        notification['error']({
            message: title,
            description: mssg,
        });
    };

    return {success, info, warning, error};
};