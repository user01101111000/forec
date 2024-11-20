const divide_text: (text: string) => string[] = (text: string): string[] => {
    const divider_count = 20;

    const new_text: string[] = text.split(".").map((x: string): string => x.trim());
    const collector: string[][] = [];

    while (new_text.length > 0) collector.push(new_text.splice(0, divider_count))

    const result: string[] = collector.map((x: string[]): string => x.join("."));

    return result;

}

export default divide_text;