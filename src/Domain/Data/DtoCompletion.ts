type DtoCompletion = {
    id: string;
    object: string;
    created: number;
    choices: [
        {
            index: number;
            message: {
                role: string;
                content: string;
            }
        }]
    finish_reason: string;
}

export type {DtoCompletion}