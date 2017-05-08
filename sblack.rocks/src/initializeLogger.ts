import * as Logger from "js-logger";

function startLogger() {
    Logger.useDefaults();
    Logger.setHandler((messages, context) => {
        const POST_URL: string = "http://localhost:8080";
        fetch(POST_URL, {
            body: messages[0],
            method: "POST",
            mode: "no-cors",
        }).then((res: Response) => {
            if (res.statusText) {
                return res.blob();
            }
            throw Error(res.statusText);
        }).catch((res: any) => {
            console.error(res);
        });
    });

    window.addEventListener("error", (error: ErrorEvent): boolean => {
        const ERROR_PROPERTIES: string[] = ["colno", "error", "filename", "lineno", "message"];
        const MESSAGE: string = `<ul>${
            ERROR_PROPERTIES.reduce((acc: string, val: any) => {
                return acc + "<li>" + val + ": " + error[val] + "</li>";
            }, `<li>${Date.now()}</li>`)
        }<ul>`;
        Logger.error(MESSAGE);
        return false;
    });
}

export { startLogger };
